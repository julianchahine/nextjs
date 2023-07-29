import styles from './valuebox.module.css'

export default function ValueBox(props) {
    return (
        <>
            <article className={styles.valueBox}>
                <p className={styles.valueTitle}>
                    {props.titel}
                </p>
                <p className={styles.valueDescription}>
                    {props.description}
                </p>
            </article>
        </>
    )
}
