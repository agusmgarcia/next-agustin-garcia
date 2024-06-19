import { useMediaQuery } from "@agusmgarcia/react-core";
import clsx from "clsx";

import { Button, Input, Spinner, Typography } from "#src/components";
import { useHomeContent } from "#src/store";

import Section from "../Section";
import useContactMe from "./ContactMe.hooks";
import ContactMeProps from "./ContactMe.types";

export default function ContactMe(props: ContactMeProps) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { homeContent } = useHomeContent();
  const { form, handleChange, handleSubmit, isSubmitting } = useContactMe();

  if (homeContent === undefined) return <></>;

  return (
    <Section
      className={props.className}
      id={homeContent.contactMe.id}
      title={homeContent.contactMe.subtitle}
    >
      <form
        className={clsx("grid w-full grid-cols-1 gap-4", "md:grid-cols-2")}
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
          className="mt-4 md:col-span-2"
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
              strokeWidth="2"
              width={desktop ? "1.25rem" : "1rem"}
            />
          )}
        </Button>
      </form>
    </Section>
  );
}
