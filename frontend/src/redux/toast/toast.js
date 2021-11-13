import { action } from "easy-peasy";

export const ToastStore = {
  isLoading: false,
  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  toast: { error: false, message: "", visible: false },
  toggleToast: action((state, payload) => {
    state.toast.visible = payload;
  }),

  setToast: action((state, payload) => {
    state.toast = payload;
  }),
};
