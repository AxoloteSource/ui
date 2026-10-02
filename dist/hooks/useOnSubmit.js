import { sileo as d } from "sileo";
const u = ({
  mutateAsync: a,
  onSuccess: o,
  formatData: n = (r) => r,
  onError: s
}) => ({
  onSubmit: async (i, { setErrors: c }) => {
    try {
      const e = await a(n(i));
      o(e.data);
    } catch (e) {
      const t = e;
      t.response?.data?.data != null && c(t.response.data.data), s ? s(t) : t.response?.data?.message != null && d.error({
        title: "Error",
        description: t.response.data.message
      });
    }
  }
});
export {
  u as useOnSubmit
};
