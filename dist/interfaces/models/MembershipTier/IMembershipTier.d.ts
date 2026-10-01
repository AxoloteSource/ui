import { ICoupon } from '../Coupon/ICoupon';
import { IImage } from '../Image/IImage';
export interface IMembershipTier {
    id: number;
    business_id: number;
    name: string;
    min_points: number;
    color: string | null;
    image_id: number | null;
    image?: IImage | null;
    coupons?: ICoupon[];
    is_active: boolean;
    created_at?: string;
    updated_at?: string;
}
