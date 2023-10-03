import { useRef } from "react";

import { IconContext } from "react-icons";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

import emailjs from "@emailjs/browser";

import TitleBar from "../components/TitleBar";

import classes from "./Contact.module.css";

const Contact = () => {
  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_sbrye7w",
      "template_s7fl9ab",
      form.current,
      "vGlUNrys7yZRY7py5"
    );
  };

  return (
    <div>
      <TitleBar text="< Contact />" />
      <div className={classes.description}>
        <h1>Fill out the form below and let’s get started on your projects!</h1>
      </div>
      <div className={classes.contactInfo}>
        <span>
          <IconContext.Provider value={{ size: "2%" }}>
            <CiPhone />
          </IconContext.Provider>
          <p>901-299-9005</p>
        </span>
        <span>
          <IconContext.Provider value={{ size: "2%" }}>
            <CiMail />
          </IconContext.Provider>
          <p>
            <a href="mailto:">chodgesdev@gmail.com</a>
          </p>
        </span>
      </div>
      <div className={classes.formWrapper}>
        <form ref={form} className={classes.form}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea type="text" id="message" name="message" />
          <span className={classes.buttonWrapper}>
            <button type="submit" onClick={submitHandler}>
              Submit
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
