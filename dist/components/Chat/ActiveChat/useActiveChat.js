import { useState as M, useMemo as a } from "react";
const h = ({
  messages: e,
  scrollToBottom: o
}) => {
  const [s, n] = M([]), t = a(() => e, [e]), r = a(() => [...t, ...s], [t, s]);
  return {
    handleAddMessage: (c) => {
      n((d) => [...d, c]), o();
    },
    messageList: r
  };
};
export {
  h as useActiveChat
};
