type BoxProps = {
  variant?: "800px" | "1200px";
} & (
  | ({ as?: "div" } & React.HTMLAttributes<HTMLDivElement>)
  | ({ as: "section" } & React.HTMLAttributes<HTMLElement>)
);

export default BoxProps;
