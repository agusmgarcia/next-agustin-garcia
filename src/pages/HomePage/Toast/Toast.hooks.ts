import { useMediaQuery } from "@agusmgarcia/react-essentials-utils";

import { useNotification } from "#src/store";

import type ToastProps from "./Toast.types";

export default function useToast(props: ToastProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { closeNotification, notification } = useNotification();

  return { ...props, closeNotification, desktop, notification };
}
