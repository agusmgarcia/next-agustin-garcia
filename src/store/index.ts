import { createStore } from "@agusmgarcia/react-swr";

import HomeContentSlice from "./HomeContentSlice";
import NotificationSlice from "./NotificationSlice";

export type { HomeContent } from "./HomeContentSlice";
export type { Notification } from "./NotificationSlice";

const { useSelector, ...reactStore } = createStore(
  {
    homeContent: HomeContentSlice,
    notification: NotificationSlice,
  },
  {
    devtools: process.env.NODE_ENV === "development",
  },
);

export const StoreProvider = reactStore.StoreProvider;

export function useHomeContent() {
  return {
    homeContent: useSelector((state) => state.homeContent.data),
  };
}

export function useNotification() {
  return {
    notification: useSelector((state) => state.notification.data),
    setNotification: useSelector((state) => state.notification.set),
  };
}
