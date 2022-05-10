import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from "react";
import { toast, ToastOptions } from "react-toastify";

type FormType = {
  companyName: string | undefined;
  name: string;
  emailAddress: string;
  phoneNumber: string | undefined;
  details: string;
};

const initialValues: FormType = {
  companyName: "",
  name: "",
  emailAddress: "",
  phoneNumber: "",
  details: "",
};

export default function useContactMe() {
  const [values, setValues] = useState(initialValues);
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = useCallback((event) => {
    event.preventDefault();
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const [isSubmitting, setSubmitting] = useState(false);
  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault();

      const toastOptions: ToastOptions = {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      };

      setSubmitting(true);
      try {
        const response = await fetch(
          "https://api.emailjs.com/api/v1.0/email/send",
          {
            method: "POST",
            body: JSON.stringify({
              service_id: "service_vmkbm19",
              template_id: "template_pav1yqi",
              user_id: "user_XKPaTWupTGOTu5zPzfiiF",
              template_params: values,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.status !== 200)
          throw new Error("A status code different from 200 has been received");

        setValues(initialValues);
        setSubmitting(false);
        await new Promise((resolve) =>
          toast.success("Email sent successfully!", {
            ...toastOptions,
            onClose: resolve,
          })
        );
      } catch (error) {
        setSubmitting(false);
        await new Promise((resolve) =>
          toast.error("An error occurred, please retry in a few seconds", {
            ...toastOptions,
            onClose: resolve,
          })
        );
      }
    },
    [values]
  );

  return {
    form: values,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}
