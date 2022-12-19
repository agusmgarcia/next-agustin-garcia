import { createReactStore } from "@agusmgarcia/swr";

import HomeContentSlice from "./HomeContentSlice";
import NotificationSlice from "./NotificationSlice";

export type { HomeContent } from "./HomeContentSlice";
export type { Notification } from "./NotificationSlice";

const { useStore, ...reactStore } = createReactStore(
  {
    homeContent: HomeContentSlice,
    notification: NotificationSlice,
  },
  {
    devtools: process.env.NODE_ENV === "development",
  }
);

export const StoreProvider = reactStore.StoreProvider;

export function useHomeContent() {
  return {
    homeContent: useStore((store) => store.homeContent.data),
  };
}

export function useNotification() {
  return {
    notification: useStore((store) => store.notification.data),
    setNotification: useStore((store) => store.notification.set),
  };
}
