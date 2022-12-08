import { createReactStore } from "@agusmgarcia/swr";

import HomeContentSlice from "./HomeContent";
import NotificationSlice from "./Notification";

export type { default as HomeContent } from "./HomeContent.types";
export type { default as Notification } from "./Notification.types";

export const { StoreProvider, useStore } = createReactStore(
  {
    homeContent: HomeContentSlice,
    notification: NotificationSlice,
  },
  {
    devtools: process.env.NODE_ENV === "development",
  }
);
