import React from "react";
import Image from "next/image";
import styles from '../../styles/user.module.css';

const User: React.FC<{name: string, description: string, role: string, img: string}> = ({description, img, name, role}) => {
    return (
        <div className={styles.user}>
            <Image src={`/${img}`} width={150} height={150} alt='user img'/>
            <h3 className={styles.name}>
                { name }
            </h3>
            <span className={styles.role}>
                { role }
            </span>
            <span className={styles.description}>
                { description }
            </span>
        </div>
    )
}

export default User;