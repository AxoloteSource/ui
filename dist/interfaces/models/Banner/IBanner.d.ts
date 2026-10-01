export interface IBannerAction {
    type?: string;
    value?: string;
    [key: string]: unknown;
}
export interface IBanner {
    id: number;
    business_id: number;
    image_id: number | null;
    image?: {
        id: number;
        url: string;
        name: string | null;
    } | null;
    name: string;
    description: string | null;
    action: IBannerAction | null;
    is_active: boolean;
    starts_at: string | null;
    ends_at: string | null;
    created_at?: string;
    updated_at?: string;
}
