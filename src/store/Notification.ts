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

  async notify(type: "success" | "error", message: string): Promise<void> {
    const uuid = await import("uuid").then((module) => module.v4);
    const id = uuid();
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
