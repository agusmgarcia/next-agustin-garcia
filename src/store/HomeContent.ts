import { MemoryStorageSlice } from "@agusmgarcia/swr";

import type HomeContent from "./HomeContent.types";

export default class HomeContentSlice extends MemoryStorageSlice<HomeContent> {
  constructor(_: any, initialData: HomeContent) {
    super(initialData);
  }
}
