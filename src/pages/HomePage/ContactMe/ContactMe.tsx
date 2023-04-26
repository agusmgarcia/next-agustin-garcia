import { Button, Spinner, Typography } from "#src/components";
import { useHomeContent } from "#src/store";
import { useMediaQuery, Viewports } from "#src/utils";

import Section from "../Section";
import useContactMe from "./ContactMe.hooks";
import styles from "./ContactMe.module.scss";
import ContactMeProps from "./ContactMe.types";

export default function ContactMe(props: ContactMeProps) {
  const desktop = useMediaQuery(Viewports.MIN_MD);
  const { homeContent } = useHomeContent();
  const { form, handleChange, handleSubmit, isSubmitting } = useContactMe();

  if (homeContent === undefined) return <></>;

  return (
    <Section
      className={props.className}
      id={homeContent.contactMe.id}
      subtitle={homeContent.contactMe.subtitle}
    >
      <form className={styles.contactMe} onSubmit={handleSubmit}>
        {/* NAME */}
        <Typography as="label">
          {homeContent.contactMe.inputs.name.label}
          <Typography
            as="input"
            className={styles.field}
            disabled={isSubmitting}
            name="name"
            onChange={handleChange}
            placeholder={homeContent.contactMe.inputs.name.placeholder}
            required={true}
            type="text"
            value={form.name}
          />
        </Typography>

        {/* EMAIL ADDRESS */}
        <Typography as="label">
          {homeContent.contactMe.inputs.email.label}
          <Typography
            as="input"
            className={styles.field}
            disabled={isSubmitting}
            name="email"
            onChange={handleChange}
            placeholder={homeContent.contactMe.inputs.email.placeholder}
            required={true}
            type="email"
            value={form.email}
          />
        </Typography>

        {/* COMPANY NAME */}
        <Typography as="label">
          {homeContent.contactMe.inputs.company.label}
          <Typography
            as="input"
            className={styles.field}
            disabled={isSubmitting}
            name="company"
            onChange={handleChange}
            placeholder={homeContent.contactMe.inputs.company.placeholder}
            type="text"
            value={form.company}
          />
        </Typography>

        {/* PHONE NUMBER */}
        <Typography as="label">
          {homeContent.contactMe.inputs.phone.label}
          <Typography
            as="input"
            className={styles.field}
            disabled={isSubmitting}
            name="phone"
            onChange={handleChange}
            placeholder={homeContent.contactMe.inputs.phone.placeholder}
            type="tel"
            value={form.phone}
          />
        </Typography>

        {/* PROJECT DETAILS */}
        <Typography as="label" className={styles.details}>
          {homeContent.contactMe.inputs.details.label}
          <Typography
            as="textarea"
            className={styles.field}
            disabled={isSubmitting}
            name="details"
            onChange={handleChange}
            placeholder={homeContent.contactMe.inputs.details.placeholder}
            required={true}
            rows={5}
            value={form.details}
          />
        </Typography>

        {/* SUBMIT */}
        <Button className={styles.button} disabled={isSubmitting} type="submit">
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
