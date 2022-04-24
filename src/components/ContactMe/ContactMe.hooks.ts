import { useForm, YupValidator } from "@agusmgarcia/form";
import { toast, ToastOptions } from "react-toastify";
import * as yup from "yup";

type FormType = {
  companyName: string | undefined;
  name: string;
  emailAddress: string;
  phoneNumber: string | undefined;
  details: string;
};

const schemaValidator = new YupValidator<FormType>(
  yup
    .object({
      companyName: yup.string().notRequired(),
      name: yup.string().required(),
      emailAddress: yup.string().email().required(),
      phoneNumber: yup.string().notRequired(),
      details: yup.string().required(),
    })
    .required()
);

const initialValues: FormType = {
  companyName: "",
  name: "",
  emailAddress: "",
  phoneNumber: "",
  details: "",
};

export default function useContactMe() {
  const { values, handleChange, isSubmitting, handleSubmit } =
    useForm<FormType>({
      initialValues: { ...initialValues },
      onSubmit: onSubmit,
      validators: [schemaValidator],
    });

  return {
    form: values,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}

async function onSubmit({
  values,
  resetForm,
}: {
  values: FormType;
  resetForm: (_cfg: { initialValues: FormType }) => void;
}) {
  const toastOptions: ToastOptions = {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  };

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

    await new Promise((resolve) =>
      toast.success("Email sent successfully!", {
        ...toastOptions,
        onClose: resolve,
      })
    );

    resetForm({ initialValues: { ...initialValues } });
  } catch (error) {
    await new Promise((resolve) =>
      toast.error("An error occurred, please retry in a few seconds", {
        ...toastOptions,
        onClose: resolve,
      })
    );
  }
}
