import { IRecentActivity } from '../../interfaces/models/Dashboard/IDashboard';
interface RecentActivityProps {
    items: IRecentActivity[];
}
declare const RecentActivity: ({ items }: RecentActivityProps) => import("react").JSX.Element;
export default RecentActivity;
