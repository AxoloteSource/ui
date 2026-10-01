import { ILoyaltyHealthItem, LoyaltyStatus } from '../../interfaces/models/Dashboard/IDashboard';
interface LoyaltyHealthCardProps {
    items: ILoyaltyHealthItem[];
    colorByStatus: Record<LoyaltyStatus, string>;
}
declare const LoyaltyHealthCard: ({ items, colorByStatus }: LoyaltyHealthCardProps) => import("react").JSX.Element;
export default LoyaltyHealthCard;
