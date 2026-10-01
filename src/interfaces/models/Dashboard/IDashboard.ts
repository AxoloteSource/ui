export type DashboardRangeKey = 'today' | '7d' | '30d' | 'this_month' | 'custom'
export type DashboardTrend = 'up' | 'down' | 'flat'
export type LoyaltyStatus = 'Excelente' | 'Bueno' | 'Atención' | 'Crítico'

export interface IDashboardHeader {
  greeting: string
  business: string | null
  date: string
}

export interface IDashboardRange {
  key: DashboardRangeKey
  from: string
  to: string
  previous_from: string
  previous_to: string
}

export interface IKpi {
  key: string
  label: string
  icon: string
  info?: string
  value: number
  previous: number
  delta_pct: number
  trend: DashboardTrend
}

export interface IDashboardSeriesPoint {
  name: string
  data: number[]
}

export interface IDashboardSalesChart {
  categories: string[]
  series: IDashboardSeriesPoint[]
}

export interface IDashboardNewCustomersChart {
  categories: string[]
  data: number[]
}

export interface IDashboardPointsChart {
  categories: string[]
  granted: number[]
  redeemed: number[]
}

export interface IDashboardCouponUsage {
  id: number
  name: string
  value: number
  pct: number
}

export interface ILoyaltyHealthItem {
  key: string
  label: string
  value: number
  total: number | null
  pct: number | null
  status: LoyaltyStatus
}

export interface ITopCustomer {
  id: number
  name: string
  points: number
  tier: string | null
}

export interface ITopReward {
  id: number
  title: string
  redeem_count: number
  last_redeem: string | null
}

export interface IRecentActivity {
  at: string
  type: 'purchase' | 'points_redeem' | 'customer_registered' | 'coupon_redeemed'
  user: string
  action: string
}

export interface IAlert {
  type: string
  severity: 'info' | 'warning' | 'danger'
  message: string
  link: string | null
}

export interface IInsight {
  id: string
  icon: string
  text: string
}

export interface IDashboard {
  header: IDashboardHeader
  range: IDashboardRange
  kpis: IKpi[]
  charts: {
    sales: IDashboardSalesChart
    new_customers: IDashboardNewCustomersChart
    points: IDashboardPointsChart
  }
  coupon_usage: IDashboardCouponUsage[]
  loyalty_health: ILoyaltyHealthItem[]
  top_customers: ITopCustomer[]
  top_rewards: ITopReward[]
  recent_activity: IRecentActivity[]
  alerts: IAlert[]
  insights: IInsight[]
}

export interface IDashboardResponse {
  data: IDashboard
}

export const DASHBOARD_RANGE_OPTIONS: { key: DashboardRangeKey; label: string }[] = [
  { key: 'today', label: 'Hoy' },
  { key: '7d', label: 'Últimos 7 días' },
  { key: '30d', label: 'Últimos 30 días' },
  { key: 'this_month', label: 'Este mes' },
  { key: 'custom', label: 'Personalizado' }
]
