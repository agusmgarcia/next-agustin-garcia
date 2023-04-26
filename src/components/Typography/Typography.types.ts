type TypographyProps = {
  variant?: "0.75rem" | "1.25rem" | "1.75rem" | "1rem" | "2.75rem" | "2rem";
} & (
  | ({
      as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({
      as?: "p";
    } & React.HTMLAttributes<HTMLParagraphElement>)
  | ({
      as: "span";
    } & React.HTMLAttributes<HTMLSpanElement>)
  | ({
      as: "label";
    } & React.LabelHTMLAttributes<HTMLLabelElement>)
  | ({
      as: "input";
    } & React.InputHTMLAttributes<HTMLInputElement>)
  | ({
      as: "textarea";
    } & React.TextareaHTMLAttributes<HTMLTextAreaElement>)
);

export default TypographyProps;
