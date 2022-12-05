import { MemoryStorageSlice } from "@agusmgarcia/swr";

import type HomeContent from "./HomeContent.types";

export default class HomeContentSlice extends MemoryStorageSlice<HomeContent> {
  constructor(_: any, fallbackData: HomeContent) {
    super(fallbackData);
  }
}
