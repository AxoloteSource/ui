import { jsxs as a, jsx as e } from "react/jsx-runtime";
import i from "../Card/Card.js";
import d from "../Card/partials/CardTitle.js";
import { chartColors as o } from "../../lib/chartColors.js";
import { Ticket as m, UserPlus as p, Gift as g, ShoppingBag as u, Clock as x } from "lucide-react";
import { useTranslation as h } from "react-i18next";
const y = {
  purchase: { icon: u, color: o.primary, label: "Compra registrada" },
  points_redeem: { icon: g, color: o.warning, label: "Puntos canjeados" },
  customer_registered: { icon: p, color: o.info, label: "Cliente registrado" },
  coupon_redeemed: { icon: m, color: o.success, label: "Cupón canjeado" }
}, A = ({ items: c }) => {
  const { t: n } = h();
  return /* @__PURE__ */ a(i, { className: "rounded-xl p-5", children: [
    /* @__PURE__ */ e(d, { children: "Actividad reciente" }),
    c.length === 0 ? /* @__PURE__ */ e("p", { className: "text-sm text-gray-400 dark:text-gray-500", children: n("no_activity", "Aún no hay actividad en este período.") }) : /* @__PURE__ */ e("ol", { className: "space-y-4", children: c.map((r, l) => {
      const t = y[r.type] ?? { icon: x, color: o.secondary, label: r.action }, s = t.icon;
      return /* @__PURE__ */ a("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ e("span", { className: "rounded-lg p-2", style: { backgroundColor: `${t.color}1A`, color: t.color }, children: /* @__PURE__ */ e(s, { size: 16 }) }),
        /* @__PURE__ */ a("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ e("p", { className: "text-sm font-medium text-gray-800 dark:text-gray-200", children: r.action }),
          /* @__PURE__ */ a("p", { className: "text-xs text-gray-400 dark:text-gray-500", children: [
            r.user,
            " · ",
            new Date(r.at).toLocaleString()
          ] })
        ] })
      ] }, l);
    }) })
  ] });
};
export {
  A as default
};
