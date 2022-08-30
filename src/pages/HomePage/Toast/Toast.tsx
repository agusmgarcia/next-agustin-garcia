import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Typography } from "#src/components";
import { useStore } from "#src/store";

import ToastProps from "./Toast.types";

export default function Toast(_: ToastProps) {
  const notification = useStore((store) => store.notification);

  useEffect(() => {
    if (notification === undefined) return;
    toast[notification.type](<ToastBody message={notification.message} />, {
      onClose: notification.resolve,
      progress: undefined,
    });
  }, [notification]);

  return (
    <ToastContainer
      position="bottom-center"
      limit={1}
      autoClose={2000}
      closeOnClick={true}
      draggable={true}
      hideProgressBar={false}
      pauseOnHover={false}
    />
  );
}

function ToastBody(props: { message: string }) {
  return <Typography>{props.message}</Typography>;
}
