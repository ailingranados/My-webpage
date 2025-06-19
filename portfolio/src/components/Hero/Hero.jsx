import React from "react";
import { GetImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Ailin</h1>
                <p className={styles.description}>I'm Full-stack developer</p>
                <a href="mailto:ailin.granadoscn@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            
                <img
                    src={GetImageUrl("hero/hero-img.jpg")}
                    alt="Hero-img"
                    className={styles.heroImg}
                />

            
            <div className={styles.topBlur}/>
            {/* <div className={styles.bottomBlur}/> */}

        </section>
    );
};
