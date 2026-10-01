export interface TopTableProps {
    title: string;
    columns: string[];
    rows: {
        id: number | string;
        cells: React.ReactNode[];
    }[];
}
declare const TopTable: ({ title, columns, rows }: TopTableProps) => import("react").JSX.Element;
export default TopTable;
