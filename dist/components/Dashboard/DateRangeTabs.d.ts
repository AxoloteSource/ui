import { DashboardRangeKey } from '../../interfaces/models/Dashboard/IDashboard';
interface DateRangeTabsProps {
    range: DashboardRangeKey;
    onChange: (next: DashboardRangeKey, from?: string, to?: string) => void;
}
declare const DateRangeTabs: ({ range, onChange }: DateRangeTabsProps) => import("react").JSX.Element;
export default DateRangeTabs;
