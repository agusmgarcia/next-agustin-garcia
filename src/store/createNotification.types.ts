import { Slice } from "@agusmgarcia/swr";

type Notification = {
  close: () => void;
  message: string;
  type: "success" | "error";
};

type NotificationSlice = Slice<
  "notification",
  {},
  Notification | undefined,
  { notify: (type: "success" | "error", message: string) => Promise<void> },
  void
>;

export default NotificationSlice;
