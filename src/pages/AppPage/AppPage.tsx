import { StoreProvider } from "#src/store";

import AppPageProps from "./AppPage.types";
import SmoothScroll from "./SmoothScroll";
import Toast from "./Toast";

export default function AppPage(props: AppPageProps) {
  return (
    <StoreProvider>
      <SmoothScroll />
      <Toast />
      {props.children}
    </StoreProvider>
  );
}
