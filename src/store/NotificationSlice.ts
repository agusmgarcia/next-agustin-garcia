import { createSlice, type Func, useSWR } from "@agusmgarcia/react-core";
import { useCallback } from "react";

export type Notification = {
  close: () => void;
  id: string;
  message: string;
  type: "error" | "success";
};

export type NotificationSlice = {
  data: Notification | undefined;
  set: Func<[type: "error" | "success", message: string, void]>;
};

export default createSlice<NotificationSlice>(() => {
  const { data, setData } = useSWR<Notification>();

  const set = useCallback(
    (type: "error" | "success", message: string) => {
      const id = Math.random().toString();
      setData({
        close: () => setData((prev) => (prev?.id === id ? undefined : prev)),
        id,
        message,
        type,
      });
    },
    [setData],
  );

  return { data, set };
});
