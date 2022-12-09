type Notification = {
  close: () => void;
  id: string;
  message: string;
  type: "success" | "error";
};

export default Notification;
