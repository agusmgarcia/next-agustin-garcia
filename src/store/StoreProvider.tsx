import React, { createContext, useContext, useState } from "react";
import {
  createContext as createContextSelector,
  useContextSelector,
} from "use-context-selector";

import { initialState as homeContent } from "./useHomeContent";
import { initialState as notification } from "./useNotification";

const initialStore = { homeContent, notification };
const StoreContext = createContextSelector(initialStore);

export function useStore<TResult>(
  selector: (_store: typeof initialStore) => TResult
) {
  return useContextSelector(StoreContext, selector);
}

const initialSetStore: React.Dispatch<
  React.SetStateAction<typeof initialStore>
> = () => {};
const SetStoreContext = createContext(initialSetStore);

export function useSetStore() {
  return useContext(SetStoreContext);
}

export default function StoreProvider(props: { children?: React.ReactNode }) {
  const [store, setStore] = useState(initialStore);

  return (
    <SetStoreContext.Provider value={setStore}>
      <StoreContext.Provider value={store}>
        {props.children}
      </StoreContext.Provider>
    </SetStoreContext.Provider>
  );
}
