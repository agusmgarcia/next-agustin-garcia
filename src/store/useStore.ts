import create from "zustand";

import createHomeContent from "./createHomeContent";
import type HomeContentSlice from "./createHomeContent.types";
import createNotification from "./createNotification";
import type NotificationSlice from "./createNotification.types";

const useStore = create<HomeContentSlice & NotificationSlice>()(
  (...actions) => ({
    ...createHomeContent(...actions),
    ...createNotification(...actions),
  })
);

export default useStore;
