export interface IAuditUser {
  id: number | null
  name: string | null
}

export interface IAudit {
  id: string
  event: 'created' | 'updated' | 'deleted'
  model: string
  model_id: number
  user: IAuditUser
  old_values: Record<string, unknown>
  new_values: Record<string, unknown>
  ip_address: string | null
  user_agent: string | null
  url: string | null
  business_id: number | null
  created_at: string
}
