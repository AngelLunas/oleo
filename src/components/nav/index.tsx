import React from "react";
import styles from '../../styles/nav.module.css';
import { Link as ScrollLink } from 'react-scroll';

const Nav: React.FC = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.navContainer}>
                <span className={styles.title}>
                    Oleo
                </span>
                <div className={styles.containerBtns}>
                    <ScrollLink to="about" 
                        duration={100}
                        className={styles.navText}>
                        About us
                    </ScrollLink>
                    <ScrollLink to='team'
                        duration={100}
                        className={styles.navText}>
                        Our team
                    </ScrollLink>
                </div>
            </div>
        </div>
    )
}

export default Nav;