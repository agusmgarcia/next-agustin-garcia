type BoxProps = {
  variant?: "1200px" | "800px";
} & (
  | ({ as?: "div" } & React.HTMLAttributes<HTMLDivElement>)
  | ({ as: "section" } & React.HTMLAttributes<HTMLElement>)
);

export default BoxProps;
