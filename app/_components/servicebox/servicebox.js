import styles from './servicebox.module.css'

import Image from 'next/image'

export default function ServiceBox(props) {
    return (
        <>
            <article className={styles.serviceBox}>
                <Image src={props.image} width="30" height="30" alt={props.alt} title={props.title} /> 
                <p className={styles.serviceBoxTitle}>{props.titel}</p>
                <p className={styles.serviceBoxDescription}>{props.description}</p>
            </article>
        </>
    )
}
