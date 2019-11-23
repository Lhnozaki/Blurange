import React from 'react';
import styles from './SplashPage.module.scss';

const SplashPage = () => {
    return (
        <article className="container">
            <section id={styles.hero}>
                <div className={styles.heroContent}>
                    <h1><span className="color-light-blue">Blur</span><span className="color-orange">ange</span></h1>
                    <h3>Your code doesn't repeat itself, why should you?</h3>
                    <button className="cta">get started for free</button>
                </div>
            </section>
            <section id={styles.aboutContent}>
                <h3 className='title'>3 steps to go live</h3>
                <div className={styles.cardContainer}>
                    <div className="card">
                        <h3 className="color-blue">1. Pick A Theme</h3>
                        <p>Take the stress of design off your mind. We have a multitude of different templates for you to choose from.</p>
                    </div>
                    <div className="card">
                        <h3 className="color-blue">2. Keep it DRY</h3>
                        <p>Drop in a document, add it from your linkedin or github, we'll fill out the template for you just change what you want.</p>
                    </div>
                    <div className="card">
                        <h3 className="color-blue">3. Make it live</h3>
                        <p>You can host it yourself or on our servers. We have custom domains too if you want them.</p>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default SplashPage;