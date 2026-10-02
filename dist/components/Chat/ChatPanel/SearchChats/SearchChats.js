import { jsx as o } from "react/jsx-runtime";
import { InputWithIcon as a } from "../../../Form/Input/inputWithIcon.js";
import { Search as c } from "lucide-react";
import { useTranslation as n } from "react-i18next";
const p = ({ setSearch: r }) => {
  const { t: e } = n();
  return /* @__PURE__ */ o("div", { className: "relative", children: /* @__PURE__ */ o(
    a,
    {
      name: "search",
      placeholder: `${e("search")} ...`,
      inputCallback: (t) => r(t.target.value),
      IconComponent: () => /* @__PURE__ */ o(c, { onClick: () => console.log("click") })
    }
  ) });
};
export {
  p as SearchChats
};
