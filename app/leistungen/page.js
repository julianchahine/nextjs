import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Leistungen - NETALLIANCE | Inspire & Succeed',
  description: 'Created by Julian Chahine',
}

export default function Leistungen() {
  return (
    <>
      <section className={styles.slider}>
        <div className={styles.container}>
          <div className={styles.sliderLeft}>
            <h1 className={styles.title}>
              Leistungen
            </h1>
            <br /><br />
            <p>
              Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen
              Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen
              Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen
              Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen
              Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen
              Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen
              Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen Leistungen
            </p>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </div>
      </section>
    </>
  )
}
