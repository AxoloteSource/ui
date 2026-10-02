import Button from '../../Buttons/Button'
import { ButtonTypeEnum } from '../../Buttons/enums/buttonType.enum'
import { ModalFilter } from '../../Filters/ModalFilter/ModalFilter'
import { InputWithIcon } from '../../Form/Input/inputWithIcon'
import { DataTable } from '../DataTable/DataTable'
import { IDataTableCustomProps } from '../DataTable/IDataTableCustomProps'
import { IDataTableFilterProps } from './IDataTableFilterProps'
import { useDataTableFilter } from './useDataTableFilter'
import { FormikValues } from 'formik'
import { Filter } from 'lucide-react'

export const DataTableFilter = <Values extends FormikValues>(props: IDataTableFilterProps<Values>) => {
  const {
    t,
    filters,
    isOpen,
    search,
    dataTableProps,
    isLoading,
    rowExpansion,
    children,
    open,
    close,
    onFilter,
    setSearch,
    onClickNew,
    withoutFilters,
    showNewButton,
    modalInitialValues
  } = useDataTableFilter(props)

  return (
    <>
      <div className="grid grid-cols-12 gap-2 pb-5">
        <div className={showNewButton ? 'col-span-10' : 'col-span-12'}>
          <InputWithIcon
            name={`search`}
            value={search}
            placeholder={`${t('search')}`}
            inputCallback={(e) => setSearch(e.target.value)}
            {...(!withoutFilters && { IconComponent: () => <Filter onClick={open} /> })}
          />
        </div>
        {showNewButton && (
          <div className="col-span-2 flex justify-end">
            <Button className="w-full" onClick={onClickNew} type={ButtonTypeEnum.Submit}>
              {t('new')}
            </Button>
          </div>
        )}
      </div>
      <DataTable datatablePros={dataTableProps as IDataTableCustomProps['datatablePros']} isLoading={isLoading} rowExpansion={rowExpansion} />

      <ModalFilter<Values> close={close} isOpen={isOpen} filters={filters} initialValues={modalInitialValues} onSubmit={onFilter}>
        {(formik) => <>{typeof children === 'function' ? children(formik) : children}</>}
      </ModalFilter>
    </>
  )
}
