import React from "react";
import styles from '../../styles/homePage.module.css';
import Image from "next/image";
import { motion } from "framer-motion";

const title = {
    initial: {
        opacity: 0, 
        scale: 0,
        x: 40
    },
    onScreen: {
        opacity: 1, 
        scale: 1, 
        x: 0,
        transition: {
            duration: .7
        }
    }
};

const title2 = {
    initial: {
        opacity: 0, 
        scale: 0,
        x: 40
    },
    onScreen: {
        opacity: 1, 
        scale: 1, 
        x: 0,
        transition: {
            duration: .7,
            delay: .5
        }
    }
};

const title3 = {
    initial: {
        opacity: 0, 
        scale: 0,
        x: 40
    },
    onScreen: {
        opacity: 1, 
        scale: 1, 
        x: 0,
        transition: {
            duration: .7,
            delay: .9
        }
    }
};

const HomePage: React.FC = () => {
    return (
        <section id="about">
            <div className={styles.containerHome}>
                <div>
                    <div>
                        <motion.h1 className={styles.title} variants={title} initial='initial' whileInView='onScreen'>
                            Oleo soaps
                        </motion.h1>
                        <motion.p className={styles.description} variants={title2} initial='initial' whileInView='onScreen' >
                            The mission of the oleo soap, is develop a product based in kitchen oil used that ensure the reduction of pollution in the environment,
                            focusing mostly in the water care and protect the life of some species that inhabit it.
                        </motion.p>
                        <motion.p className={styles.description} variants={title3} initial='initial' whileInView='onScreen'>
                            The oleo soap is a project thought with intention of we can have a healthy world and be able to enjoy it. At the same time to be
                            able to save the pocket of each person. More than business idea, is a life expectancy, since this help to dismiss favorably pollution
                            and end the risk of extinction of animals.
                        </motion.p>
                    </div>
                </div>
                <div>
                    <Image src='/oleo.png' width={360} height={360} alt='oleo icon' />
                </div>
            </div>
        </section>
    )
}

export default HomePage;