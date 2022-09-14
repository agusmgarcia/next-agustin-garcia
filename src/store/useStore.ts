import { createStore } from "@agusmgarcia/swr";

import createHomeContent from "./createHomeContent";
import createNotification from "./createNotification";

const useStore = createStore(createHomeContent, createNotification);

export default useStore;
