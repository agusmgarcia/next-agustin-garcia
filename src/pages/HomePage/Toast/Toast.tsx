import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Typography } from "#src/components";

import useToast from "./Toast.hooks";
import type ToastProps from "./Toast.types";

export default function Toast(props: ToastProps) {
  const { closeNotification, desktop, notification, ...rest } = useToast(props);

  useEffect(() => {
    if (!notification) return;

    const toastId = toast[notification.type](
      <ToastBody message={notification.message} />,
      { progress: undefined },
    );

    const unsubscribe = toast.onChange((t) => {
      if (t.status !== "removed") return;
      closeNotification(notification.id);
    });

    return () => {
      unsubscribe();
      toast.dismiss(toastId);
    };
  }, [closeNotification, notification]);

  return (
    <ToastContainer
      {...rest}
      autoClose={2000}
      closeButton={desktop}
      closeOnClick={true}
      draggable={!desktop}
      hideProgressBar={false}
      limit={1}
      pauseOnHover={false}
      position="bottom-center"
      theme="colored"
    />
  );
}

function ToastBody({ message }: { message: string }) {
  return <Typography as="span">{message}</Typography>;
}
