import { AlertTextTypeEnum as r } from "../enums/types/AlertTextTypeEnum.js";
const t = {
  [r.Success]: "bg-success-light border-success text-success",
  [r.Error]: "bg-danger-light border-danger text-danger",
  [r.Warning]: "bg-warning-light border-warning text-warning",
  [r.Info]: "bg-info-light border-info text-info"
};
export {
  t as alertClassNames
};
