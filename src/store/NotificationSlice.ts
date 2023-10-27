import { MemoryStorageSlice } from "@agusmgarcia/react-swr";

export type Notification = {
  close: () => void;
  id: string;
  message: string;
  type: "error" | "success";
};

export default class NotificationSlice extends MemoryStorageSlice<
  Notification | undefined
> {
  set(type: "error" | "success", message: string): void {
    const id = Math.random().toString();
    this.setData({
      close: () => this.setData((prev) => (prev?.id === id ? undefined : prev)),
      id,
      message,
      type,
    });
  }
}
