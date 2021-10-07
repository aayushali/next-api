import React from "react";
// import styles from "../styles/About.module.css";  -- This is css module usecase
import styles from "../styles/Contact.module.scss"; // this is scss module usecase
export default function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p className={styles.highlightscss}>
        This is getting color from Contact css module stylesheet
      </p>
    </div>
  );
}
