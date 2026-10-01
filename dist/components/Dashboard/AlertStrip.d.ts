import { IAlert } from '../../interfaces/models/Dashboard/IDashboard';
interface AlertStripProps {
    alerts: IAlert[];
}
declare const AlertStrip: ({ alerts }: AlertStripProps) => import("react").JSX.Element;
export default AlertStrip;
