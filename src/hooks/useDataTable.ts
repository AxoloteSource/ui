import { DataTableColumn, DataTableSortStatus } from 'mantine-datatable'
import { useCallback, useEffect, useState } from 'react'

export interface DataTableRenderersMap {
  [key: string]: (record: Record<string, unknown>) => React.ReactNode
}

interface UseDataTableParams {
  service: (params: Record<string, unknown>) => { data?: Record<string, unknown>; isLoading: boolean; refetch: () => void }
  payload?: Record<string, unknown>
  renderersMap?: DataTableRenderersMap
  dataTableProps?: (props: Record<string, unknown>) => Record<string, unknown>
}

const getUrlParam = (name: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}

const setUrlParam = (name: string, value: string) => {
  const url = new URL(window.location.href)
  url.searchParams.set(name, value)
  window.history.replaceState({}, '', url.toString())
}

const NON_SORTABLE_COLUMNS = ['actions']

export const useDataTable = ({ service, payload = {}, renderersMap = {}, dataTableProps }: UseDataTableParams) => {
  const initialPage = parseInt(getUrlParam('page') || '1', 10)
  const initialLimit = parseInt(getUrlParam('limit') || '10', 10)

  const initialSortStatus: DataTableSortStatus<Record<string, unknown>> = {
    columnAccessor: getUrlParam('order_by') || 'id',
    direction: (getUrlParam('order') as DataTableSortStatus['direction']) || 'asc'
  }

  const [page, setPageState] = useState(initialPage)
  const pageSize = [10, 20, 30, 50, 100]
  const [limit, setLimitState] = useState(initialLimit)
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<Record<string, unknown>>>(initialSortStatus)

  const { data, isLoading, refetch } = service({ page, limit, ...payload, order_by: sortStatus.columnAccessor, order: sortStatus.direction })

  const setPage = useCallback((newPage: number) => {
    setPageState(newPage)
    setUrlParam('page', newPage.toString())
  }, [])

  const setLimit = useCallback(
    (newLimit: number) => {
      setLimitState(newLimit)
      setUrlParam('limit', newLimit.toString())
      setPage(1)
    },
    [setPage]
  )

  useEffect(() => {
    setUrlParam('page', page.toString())
    setUrlParam('limit', limit.toString())
  }, [page, limit])

  useEffect(() => {
    setUrlParam('order_by', String(sortStatus.columnAccessor))
    setUrlParam('order', sortStatus.direction)
  }, [sortStatus])

  const onSortStatusChange = useCallback(
    (nextSortStatus: DataTableSortStatus<Record<string, unknown>>) => {
      setSortStatus(nextSortStatus)
      setPage(1)
    },
    [setPage]
  )

  const applyRenderers = (columns: DataTableColumn<Record<string, unknown>>[]) => {
    return columns.map((column) => {
      const accessor = column.accessor as string

      return {
        ...column,
        sortable: column.sortable ?? !NON_SORTABLE_COLUMNS.includes(accessor),
        ...(accessor && renderersMap[accessor] ? { render: renderersMap[accessor] } : {})
      }
    })
  }

  const defaultDataTableProps = {
    page,
    recordsPerPage: data?.per_page ?? limit,
    totalRecords: data?.total || 0,
    onPageChange: setPage,
    records: data?.data || [],
    columns: data?.columns ? applyRenderers(data.columns as DataTableColumn<Record<string, unknown>>[]) : [],
    sortStatus,
    onSortStatusChange,
    onRecordsPerPageChange: setLimit,
    recordsPerPageOptions: pageSize,
    noRecordsText: 'No se encontraron resultados que coincidan con tu búsqueda',
    highlightOnHover: true,
    className: 'whitespace-nowrap table-hover',
    minHeight: 200,
    paginationText: ({ from, to, totalRecords }: { from: number; to: number; totalRecords: number }) =>
      `Mostrando del ${from} al ${to} de ${totalRecords} registros`
  }

  const finalDataTableProps = dataTableProps ? dataTableProps(defaultDataTableProps) : defaultDataTableProps

  return {
    page,
    setPage,
    limit,
    setLimit,
    pageSize,
    data,
    isLoading,
    refetch,
    dataTableProps: finalDataTableProps
  }
}
