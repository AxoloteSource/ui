import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
export declare const useOnSubmit: <Request = Record<string, unknown>, Response = Record<string, unknown>>({ mutateAsync, onSuccess, formatData, onError }: {
    mutateAsync: UseMutateAsyncFunction<AxiosResponse<Record<string, unknown>, Record<string, unknown>>, Error, unknown, unknown>;
    onSuccess: (data: Response) => void;
    formatData?: (data: Request) => Request;
    onError?: (data: Error) => void;
}) => {
    onSubmit: (data: Request, { setErrors }: {
        setErrors: (errors: Record<string, unknown>) => void;
    }) => Promise<void>;
};
