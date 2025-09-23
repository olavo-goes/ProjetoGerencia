import React from "react";
import styles from "./Header.module.css";

export default function Header({ title, subtitle, leftText, logoSrc, logoAlt }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftText}>{leftText}</div>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.logo}>
          <img
  src={logoSrc}
  alt={logoAlt || "Logo"}
  style={{ height: "75px", width: "70px", borderRadius: "15px", borderColor: "black", border: "solid 4px #5f90b8ff"}}
/>
        </div>
      </div>
    </header>
  );
}