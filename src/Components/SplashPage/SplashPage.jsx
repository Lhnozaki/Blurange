import React from 'react';
import styles from './SplashPage.module.scss';

const SplashPage = () => {
    return (
        <article className="container">
            <section id={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Blurange</h1>
                    <h3>Get yourself out there...fast lol</h3>
                    <button>get started for free</button>
                </div>
            </section>
        </article>
    )
}

export default SplashPage;