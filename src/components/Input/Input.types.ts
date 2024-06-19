type InputProps = { label: string; labelClassName?: string } & (
  | ({
      as: "input";
    } & React.InputHTMLAttributes<HTMLInputElement>)
  | ({
      as: "textarea";
    } & React.TextareaHTMLAttributes<HTMLTextAreaElement>)
);

export default InputProps;
