import { AlertTextTypeEnum } from '../enums/types/AlertTextTypeEnum'

export const alertClassNames: Record<AlertTextTypeEnum, string> = {
  [AlertTextTypeEnum.Success]: 'bg-success-light border-success text-success',
  [AlertTextTypeEnum.Error]: 'bg-danger-light border-danger text-danger',
  [AlertTextTypeEnum.Warning]: 'bg-warning-light border-warning text-warning',
  [AlertTextTypeEnum.Info]: 'bg-info-light border-info text-info'
}
