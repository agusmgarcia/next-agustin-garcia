import {
  createGlobalSlice,
  type CreateGlobalSliceTypes,
} from "@agusmgarcia/react-essentials-store";
import { type Func } from "@agusmgarcia/react-essentials-utils";

export type Notification = {
  close: Func;
  id: string;
  message: string;
  type: "error" | "success";
};

export type NotificationSlice = CreateGlobalSliceTypes.SliceOf<
  "notification",
  {
    data: Notification | undefined;
    set: Func<void, [notification: Pick<Notification, "message" | "type">]>;
  }
>;

export default createGlobalSlice<NotificationSlice>("notification", () => ({
  data: undefined,
  set,
}));

function set(
  notification: Pick<Notification, "message" | "type">,
  context: CreateGlobalSliceTypes.Context<NotificationSlice>,
) {
  const id = Math.random().toString();
  context.set({
    data: {
      ...notification,
      close: () =>
        context.regenerate().set((prevState) => ({
          data: prevState.data?.id === id ? undefined : prevState.data,
        })),
      id,
    },
  });
}
