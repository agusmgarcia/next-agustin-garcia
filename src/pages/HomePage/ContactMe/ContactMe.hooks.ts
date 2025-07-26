import { delay } from "@agusmgarcia/react-essentials-utils";
import {
  type ChangeEventHandler,
  type FormEventHandler,
  useCallback,
  useState,
} from "react";

import { useHomeContent, useNotification } from "#src/store";

const initialValues = {
  company: "",
  details: "",
  email: "",
  name: "",
  phone: "",
};

export default function useContactMe() {
  const { homeContent } = useHomeContent();
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setSubmitting] = useState(false);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = useCallback((event) => {
    event.preventDefault();
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const { setNotification } = useNotification();

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault();

      if (!homeContent?.contactMe.feedback.error) return;
      if (!homeContent?.contactMe.feedback.success) return;

      setSubmitting(true);
      try {
        await delay(3000);

        setValues(initialValues);
        setSubmitting(false);
        setNotification({
          message: homeContent.contactMe.feedback.success,
          type: "success",
        });
      } catch {
        setSubmitting(false);
        setNotification({
          message: homeContent.contactMe.feedback.error,
          type: "error",
        });
      }
    },
    [
      homeContent?.contactMe.feedback.error,
      homeContent?.contactMe.feedback.success,
      setNotification,
    ],
  );

  return {
    form: values,
    handleChange,
    handleSubmit,
    isSubmitting,
  };
}
