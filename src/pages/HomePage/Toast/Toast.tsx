import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Typography } from "#src/components";
import { useStore } from "#src/store";
import { useMediaQuery, Viewports } from "#src/utils";

import ToastProps from "./Toast.types";

export default function Toast(_: ToastProps) {
  const desktop = useMediaQuery(Viewports.MIN_MD);
  const notification = useStore((store) => store.notification);

  useEffect(() => {
    if (notification === undefined) return;
    toast[notification.type](<ToastBody message={notification.message} />, {
      onClose: notification.close,
      progress: undefined,
    });
  }, [notification]);

  return (
    <ToastContainer
      position="bottom-center"
      limit={1}
      autoClose={2000}
      closeOnClick={true}
      closeButton={desktop}
      draggable={!desktop}
      hideProgressBar={false}
      pauseOnHover={false}
    />
  );
}

function ToastBody(props: { message: string }) {
  return <Typography>{props.message}</Typography>;
}
