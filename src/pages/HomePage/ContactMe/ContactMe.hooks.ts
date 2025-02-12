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

      if (homeContent?.contactMe.feedback.error === undefined) return;
      if (homeContent?.contactMe.feedback.success === undefined) return;

      setSubmitting(true);
      try {
        const response = await fetch(
          "https://api.emailjs.com/api/v1.0/email/send",
          {
            body: JSON.stringify({
              service_id: "service_vmkbm19",
              template_id: "template_pav1yqi",
              template_params: values,
              user_id: "user_XKPaTWupTGOTu5zPzfiiF",
            }),
            headers: { "Content-Type": "application/json" },
            method: "POST",
          },
        );

        if (response.status !== 200) throw new Error();

        setValues(initialValues);
        setSubmitting(false);
        setNotification({
          message: homeContent.contactMe.feedback.success,
          type: "success",
        });
      } catch (error) {
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
      values,
    ],
  );

  return {
    form: values,
    handleChange,
    handleSubmit,
    isSubmitting,
  };
}
