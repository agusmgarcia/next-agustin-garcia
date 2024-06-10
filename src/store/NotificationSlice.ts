import { createSlice, useSWR } from "@agusmgarcia/react-core";
import { useCallback } from "react";

import { type Func } from "#src/utils";

export type Notification = {
  close: () => void;
  id: string;
  message: string;
  type: "error" | "success";
};

export type NotificationSlice = {
  data: Notification | undefined;
  set: Func<[type: "error" | "success", message: string]>;
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
