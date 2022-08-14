import AppPageProps from "./AppPage.types";
import SmoothScroll from "./SmoothScroll";
import Toast from "./Toast";

export default function AppPage(props: AppPageProps) {
  return (
    <>
      <SmoothScroll />
      <Toast />
      {props.children}
    </>
  );
}
