export interface IBusiness {
    id: number;
    name: string;
    business_type_id?: number;
    support_phone?: string;
    support_email?: string;
    address?: string;
    website?: string;
    social_media?: Record<string, unknown>;
    opening_hours?: string;
    logo?: string;
    additional_info?: string;
    branches?: IBranch[];
}
export interface IBranch {
    id: number;
    business_id: number;
    name: string;
    address: string;
    latitude?: number;
    longitude?: number;
    phone?: string;
    opening_hours?: string;
    is_active: boolean;
    additional_info?: string;
}
