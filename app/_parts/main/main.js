import styles from './main.module.css'

export default function Main({content}) {
    return (
        <>
            <main className={styles.main}>
               
                    {content}
               
            </main>
        </>
    )
}
