import { useMediaQuery } from "@agusmgarcia/react-essentials-utils";

import { useHomeContent } from "#src/store";

import type CompaniesProps from "./Companies.types";

export default function useCompanies(props: CompaniesProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { homeContent } = useHomeContent();

  return { ...props, desktop, homeContent };
}
