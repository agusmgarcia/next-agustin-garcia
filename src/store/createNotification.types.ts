type Notification = {
  close: () => void;
  message: string;
  type: "success" | "error";
};

type NotificationSlice = {
  notification: Notification | undefined;
  notify: (type: "success" | "error", message: string) => Promise<void>;
};

export default NotificationSlice;
