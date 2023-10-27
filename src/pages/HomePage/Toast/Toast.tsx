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
      { progress: undefined },
    );

    const unsubscribe = toast.onChange((t) => {
      if (t.status !== "removed") return;
      notification.close();
    });

    return () => {
      unsubscribe();
      toast.dismiss(toastId);
    };
  }, [notification]);

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
