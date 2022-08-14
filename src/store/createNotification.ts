import { StateCreator } from "zustand";

import type NotificationSlice from "./createNotification.types";

const createNotification: StateCreator<
  NotificationSlice,
  [],
  [],
  NotificationSlice
> = (set) => ({
  notification: undefined,
  notify: (type, message) =>
    new Promise((resolve) => set({ notification: { message, resolve, type } })),
});

export default createNotification;
