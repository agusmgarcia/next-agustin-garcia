import { createSlice } from "@agusmgarcia/react-swr";
import { useCallback, useState } from "react";

export type Notification = {
  close: () => void;
  id: string;
  message: string;
  type: "error" | "success";
};

export default createSlice(() => {
  const [data, setData] = useState<Notification>();

  const set = useCallback((type: "error" | "success", message: string) => {
    const id = Math.random().toString();
    setData({
      close: () => setData((prev) => (prev?.id === id ? undefined : prev)),
      id,
      message,
      type,
    });
  }, []);

  return { data, set };
});
