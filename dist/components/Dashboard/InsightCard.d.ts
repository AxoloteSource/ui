import { IInsight } from '../../interfaces/models/Dashboard/IDashboard';
interface InsightCardProps {
    insights: IInsight[];
}
declare const InsightCard: ({ insights }: InsightCardProps) => import("react").JSX.Element;
export default InsightCard;
