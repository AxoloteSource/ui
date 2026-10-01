import { IKpi } from '../../interfaces/models/Dashboard/IDashboard';
interface KpiCardVM extends IKpi {
    color: string;
}
interface KpiCardProps {
    kpi: KpiCardVM;
}
declare const KpiCard: ({ kpi }: KpiCardProps) => import("react").JSX.Element;
export default KpiCard;
