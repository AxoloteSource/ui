import { IFilters } from '../../Filters/ModalFilter/types'
import { DataTableRenderersMap, DataTableService } from '../../../hooks/useDataTable'
import { FormikProps } from 'formik'
import { ReactNode } from 'react'

export interface IDataTableFilterProps<Values> {
  filters: IFilters<Values>[]
  propertyInputSearch?: string
  onClickNew: () => void
  service: DataTableService
  renderersMap?: DataTableRenderersMap | undefined
  rowExpansion?: {
    content: ({ record }: { record: Record<string, unknown> }) => ReactNode
  }
  children?: ((formik: FormikProps<Values>) => ReactNode) | ReactNode
  withoutFilters?: boolean
  showNewButton?: boolean
  payload?: Record<string, unknown>
  searchDebounceWait?: number
}
