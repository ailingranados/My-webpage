import React from "react"
import skills from "../../data/skills.json";
import history from "../../data/history.json"
import { GetImageUrl } from "../../utils";
import styles from "./Experience.module.css"

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill, id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={GetImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    })
                }</div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return <li key={id} className={styles.historyItem}>
                                <img 
                                src={GetImageUrl(historyItem.ImageSrc)} 
                                alt={`${historyItem.organization} Logo`} 
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>
                                        {`${historyItem.role}, ${historyItem.organization}`}
                                    </h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                            return <li key={id}>
                                                {experience}
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    );
};
