import { GlobalSlice } from "@agusmgarcia/react-essentials-store";

import type Notification from "./NotificationSlice.types";

export default class NotificationSlice extends GlobalSlice<
  Notification | undefined
> {
  constructor() {
    super(undefined);
  }

  set(notification: Pick<Notification, "message" | "type">): void {
    const id = Math.random().toString();
    this.state = { ...notification, id };
  }

  close(id: string): void {
    if (this.state?.id !== id) return;
    this.state = undefined;
  }
}
