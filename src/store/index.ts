import { createReactStore } from "@agusmgarcia/react-essentials-store";

import { type HomeContentSliceTypes } from "./HomeContentSlice";
import HomeContentSlice from "./HomeContentSlice/HomeContentSlice";
import { type NotificationSliceTypes } from "./NotificationSlice";
import NotificationSlice from "./NotificationSlice/NotificationSlice";

export type HomeContent = HomeContentSliceTypes.default;
export type Notification = NotificationSliceTypes.default;

const { useSelector, ...reactStore } = createReactStore({
  slices: {
    homeContent: HomeContentSlice,
    notification: NotificationSlice,
  },
});

export const StoreProvider = reactStore.StoreProvider;

export function useHomeContent() {
  return {
    homeContent: useSelector((state) => state.homeContent.response),
  };
}

export function useNotification() {
  return {
    closeNotification: useSelector((state) => state.notification.close),
    notification: useSelector((state) => state.notification.state),
    setNotification: useSelector((state) => state.notification.set),
  };
}
