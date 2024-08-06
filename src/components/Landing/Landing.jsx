import React from 'react'
import {getImageUrl} from "../../utils.js"
import styles from "./Landing.module.css"

export const Landing = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Brandon Pardi
                </h1>
                <div className={styles.lines}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                <p className={styles.description}>
                    I make things that solve problems. Check out what I can do below.
                </p>
            </div>
            <img src={getImageUrl("self/self-portrait.jpg")} alt="Self Portrait of Brandon Pardi"  className={styles.portrait}></img>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}