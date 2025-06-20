import React from "react"
import styles from "./About.module.css"
import { GetImageUrl } from "../../utils"

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>
                About
            </h2>
            <div className={styles.content}>
            <img
                src={GetImageUrl("about/cat.jpg")}
                alt='me with a lap' 
                className={styles.aboutImage}/>
                
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={GetImageUrl("nav/menu-icon.png")} alt="icon" />
                    <div className={styles.aboutItemtext}>
                        <h3>Frontend developer</h3>
                        <p>i'm a frontend developer</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={GetImageUrl("nav/menu-icon.png")} alt="icon" />
                    <div className={styles.aboutItemtext}>
                        <h3>Frontend developer</h3>
                        <p>i'm a frontend developer</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={GetImageUrl("nav/menu-icon.png")} alt="icon" />
                    <div className={styles.aboutItemtext}>
                        <h3>Frontend developer</h3>
                        <p>i'm a frontend developer</p>
                    </div>
                </li>
                </ul>
                </div>
        </section>
    );
};
