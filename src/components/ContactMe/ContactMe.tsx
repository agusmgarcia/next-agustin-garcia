import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";

import Loader from "react-loader-spinner";
import { ToastContainer } from "react-toastify";

import useContactMe from "./ContactMe.hooks";
import styles from "./ContactMe.module.scss";

export default function ContactMe() {
  const { form, isSubmitting, handleChange, handleSubmit } = useContactMe();

  return (
    <div className={styles.contactMe} id="contactMe">
      <h2 className={styles.title}>Let&apos;s talk</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          aria-label="The person's name"
          placeholder="Name *"
          className={styles.field}
          value={form.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <input
          type="email"
          name="emailAddress"
          aria-label="The person's email"
          placeholder="Email Address *"
          className={styles.field}
          required
          value={form.emailAddress}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <input
          type="text"
          name="companyName"
          aria-label="The person's company name"
          placeholder="Company Name"
          className={styles.field}
          value={form.companyName}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <input
          type="phone"
          name="phoneNumber"
          aria-label="The person's phone numebr"
          placeholder="Phone Number"
          className={styles.field}
          value={form.phoneNumber}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        <textarea
          name="details"
          aria-label="The details of the project"
          placeholder="Project Details *"
          className={styles.field}
          rows={5}
          value={form.details}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <button type="submit" disabled={isSubmitting} className={styles.button}>
          {!isSubmitting && "Submit"}
          {isSubmitting && (
            <Loader type="Oval" color="white" width={22} height={22} />
          )}
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
