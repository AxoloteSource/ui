const l = (s, e, t) => ({
  customClass: s[e]?.replace("{color}", t ?? "")
});
export {
  l as useClass
};
