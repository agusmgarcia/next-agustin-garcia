import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Typography } from "#src/components";
import { useNotification } from "#src/store";
import { useMediaQuery, Viewports } from "#src/utils";

import ToastProps from "./Toast.types";

export default function Toast(_: ToastProps) {
  const desktop = useMediaQuery(Viewports.MIN_MD);
  const { notification } = useNotification();

  useEffect(() => {
    if (notification === undefined) return;

    const toastId = toast[notification.type](
      <ToastBody message={notification.message} />,
      {
        onClose: () => notification.close(),
        progress: undefined,
      }
    );

    return () => toast.dismiss(toastId);
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
  return <Typography as="span">{props.message}</Typography>;
}
