const l = ({ setSelectedChat: e, selectUser: t }) => ({
  handleSelected: (n, c) => {
    e(n), t?.(c);
  }
});
export {
  l as useChatSection
};
