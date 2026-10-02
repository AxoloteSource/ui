import { useTranslation as e } from "react-i18next";
const i = (o) => {
  const { t: n } = e(), t = o ?? n("loading");
  return {
    t: n,
    initialMessage: t
  };
};
export {
  i as useLoadingFullScreen
};
