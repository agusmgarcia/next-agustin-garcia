import { createMemoryStorageSlice } from "@agusmgarcia/swr";

import type NotificationSlice from "./createNotification.types";

const createNotification = createMemoryStorageSlice<NotificationSlice>(
  (store) => ({
    initialData: undefined,
    name: "notification",
    notify: (type, message) =>
      new Promise((resolve) =>
        store.get().notification.setData({
          close: () =>
            store
              .get()
              .notification.setData(undefined)
              .then(() => resolve()),
          message,
          type,
        })
      ),
    onInit: () => store.get().notification.fetch({}),
  })
);

export default createNotification;
