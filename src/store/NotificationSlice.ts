import { MemoryStorageSlice } from "@agusmgarcia/swr";

export type Notification = {
  close: () => void;
  id: string;
  message: string;
  type: "success" | "error";
};

export default class NotificationSlice extends MemoryStorageSlice<
  Notification | undefined
> {
  constructor() {
    super(undefined, { reloadOnInit: false });
  }

  set(type: "success" | "error", message: string): void {
    const id = Math.random().toString();
    this.setData({
      close: () => this.setData((prev) => (prev?.id === id ? undefined : prev)),
      id,
      message,
      type,
    });
  }
}
