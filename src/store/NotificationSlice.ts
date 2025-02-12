import {
  createGlobalSlice,
  type CreateGlobalSliceTypes,
  type Func,
} from "@agusmgarcia/react-core";

export type Notification = {
  id: string;
  message: string;
  type: "error" | "success";
};

export type NotificationSlice = CreateGlobalSliceTypes.SliceOf<
  "notification",
  {
    close: Func<void, [notification: Notification]>;
    data: Notification | undefined;
    set: Func<void, [notification: Pick<Notification, "message" | "type">]>;
  }
>;

export default createGlobalSlice<NotificationSlice>("notification", () => ({
  close,
  data: undefined,
  set,
}));

function close(
  notification: Notification,
  context: CreateGlobalSliceTypes.Context<NotificationSlice>,
) {
  context.set((prevState) => ({
    data: prevState.data?.id === notification.id ? undefined : prevState.data,
  }));
}

function set(
  notification: Pick<Notification, "message" | "type">,
  context: CreateGlobalSliceTypes.Context<NotificationSlice>,
) {
  const id = Math.random().toString();
  context.set({ data: { ...notification, id } });
}
