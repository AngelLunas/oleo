import React from "react";
import styles from '../../styles/team.module.css';
import User from "../user";
import { motion } from 'framer-motion';

const teamData = [
    {
        name: 'Angel Luna',
        img: 'user.png',
        role: 'Web developer',
        description: 'My functions in oleo consist in the development of websites to get more sales with digital strategies. I transform web designs into websites and also deploy them.'
    },
    {
        name: 'Camilo Trejos',
        img: 'user.png',
        role: 'Web designer',
        description: 'My functions in oleo consist in the development of websites to get more sales with digital strategies. I transform web designs into websites and also deploy them'
    },
    {
        name: 'Jacobo',
        img: 'user.png',
        role: 'Sales manager',
        description: 'My functions in oleo consist in the development of websites to get more sales with digital strategies. I transform web designs into websites and also deploy them'
    },
    {
        name: 'Otro...',
        img: 'user.png',
        role: 'Production manager',
        description: 'My functions in oleo consist in the development of websites to get more sales with digital strategies. I transform web designs into websites and also deploy them'
    }
]

const container = { offScreen: { opacity: 0, scale: 0 }, onScreen: { opacity: 1, scale: 1, transition: {duration: .7} } };

const Team: React.FC = () => {
    return (
        <section id='team'>
            <div className={styles.team}>
                <div>
                    <h2 className={styles.title}>
                        Our team
                    </h2>
                    <div className='line'>
                    </div>
                    <motion.div initial='offScreen' whileInView='onScreen' transition={{staggerChildren: .3}} className={styles.containerUsers}>
                        { teamData.map((element, index) => <motion.div variants={container} key={index} style={index === 3 ? {gridColumn: 2 } : {}}><User description={element.description} img={element.img} role={element.role} name={element.name} /></motion.div>) }
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Team;