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
    super(undefined);
  }

  protected onInit(): void {
    this.setKey({});
  }

  async set(type: "success" | "error", message: string): Promise<void> {
    const id = crypto.randomUUID?.() ?? Math.random().toString();
    await new Promise((resolve) =>
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
