import { MemoryStorageSlice } from "@agusmgarcia/swr";

import type Notification from "./Notification.types";

export default class NotificationSlice extends MemoryStorageSlice<
  Notification | undefined
> {
  constructor() {
    super(undefined);
  }

  notify(type: "success" | "error", message: string) {
    return new Promise((resolve) =>
      this.setData({
        close: () => this.setData(undefined).then(resolve),
        message,
        type,
      })
    );
  }
}
