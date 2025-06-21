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
                {/* <img
                    src={GetImageUrl("about/cat.jpg")}
                    alt='me with a lap'
                    className={styles.aboutImage} /> */}

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={GetImageUrl("about/back.png")} alt="icon" />
                        <div className={styles.aboutItemtext}>
                            <h3>My Education</h3>
                            <p>I hold a Licenciatura en Multimedia y Animación Digital
                                from the Facultad de Ciencias Físico Matemáticas at UANL.
                                as well as Professional Certificate en SQL Server from the
                                Facultad de Ingeniería Mecánica y Eléctrica at UANL.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={GetImageUrl("about/dev.png")} alt="icon" />
                        <div className={styles.aboutItemtext}>
                            <h3>Frontend developer</h3>
                            <p>I have foundational skills in HTML, CSS, and JavaScript,
                                enabling me to build responsive and user-friendly web pages.
                                I am familiar with modern frontend frameworks like React and have experience working with version control systems such as Git.
                                I focus on building responsive, user-friendly interfaces that work across devices and browsers.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={GetImageUrl("about/UI.png")} alt="icon" />
                        <div className={styles.aboutItemtext}>
                            <h3>Backend developer</h3>
                            <p> I have basic knowledge of server-side programming and experience working with relational
                                databases like SQL Server and MySQL. I understand how to create and manage APIs,
                                handle data storage, and ensure application security.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={GetImageUrl("about/UI.png")} alt="icon" />
                        <div className={styles.aboutItemtext}>
                            <h3>3D modeler</h3>
                            <p>I have foundational skills in creating and editing 3D models using software
                                 like Blender and Maya. I understand basic principles of texturing, 
                                 lighting, and rendering to produce visually appealing assets. 
                                 I also have experience in rigging and animating characters, 
                                 as well as digital sculpting to add detailed features.</p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </section>
    );
};
