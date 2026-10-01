export declare enum CouponType {
    PercentageDiscount = 1,
    FixedDiscount = 2,
    FreeProduct = 3,
    CashbackPoints = 4,
    AppFirstPurchase = 5,
    Reward = 6,
    Promotion = 7,
    Welcome = 8,
    Birthday = 9
}
export declare const AUTO_ASSIGNED_COUPON_TYPES: CouponType[];
export declare const isAutoAssignedCouponType: (typeId?: number | null) => boolean;
