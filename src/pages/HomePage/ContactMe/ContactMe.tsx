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

  return (
    <Section
      id={homeContent.contactMe.id}
      subtitle={homeContent.contactMe.subtitle}
      className={props.className}
    >
      <form className={styles.contactMe} onSubmit={handleSubmit}>
        {/* NAME */}
        <input
          type="text"
          name="name"
          aria-label={homeContent.contactMe.inputs.name["aria-label"]}
          placeholder={homeContent.contactMe.inputs.name.placeholder}
          className={`${styles.field} ${styles.name}`}
          value={form.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />

        {/* EMAIL ADDRESS */}
        <input
          type="email"
          name="email"
          aria-label={homeContent.contactMe.inputs.email["aria-label"]}
          placeholder={homeContent.contactMe.inputs.email.placeholder}
          className={`${styles.field} ${styles.email}`}
          required
          value={form.email}
          onChange={handleChange}
          disabled={isSubmitting}
        />

        {/* COMPANY NAME */}
        <input
          type="text"
          name="company"
          aria-label={homeContent.contactMe.inputs.company["aria-label"]}
          placeholder={homeContent.contactMe.inputs.company.placeholder}
          className={`${styles.field} ${styles.company}`}
          value={form.company}
          onChange={handleChange}
          disabled={isSubmitting}
        />

        {/* PHONE NUMBER */}
        <input
          type="tel"
          name="phone"
          aria-label={homeContent.contactMe.inputs.phone["aria-label"]}
          placeholder={homeContent.contactMe.inputs.phone.placeholder}
          className={`${styles.field} ${styles.phone}`}
          value={form.phone}
          onChange={handleChange}
          disabled={isSubmitting}
        />

        {/* PROJECT DETAILS */}
        <textarea
          name="details"
          aria-label={homeContent.contactMe.inputs.details["aria-label"]}
          placeholder={homeContent.contactMe.inputs.details.placeholder}
          className={`${styles.field} ${styles.details}`}
          rows={5}
          value={form.details}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />

        {/* SUBMIT */}
        <Button type="submit" disabled={isSubmitting} className={styles.button}>
          {!isSubmitting ? (
            <Typography variant={desktop ? "1.25rem" : "1rem"}>
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
