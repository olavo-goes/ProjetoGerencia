import React from "react";
import styles from "./Header.module.css";

export default function Header({ title, subtitle, leftText }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftText}>{leftText}</div>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
    </header>
  );
}