type TypographyProps = {
  variant?: "2.75rem" | "2rem" | "1.75rem" | "1.25rem" | "1rem" | "0.75rem";
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
