type Notification = {
  close: () => void;
  message: string;
  type: "success" | "error";
};

export default Notification;
