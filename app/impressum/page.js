import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Impressum - NETALLIANCE | Inspire & Succeed',
  description: 'Created by Julian Chahine',
}

export default function Impressum() {
  return (
    <>
      <section className={styles.slider}>
        <div className={styles.container}>
          <div className={styles.sliderLeft}>
            <h1 className={styles.title}>
              Impressum
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}
