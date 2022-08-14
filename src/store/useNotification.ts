import useStore from "./useStore";

export default function useNotification() {
  const notification = useStore((store) => store.notification);
  const notify = useStore((store) => store.notify);
  return { notification, notify };
}
