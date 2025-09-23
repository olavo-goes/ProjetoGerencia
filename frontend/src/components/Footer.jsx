import React from "react";
import styles from "./Footer.module.css";

export default function Footer({ title, subtitle, leftText }) {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.leftText}>{leftText}</div>
                <div className={styles.content}>
                    <h1 className={styles.title}>{title}</h1>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
            </div>
        </footer>
    );
}