import { Button, Spinner, Typography } from "#src/components";
import { useStore } from "#src/store";
import { useMediaQuery, Viewports } from "#src/utils";

import Section from "../Section";
import useContactMe from "./ContactMe.hooks";
import styles from "./ContactMe.module.scss";
import ContactMeProps from "./ContactMe.types";

export default function ContactMe(props: ContactMeProps) {
  const desktop = useMediaQuery(Viewports.MIN_MD);
  const homeContent = useStore((store) => store.homeContent.data);
  const { form, handleChange, handleSubmit, isSubmitting } = useContactMe();

  return (
    <Section
      id={homeContent.contactMe.id}
      subtitle={homeContent.contactMe.subtitle}
      className={props.className}
    >
      <form className={styles.contactMe} onSubmit={handleSubmit}>
        {/* NAME */}
        <Typography as="label">
          {homeContent.contactMe.inputs.name.label}
          <Typography
            as="input"
            type="text"
            name="name"
            placeholder={homeContent.contactMe.inputs.name.placeholder}
            className={styles.field}
            value={form.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </Typography>

        {/* EMAIL ADDRESS */}
        <Typography as="label">
          {homeContent.contactMe.inputs.email.label}
          <Typography
            as="input"
            type="email"
            name="email"
            placeholder={homeContent.contactMe.inputs.email.placeholder}
            className={styles.field}
            required
            value={form.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </Typography>

        {/* COMPANY NAME */}
        <Typography as="label">
          {homeContent.contactMe.inputs.company.label}
          <Typography
            as="input"
            type="text"
            name="company"
            placeholder={homeContent.contactMe.inputs.company.placeholder}
            className={styles.field}
            value={form.company}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </Typography>

        {/* PHONE NUMBER */}
        <Typography as="label">
          {homeContent.contactMe.inputs.phone.label}
          <Typography
            as="input"
            type="tel"
            name="phone"
            placeholder={homeContent.contactMe.inputs.phone.placeholder}
            className={styles.field}
            value={form.phone}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </Typography>

        {/* PROJECT DETAILS */}
        <Typography as="label" className={styles.details}>
          {homeContent.contactMe.inputs.details.label}
          <Typography
            as="textarea"
            name="details"
            placeholder={homeContent.contactMe.inputs.details.placeholder}
            className={styles.field}
            rows={5}
            value={form.details}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </Typography>

        {/* SUBMIT */}
        <Button type="submit" disabled={isSubmitting} className={styles.button}>
          {!isSubmitting ? (
            <Typography as="span" variant={desktop ? "1.25rem" : "1rem"}>
              {homeContent.contactMe.submit.text}
            </Typography>
          ) : (
            <Spinner
              color="white"
              width={desktop ? "1.25rem" : "1rem"}
              height={desktop ? "1.25rem" : "1rem"}
              strokeWidth="2"
            />
          )}
        </Button>
      </form>
    </Section>
  );
}
