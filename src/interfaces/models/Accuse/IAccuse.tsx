import { IAccuseType } from '../AccuseType/IAccuseType'
import { IRequest } from '../Request/IRequest'

export interface IAccuse {
  id: number
  accuse_type: IAccuseType
  name: string
  accuseable_type: string
  accuseable_id: number
  accuseable: IRequest
  created_at: Date
}
