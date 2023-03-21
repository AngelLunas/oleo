import React from "react";
import styles from '../../styles/team.module.css';
import User from "../user";
import { motion } from 'framer-motion';

const teamData = [
    {
        name: 'Angel Luna',
        img: 'angel.png',
        role: 'Web developer',
        description: 'My functions in oleo consist in the development of websites to get more sales with digital strategies. I transform web designs into websites and also deploy them. I convert figma designs to websites with some animations, Seo, responsive design usign Next js. Also I design and develop campaigns of marketing for generating new leads. '
    },
    {
        name: 'Camilo Gallego',
        img: 'camilo.jpg',
        role: 'Web designer',
        description: 'Hi, I am Camilo, I studied systems engineering and I am in charge of the design and graphic part of the website. My role is to supervise the visual structure of the page, making it effective and intuitive for each of our clients, leading visual projects and design proposals for the improvement of the Oleo company.'
    },
    {
        name: 'Jacobo Loaiza',
        img: 'jacobo.jpeg',
        role: 'Sales manager',
        description: 'Hi, I am Jacobo, I studied marketing and I am in change of all sales and distributions of Oleo, I also have counter support. I lead a team with the purpose of achieving the desired objetive in the commercial area. I motivate the others members to make the best desicions and increase the profits of the Oleo company'
    },
    {
        name: 'José David',
        img: 'jose.jpeg',
        role: 'Production manager',
        description: 'He is in charge of planning the tasks of all Óleo workers with the aim of obtaining the best levels of performance in the company and therefore, obtaining a higher level of productivity, and thus being able to meet all the proposed goals of this company.'
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