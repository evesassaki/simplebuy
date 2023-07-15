import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.scss";
import Card from "../../components/card/Card";
import { FaEnvelope, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_wy9kysz",
        form.current,
        "dqCJHR2qnytdS4xdk"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <section>
        <div className={`container ${styles.contact}`}>
          <h2>Contact us</h2>
          <div className={styles.section}>
            <form onSubmit={sendEmail} ref={form}>
              <Card cardClass={styles.card}>
                <label>Name:</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  required
                />
                <label>Email:</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="e-mail"
                  required
                />
                <label>Subject:</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <label>Message:</label>
                <textarea cols="30" rows="10" name="message" />
                <button className="--btn --btn-primary">Send message</button>
              </Card>
            </form>
            <div className={styles.details}>
              <Card cardClass={styles.card2}>
                <h3>Our contact information</h3>
                <p>
                  Fill in the form or contact us via other channels listed below
                </p>
                <div className={styles.icons}>
                  <span>
                    <FaPhoneAlt />
                    <p>19 8888-8888</p>
                  </span>
                  <span>
                    <FaEnvelope />
                    <p>19 8888-8888</p>
                  </span>
                  <span>
                    <GoLocation />
                    <p>19 8888-8888</p>
                  </span>
                  <span>
                    <FaFacebook />
                    <p>19 8888-8888</p>
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
