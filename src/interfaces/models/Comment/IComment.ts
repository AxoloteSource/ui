export type CommentStatus = 'pending' | 'in_progress' | 'resolved'

export interface ICommentType {
  id: number
  name: string
  slug: string
  description: string | null
  active: boolean
}

export interface ICommentUser {
  id: number
  name: string
  last_name_paternal: string | null
  last_name_maternal: string | null
  email: string
}

export interface IComment {
  id: number
  business_id: number
  user_id: number
  comment_type_id: number
  comment_type?: ICommentType | null
  user?: ICommentUser | null
  comment: string
  status: CommentStatus
  metadata: Record<string, unknown> | null
  created_at: string
  updated_at?: string | null
}
