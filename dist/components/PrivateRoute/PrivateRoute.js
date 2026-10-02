import { jsx as o } from "react/jsx-runtime";
import { Navigate as e } from "react-router-dom";
const p = ({
  element: f,
  isAuthenticated: i,
  user: t,
  hasPermission: r,
  loginPath: a = "/login",
  forbiddenPath: n = "/403"
}) => i ? r && t && !r(t) ? /* @__PURE__ */ o(e, { to: n }) : f : /* @__PURE__ */ o(e, { to: a });
export {
  p as default
};
