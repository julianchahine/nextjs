import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <p>
                    Test
                </p>
            </footer>
            <script src="https://www.netalliance.eu/assets/js/smartsupp.js" async></script>
        </>
    )
}
