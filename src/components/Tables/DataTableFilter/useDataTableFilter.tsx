import { IFilterData, IFilterItem } from '../../Filters/ModalFilter/types'
import { IDataTableFilterProps } from './IDataTableFilterProps'
import { useDataTable } from '../../../hooks/useDataTable'
import { useModal } from '../../../hooks/useModal'
import { debounce } from '@tanstack/pacer'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

const getUrlParam = (name: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}

const setUrlParam = (name: string, value: string) => {
  const url = new URL(window.location.href)
  url.searchParams.set(name, value)
  window.history.replaceState({}, '', url.toString())
}

const removeUrlParam = (name: string) => {
  const url = new URL(window.location.href)
  url.searchParams.delete(name)
  window.history.replaceState({}, '', url.toString())
}

const readFiltersFromUrl = <Values,>(): IFilterItem<Values>[] => {
  const urlParams = new URLSearchParams(window.location.search)
  const filters: IFilterItem<Values>[] = []
  let index = 0

  while (true) {
    const property = urlParams.get(`filters[${index}][property]`)
    if (property === null) {
      break
    }

    const value = urlParams.get(`filters[${index}][value]`) ?? ''
    const operator = urlParams.get(`filters[${index}][operator]`) ?? undefined

    filters.push({
      property: property as Extract<keyof Values, string>,
      value,
      operator: operator as IFilterItem<Values>['operator']
    })
    index++
  }

  return filters
}

const syncFiltersToUrl = <Values,>(filters: IFilterItem<Values>[]) => {
  const url = new URL(window.location.href)

  for (const key of [...url.searchParams.keys()]) {
    if (key.startsWith('filters[')) {
      url.searchParams.delete(key)
    }
  }

  filters.forEach((filter, index) => {
    url.searchParams.set(`filters[${index}][property]`, filter.property)
    url.searchParams.set(`filters[${index}][value]`, String(filter.value))
    if (filter.operator) {
      url.searchParams.set(`filters[${index}][operator]`, filter.operator)
    }
  })

  window.history.replaceState({}, '', url.toString())
}

export const useDataTableFilter = <Values,>(props: IDataTableFilterProps<Values>) => {
  const {
    onClickNew,
    renderersMap,
    rowExpansion,
    service,
    children,
    filters,
    withoutFilters = false,
    showNewButton = true,
    payload = {},
    searchDebounceWait = 500
  } = props

  const { t } = useTranslation()
  const initialSearch = getUrlParam('search') ?? ''
  const [search, setSearchInput] = useState<string>(initialSearch)
  const [debouncedSearch, setDebouncedSearch] = useState<string>(initialSearch)
  const [appliedFilters, setAppliedFilters] = useState<IFilterItem<Values>[]>(() => readFiltersFromUrl<Values>())
  const { isOpen, open, close } = useModal(false)

  const updateSearch = useMemo(() => debounce((value: string) => setDebouncedSearch(value), { wait: searchDebounceWait }), [searchDebounceWait])

  const setSearch = (value: string) => {
    setSearchInput(value)
    updateSearch(value)
  }

  useEffect(() => {
    if (debouncedSearch) {
      setUrlParam('search', debouncedSearch)
    } else {
      removeUrlParam('search')
    }
  }, [debouncedSearch])

  const combinedFilters = useMemo(() => {
    return [...appliedFilters]
  }, [appliedFilters])

  const modalInitialValues = useMemo<Values>(() => {
    return filters.reduce<Values>((previousValue, filter) => {
      const property = filter.property
      const from = appliedFilters.find((item) => item.property === `${property}_from`)
      const to = appliedFilters.find((item) => item.property === `${property}_to`)
      const direct = appliedFilters.find((item) => item.property === property)

      if (from || to) {
        previousValue[property] = {
          from: from ? String(from.value) : undefined,
          to: to ? String(to.value) : undefined
        } as Values[Extract<keyof Values, string>]

        return previousValue
      }

      if (direct) {
        previousValue[property] = (Array.isArray(filter.initialValue) ? String(direct.value).split('|') : direct.value) as Values[Extract<
          keyof Values,
          string
        >]

        return previousValue
      }

      previousValue[property] = filter.initialValue as Values[Extract<keyof Values, string>]

      return previousValue
    }, {} as Values)
  }, [filters, appliedFilters])

  const { dataTableProps, isLoading, refetch } = useDataTable({
    service,
    payload: {
      ...payload,
      filters: combinedFilters,
      search: debouncedSearch
    },
    renderersMap
  })

  const onFilter = (filters: IFilterData<Values>) => {
    setAppliedFilters(filters.filters)
    syncFiltersToUrl(filters.filters)
    refetch()
  }

  return {
    t,
    filters,
    isOpen,
    search,
    dataTableProps,
    isLoading,
    rowExpansion,
    children,
    withoutFilters,
    modalInitialValues,
    open,
    close,
    onFilter,
    setSearch,
    onClickNew,
    showNewButton
  }
}
