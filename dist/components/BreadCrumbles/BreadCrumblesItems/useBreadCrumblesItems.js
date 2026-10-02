const t = ({ children: e }) => ({
  childrenResult: typeof e == "string" ? e.charAt(0).toUpperCase() + e.slice(1) : e
});
export {
  t as useBreadCrumblesItems
};
