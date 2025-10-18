import { useMediaQuery } from "@agusmgarcia/react-essentials-utils";
import { twMerge } from "tailwind-merge";

import { Button, Input, Spinner, Typography } from "#src/components";
import { useHomeContent } from "#src/store";

import { Section } from "../Section";
import useContactMe from "./ContactMe.hooks";
import type ContactMeProps from "./ContactMe.types";

export default function ContactMe(props: ContactMeProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { homeContent } = useHomeContent();
  const { form, handleChange, handleSubmit, isSubmitting } = useContactMe();

  if (!homeContent) return <></>;

  return (
    <Section
      className={props.className}
      id={homeContent.contactMe.id}
      title={homeContent.contactMe.subtitle}
    >
      <form
        className={twMerge("grid w-full grid-cols-1 gap-4", "md:grid-cols-2")}
        onSubmit={handleSubmit}
      >
        {/* NAME */}
        <Input
          as="input"
          autoComplete="name"
          disabled={isSubmitting}
          label={homeContent.contactMe.inputs.name.label}
          name="name"
          onChange={handleChange}
          placeholder={homeContent.contactMe.inputs.name.placeholder}
          required={true}
          type="text"
          value={form.name}
        />

        {/* EMAIL ADDRESS */}
        <Input
          as="input"
          autoComplete="email"
          disabled={isSubmitting}
          label={homeContent.contactMe.inputs.email.label}
          name="email"
          onChange={handleChange}
          placeholder={homeContent.contactMe.inputs.email.placeholder}
          required={true}
          type="email"
          value={form.email}
        />

        {/* COMPANY NAME */}
        <Input
          as="input"
          autoComplete="false"
          disabled={isSubmitting}
          label={homeContent.contactMe.inputs.company.label}
          name="company"
          onChange={handleChange}
          placeholder={homeContent.contactMe.inputs.company.placeholder}
          type="text"
          value={form.company}
        />

        {/* PHONE NUMBER */}
        <Input
          as="input"
          autoComplete="tel-national"
          className={""}
          disabled={isSubmitting}
          label={homeContent.contactMe.inputs.phone.label}
          name="phone"
          onChange={handleChange}
          placeholder={homeContent.contactMe.inputs.phone.placeholder}
          type="tel"
          value={form.phone}
        />

        {/* PROJECT DETAILS */}
        <Input
          as="textarea"
          disabled={isSubmitting}
          label={homeContent.contactMe.inputs.details.label}
          labelClassName="col-span-1 md:col-span-2"
          name="details"
          onChange={handleChange}
          placeholder={homeContent.contactMe.inputs.details.placeholder}
          required={true}
          rows={5}
          value={form.details}
        />

        {/* SUBMIT */}
        <Button
          className="mt-4 flex items-center justify-center md:col-span-2"
          disabled={isSubmitting}
          type="submit"
        >
          {!isSubmitting ? (
            <Typography as="span" variant={desktop ? "1.25rem" : "1rem"}>
              {homeContent.contactMe.submit.text}
            </Typography>
          ) : (
            <Spinner
              color="white"
              height={desktop ? "1.25rem" : "1rem"}
              strokeWidth="4"
              width={desktop ? "1.25rem" : "1rem"}
            />
          )}
        </Button>
      </form>
    </Section>
  );
}
