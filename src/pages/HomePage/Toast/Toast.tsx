import "react-toastify/dist/ReactToastify.css";

import { useMediaQuery } from "@agusmgarcia/react-core";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Typography } from "#src/components";
import { useNotification } from "#src/store";

import type ToastProps from "./Toast.types";

export default function Toast(_: ToastProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { closeNotification, notification } = useNotification();

  useEffect(() => {
    if (notification === undefined) return;

    const toastId = toast[notification.type](
      <ToastBody message={notification.message} />,
      { progress: undefined },
    );

    const unsubscribe = toast.onChange((t) => {
      if (t.status !== "removed") return;
      closeNotification(notification);
    });

    return () => {
      unsubscribe();
      toast.dismiss(toastId);
    };
  }, [closeNotification, notification]);

  return (
    <ToastContainer
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

function ToastBody(props: { message: string }) {
  return <Typography as="span">{props.message}</Typography>;
}
