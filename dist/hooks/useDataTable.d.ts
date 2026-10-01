import { DataTableSortStatus } from 'mantine-datatable';
export interface DataTableRenderersMap {
    [key: string]: (record: Record<string, unknown>) => React.ReactNode;
}
interface UseDataTableParams {
    service: (params: Record<string, unknown>) => {
        data?: Record<string, unknown>;
        isLoading: boolean;
        refetch: () => void;
    };
    payload?: Record<string, unknown>;
    renderersMap?: DataTableRenderersMap;
    dataTableProps?: (props: Record<string, unknown>) => Record<string, unknown>;
}
export declare const useDataTable: ({ service, payload, renderersMap, dataTableProps }: UseDataTableParams) => {
    page: number;
    setPage: (newPage: number) => void;
    limit: number;
    setLimit: (newLimit: number) => void;
    pageSize: number[];
    data: Record<string, unknown> | undefined;
    isLoading: boolean;
    refetch: () => void;
    dataTableProps: Record<string, unknown> | {
        page: number;
        recordsPerPage: {};
        totalRecords: {};
        onPageChange: (newPage: number) => void;
        records: {};
        columns: ({
            render?: ((record: Record<string, unknown>, index: number) => React.ReactNode) | undefined;
            sortable: boolean;
            accessor: string | (string & {});
            title?: React.ReactNode;
            textAlign?: import('mantine-datatable').DataTableColumnTextAlign;
            sortKey?: string;
            draggable?: boolean;
            toggleable?: boolean;
            resizable?: boolean;
            defaultToggle?: boolean;
            filter?: React.ReactNode | ((params: {
                close: () => void;
            }) => React.ReactNode);
            filterPopoverProps?: import('@mantine/core').PopoverProps;
            filterPopoverDisableClickOutside?: boolean;
            filtering?: boolean;
            width?: string | number;
            hidden?: boolean;
            hiddenContent?: boolean;
            visibleMediaQuery?: string | ((theme: import('@mantine/core').MantineTheme) => string);
            titleClassName?: string;
            titleStyle?: import('@mantine/core').MantineStyleProp;
            cellsClassName?: string | ((record: Record<string, unknown>, index: number) => string | undefined) | undefined;
            cellsStyle?: ((record: Record<string, unknown>, index: number) => import('@mantine/core').MantineStyleProp | undefined) | undefined;
            customCellAttributes?: ((record: Record<string, unknown>, index: number) => Record<string, unknown>) | undefined;
            footer?: React.ReactNode;
            footerClassName?: string;
            footerStyle?: import('@mantine/core').MantineStyleProp;
            ellipsis?: boolean;
            noWrap?: never;
        } | {
            render?: ((record: Record<string, unknown>, index: number) => React.ReactNode) | undefined;
            sortable: boolean;
            accessor: string | (string & {});
            title?: React.ReactNode;
            textAlign?: import('mantine-datatable').DataTableColumnTextAlign;
            sortKey?: string;
            draggable?: boolean;
            toggleable?: boolean;
            resizable?: boolean;
            defaultToggle?: boolean;
            filter?: React.ReactNode | ((params: {
                close: () => void;
            }) => React.ReactNode);
            filterPopoverProps?: import('@mantine/core').PopoverProps;
            filterPopoverDisableClickOutside?: boolean;
            filtering?: boolean;
            width?: string | number;
            hidden?: boolean;
            hiddenContent?: boolean;
            visibleMediaQuery?: string | ((theme: import('@mantine/core').MantineTheme) => string);
            titleClassName?: string;
            titleStyle?: import('@mantine/core').MantineStyleProp;
            cellsClassName?: string | ((record: Record<string, unknown>, index: number) => string | undefined) | undefined;
            cellsStyle?: ((record: Record<string, unknown>, index: number) => import('@mantine/core').MantineStyleProp | undefined) | undefined;
            customCellAttributes?: ((record: Record<string, unknown>, index: number) => Record<string, unknown>) | undefined;
            footer?: React.ReactNode;
            footerClassName?: string;
            footerStyle?: import('@mantine/core').MantineStyleProp;
            ellipsis?: never;
            noWrap?: boolean;
        })[];
        sortStatus: DataTableSortStatus<Record<string, unknown>>;
        onSortStatusChange: (nextSortStatus: DataTableSortStatus<Record<string, unknown>>) => void;
        onRecordsPerPageChange: (newLimit: number) => void;
        recordsPerPageOptions: number[];
        noRecordsText: string;
        highlightOnHover: boolean;
        className: string;
        minHeight: number;
        paginationText: ({ from, to, totalRecords }: {
            from: number;
            to: number;
            totalRecords: number;
        }) => string;
    };
};
export {};
