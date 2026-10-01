export interface ISetting {
  id: number
  business_id: number | null
  key: string
  value: string
  type: 'string' | 'integer' | 'decimal' | 'boolean' | 'json'
  description: string | null
}
