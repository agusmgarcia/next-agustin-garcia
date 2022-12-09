import { MemoryStorageSlice } from "@agusmgarcia/swr";
import { v4 as uuid } from "uuid";

import type Notification from "./Notification.types";

export default class NotificationSlice extends MemoryStorageSlice<
  Notification | undefined
> {
  constructor() {
    super(undefined);
  }

  notify(type: "success" | "error", message: string) {
    const id = uuid();
    return new Promise((resolve) =>
      this.setData({
        close: () =>
          this.setData((prev) => (prev?.id === id ? undefined : prev)).then(
            resolve
          ),
        id,
        message,
        type,
      })
    );
  }
}
