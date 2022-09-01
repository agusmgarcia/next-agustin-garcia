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
    new Promise((close) => set({ notification: { close, message, type } })),
});

export default createNotification;
