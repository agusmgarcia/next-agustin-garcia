import { createReactStore } from "@agusmgarcia/swr";

import HomeContentSlice from "./HomeContent";
import NotificationSlice from "./Notification";

export type { HomeContent } from "./HomeContent";
export type { Notification } from "./Notification";

export const { StoreProvider, useStore } = createReactStore(
  {
    homeContent: HomeContentSlice,
    notification: NotificationSlice,
  },
  {
    devtools: process.env.NODE_ENV === "development",
  }
);
