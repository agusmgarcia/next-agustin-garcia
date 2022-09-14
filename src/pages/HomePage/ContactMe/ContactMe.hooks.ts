import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from "react";

import { useStore } from "#src/store";

const initialValues = {
  company: "",
  details: "",
  email: "",
  name: "",
  phone: "",
};

export default function useContactMe() {
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

  const notify = useStore((store) => store.notification.notify);

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

        if (response.status !== 200)
          throw new Error("A status code different from 200 has been received");

        setValues(initialValues);
        setSubmitting(false);
        await notify("success", "Email sent successfully!");
      } catch (error) {
        setSubmitting(false);
        await notify(
          "error",
          "An error occurred, please retry in a few seconds"
        );
      }
    },
    [notify, values]
  );

  return {
    form: values,
    handleChange,
    handleSubmit,
    isSubmitting,
  };
}
