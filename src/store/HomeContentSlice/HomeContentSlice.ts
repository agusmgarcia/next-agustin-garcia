import { ServerSlice } from "@agusmgarcia/react-essentials-store";

import { type Request } from "./HomeContentSlice.types";
import type HomeContent from "./HomeContentSlice.types";

export default class HomeContentSlice extends ServerSlice<
  HomeContent,
  Request
> {
  constructor(homeContent: HomeContent) {
    super(homeContent);
  }

  protected override onRequestBuild(): Request {
    return {};
  }

  protected override async onFetch(): Promise<HomeContent> {
    const result = await import("#public/contents/home.en.json");
    return result.default;
  }
}
