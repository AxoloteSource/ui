import DragDropFiles from './DragDropFiles'
import { DragDopFileFormikProps } from './interfaces/DragDopFileFormikProps'
import { Field } from 'formik'

const DragDopFileFormik = <T extends object>({ multiple = true, isLoading, name, formik, accept }: DragDopFileFormikProps<T>) => {
  const onUploadFile = async (files: File[]) => {
    if (multiple) {
      await formik.setFieldValue(name, files)
    } else {
      await formik.setFieldValue(name, files[0])
    }
  }
  return (
    <>
      <Field name={name} id={name}>
        {() => <DragDropFiles isLoading={isLoading} onUploadFile={onUploadFile} multiple={multiple} accept={accept} />}
      </Field>
      {formik.submitCount ? formik.errors[name] ? <div className="text-danger mt-1">{formik.errors[name]!.toString()}</div> : '' : ''}
    </>
  )
}

export default DragDopFileFormik
