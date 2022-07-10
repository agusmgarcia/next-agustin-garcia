import React, { createContext, useContext, useState } from "react";
import {
  createContext as createContextSelector,
  useContextSelector,
} from "use-context-selector";

import type { Store } from "./store.types";

const initialStore: Store = { notification: undefined };
const StoreContext = createContextSelector(initialStore);

export function useStore<TResult>(selector: (_store: Store) => TResult) {
  return useContextSelector(StoreContext, selector);
}

const initialSetStore: React.Dispatch<React.SetStateAction<Store>> = () => {};
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
