import {
  ChangeEventHandler,
  FormEventHandler,
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
          }
        );

        if (response.status !== 200) throw new Error();

        setValues(initialValues);
        setSubmitting(false);
        await setNotification(
          "success",
          homeContent.contactMe.feedback.success
        );
      } catch (error) {
        setSubmitting(false);
        await setNotification("error", homeContent.contactMe.feedback.error);
      }
    },
    [
      homeContent.contactMe.feedback.error,
      homeContent.contactMe.feedback.success,
      setNotification,
      values,
    ]
  );

  return {
    form: values,
    handleChange,
    handleSubmit,
    isSubmitting,
  };
}
