import React from "react"
import proyects from "../../data/proyects.json"
import styles from "./Proyects.module.css"
import { ProyectCard } from "./ProyectCard"

export const Proyects = () => {
    return (
        <section className={styles.container} id="proyects">
            <h2 className={styles.title}>Proyects</h2>
            <div className={styles.proyects}>
                {
                    proyects.map((proyect, id) => {
                        return <ProyectCard key={id} proyect={proyect} />
                    })
                }
            </div>
        </section>
    )
}
