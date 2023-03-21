import React from "react";
import styles from '../../styles/footer.module.css';
import { Link as ScrollLink } from 'react-scroll';

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.sections}>
                <div className={styles.containerData}>
                    <h2 className={styles.title}>
                        Oleo
                    </h2>
                    <span className={styles.text}>
                        The oleo soap is a project thought with intention of we can have a healthy world and be able to enjoy it. At the same time to be
                        able to save the pocket of each person. More than business idea, is a life expectancy, since this help to dismiss favorably pollution
                        and end the risk of extinction of animals.
                    </span>
                </div>
                <div className={styles.containerLinks}>
                    <h2 className={styles.title}>
                        Quick links
                    </h2>
                    <ScrollLink to='about' 
                        className={styles.link}
                        duration={200}
                    >
                        About us
                    </ScrollLink>
                    <ScrollLink to='team' 
                        className={styles.link}
                        duration={200}
                    >
                        Our team
                    </ScrollLink>
                </div>
            </div>
            <div className={styles.line}>
            </div>
            <div className={styles.copy}>
                <span className={styles.text}>Copyrights. All rights reserved.</span>
                <span className={styles.text}>Developed by Angel Luna</span>
            </div>
        </div>
    )
}

export default Footer;