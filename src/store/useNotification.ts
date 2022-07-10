import { useCallback } from "react";

import { useSetStore, useStore } from "./StoreProvider";

export type Notification = {
  message: string;
  resolve: () => void;
  type: "success" | "error";
};

export default function useNotification() {
  const setStore = useSetStore();
  const notification = useStore((store) => store.notification);

  const notify = useCallback(
    (type: "success" | "error", message: string) =>
      new Promise<void>((resolve) =>
        setStore((prev) => ({
          ...prev,
          notification: { message, resolve, type },
        }))
      ),
    [setStore]
  );

  return { notification, notify };
}
