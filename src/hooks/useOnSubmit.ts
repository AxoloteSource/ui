import { UseMutateAsyncFunction } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { sileo } from 'sileo'

interface SubmitErrorPayload {
  data?: Record<string, unknown>
  message?: string
}

type SubmitError = AxiosError<SubmitErrorPayload>

export const useOnSubmit = <Request = Record<string, unknown>, Response = Record<string, unknown>>({
  mutateAsync,
  onSuccess,
  formatData = (data: Request) => data,
  onError
}: {
  mutateAsync: UseMutateAsyncFunction<AxiosResponse<Record<string, unknown>, Record<string, unknown>>, Error, unknown, unknown>
  onSuccess: (data: Response) => void
  formatData?: (data: Request) => Request
  onError?: (data: Error) => void
}) => {
  const onSubmit = async (data: Request, { setErrors }: { setErrors: (errors: Record<string, unknown>) => void }) => {
    try {
      const res = await mutateAsync(formatData(data))
      onSuccess(res.data as Response)
    } catch (error) {
      const submitError = error as SubmitError

      if (submitError.response?.data?.data != null) {
        setErrors(submitError.response.data.data)
      }

      if (onError) {
        onError(submitError)
      } else if (submitError.response?.data?.message != null) {
        sileo.error({
          title: 'Error',
          description: submitError.response.data.message
        })
      }
    }
  }

  return {
    onSubmit
  }
}
