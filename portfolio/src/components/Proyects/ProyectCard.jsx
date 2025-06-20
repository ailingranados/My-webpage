import React from "react"
import { GetImageUrl } from "../../utils"
import styles from "./ProyectCard.module.css"

export const ProyectCard = ({
    proyect: {title, imageSrc, description, skills, demo, source}}) => {
  return (
    <div className={styles.container}>
                            <img src={GetImageUrl(imageSrc)} alt={`image of ${title}`} className={styles.image} />
                            <h3 className={styles.title}>{title}</h3>
                            <p className={styles.description}>{description}</p>
                            <ul className={styles.skills}> {
                                skills.map((skill, id) => {
                                    return(
                                    <li key={id} className={styles.skill}>{skill}</li>
                                    );
                                })}
                            </ul>
                            <div className={styles.links}>
                                <a href={demo} className={styles.link}>Demo</a>
                                <a href={source} className={styles.link}>Source</a>
                            </div>

                        </div>
  );
};
