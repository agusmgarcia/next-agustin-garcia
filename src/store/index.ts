import { createReactStore } from "@agusmgarcia/react-essentials-store";

import HomeContentSlice from "./HomeContentSlice";
import NotificationSlice from "./NotificationSlice";

export {
  default as HomeContentSlice,
  type HomeContent,
} from "./HomeContentSlice";
export {
  default as NotificationSlice,
  type Notification,
} from "./NotificationSlice";

const { useSelector, ...reactStore } = createReactStore({
  homeContent: HomeContentSlice,
  notification: NotificationSlice,
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
