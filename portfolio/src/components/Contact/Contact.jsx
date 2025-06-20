import React from "react"
import { GetImageUrl } from "../../utils";
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={GetImageUrl("contact/github.png")} alt="github" />
                <a href="https://ejemple.com">github.com</a>
            </li>
            <li className={styles.link}>
                <img src={GetImageUrl("contact/email.png")} alt="email" />
                <a href="mailto:ailin.granadoscn@gmail.com"></a>
            </li>
            <li className={styles.link}>
                <img src={GetImageUrl("contact/linkedin.png")} alt="linkedin" />
                <a href="https://ejemple.com">linkedin.com/myname</a>
            </li>
        </ul>
    </footer>
  );
};
