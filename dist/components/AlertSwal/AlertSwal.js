import { AlertTypeEnum as o } from "../../enums/types/AlertTypeEnum.js";
import r from "sweetalert2";
const f = ({ type: a, title: e, text: t }) => {
  const n = r.mixin({
    toast: !0,
    position: "top-end",
    showConfirmButton: !1,
    timer: 4e3,
    showCloseButton: !0,
    width: 300,
    didOpen: (c) => {
      c.style.padding = "6px 10px";
      const s = c.querySelector(".swal2-title");
      s && (s.style.fontSize = "0.9rem", s.style.fontWeight = "500");
      const i = c.querySelector(".swal2-icon");
      i && (i.style.marginRight = "6px", i.style.width = "1.5em", i.style.height = "1.5em", i.style.fontSize = "0.9em");
    }
  });
  switch (a) {
    case o.Success:
      r.fire({
        title: e || "Bien",
        text: t || "Proceso completado correctamente.",
        icon: "success"
      });
      break;
    case o.Info:
      r.fire({
        title: e || "Información",
        text: t || "",
        icon: "info"
      });
      break;
    case o.Warning:
      r.fire({
        title: e || "Advertencia",
        text: t || "",
        icon: "warning"
      });
      break;
    case o.Question:
      r.fire({
        title: e || "¿Está seguro?",
        text: t || "",
        icon: "question"
      });
      break;
    case o.Error:
      r.fire({
        title: e || "Error",
        text: t || "Something went wrong.",
        icon: "error"
      });
      break;
    case o.Confirm:
      return r.fire({
        title: e || "¿Está seguro que desea realizar este proceso?",
        text: t || "No podrás revertir este proceso!",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "Cancelar"
      });
    case o.SuccessNotification:
      return n.mixin({
        customClass: { popup: "color-success" }
      }).fire({ title: e || "Proceso completado correctamente." });
    case o.InfoNotification:
      return n.mixin({
        customClass: { popup: "color-info" }
      }).fire({ title: e || "Información" });
    case o.WarningNotification:
      return n.mixin({
        customClass: { popup: "color-warning" }
      }).fire({ title: e || "Advertencia" });
    case o.ErrorNotification:
      return n.mixin({
        customClass: { popup: "color-danger" }
      }).fire({ title: e || "Ocurrió un error" });
  }
};
export {
  f as alertSwal
};
