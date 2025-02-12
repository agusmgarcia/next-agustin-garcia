import { createStore } from "@agusmgarcia/react-core";

import createHomeContentSlice from "./HomeContentSlice";
import createNotificationSlice from "./NotificationSlice";

export { type HomeContent, type HomeContentSlice } from "./HomeContentSlice";
export { type Notification, type NotificationSlice } from "./NotificationSlice";

const { useSelector, ...reactStore } = createStore(
  createHomeContentSlice,
  createNotificationSlice,
);

export const StoreProvider = reactStore.StoreProvider;

export function useHomeContent() {
  return {
    homeContent: useSelector((state) => state.homeContent.data),
  };
}

export function useNotification() {
  return {
    closeNotification: useSelector((state) => state.notification.close),
    notification: useSelector((state) => state.notification.data),
    setNotification: useSelector((state) => state.notification.set),
  };
}
