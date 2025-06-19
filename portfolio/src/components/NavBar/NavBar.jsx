import React, {useState} from "react";
import styles from "./NavBar.module.css"
import {GetImageUrl} from "../../utils";

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
            Portfolio
            </a>
            <div className={styles.menu}>
                <img 
                className={styles.menuBtn} 
                src={
                    menuOpen
                    ? GetImageUrl("nav/close-icon.png")
                    : GetImageUrl("nav/menu-icon.png")
                }
                alt="image-button"
                onClick={() => setMenuOpen(!menuOpen)}
                />
            
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#proyects">Proyects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav> 
    )
}