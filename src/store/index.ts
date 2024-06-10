import { createStore } from "@agusmgarcia/react-core";

import HomeContentSlice from "./HomeContentSlice";
import NotificationSlice from "./NotificationSlice";

export { type HomeContent, type HomeContentSlice } from "./HomeContentSlice";
export { type Notification, type NotificationSlice } from "./NotificationSlice";

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
