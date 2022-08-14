import useStore from "./useStore";

export default function useHomeContent() {
  const homeContent = useStore((store) => store.homeContent);
  return { homeContent };
}
