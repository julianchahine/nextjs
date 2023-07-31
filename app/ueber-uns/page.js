"use client";
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

export default function UeberUns() {
  return (
    <>
      <section className={styles.slider}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className={styles.container}>
            <div className={styles.sliderLeft}>
              <h1 className={styles.title}>
                Über Uns
              </h1>
              <br /><br />
              <p>
                Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns
                Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns
                Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns
                Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns
                Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns
                Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns
                Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns
                Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns Über Uns
              </p>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
