export type FinanceRangeKey = 'today' | '7d' | '30d' | 'this_month' | 'custom';
export interface IFinanceItem {
    id: number;
    title: string;
    redeem_count: number;
    total_cost: number;
}
export interface IFinanceTotals {
    redeem_count: number;
    total_cost: number;
}
export interface IFinanceRange {
    key: FinanceRangeKey;
    from: string;
    to: string;
}
export interface IFinanceResponse {
    range: IFinanceRange;
    items: IFinanceItem[];
    totals: IFinanceTotals;
}
