import { jsxs as C, Fragment as d, jsx as r } from "react/jsx-runtime";
import { ChatUserCard as f } from "../ChatItem/ChatUserCard.js";
import { useChatSection as u } from "./useChatSection.js";
const v = ({ title: o, iterator: i, setSelectedChat: n, selectUser: c, selectedUser: a }) => {
  const { handleSelected: h } = u({ setSelectedChat: n, selectUser: c });
  return /* @__PURE__ */ C(d, { children: [
    /* @__PURE__ */ r("h1", { children: o }),
    i.map(({ id: t, title: m, subtitle: s = "", optionalMessage: l, userId: e }, p) => /* @__PURE__ */ r(
      f,
      {
        onClickOpenChat: () => h(t, e ?? ""),
        isActive: a == (e ?? ""),
        isButtonHover: !0,
        id: t,
        title: m,
        subtitle: s,
        optionalMessage: l
      },
      p
    ))
  ] });
};
export {
  v as ChatSection
};
