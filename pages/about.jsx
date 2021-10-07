import React from "react";
// import styles from "../styles/About.module.css";  -- This is css module usecase
import styles from "../styles/About.module.scss"; // this is scss module usecase

export default function About() {
  return (
    <div>
      <h2>About Page</h2>
      <button className="btn btn-success">Primary</button>
      <p className={styles.highlightscss}>
        This is getting color from About css module stylesheet
      </p>
    </div>
  );
}
