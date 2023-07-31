"use client";
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

export default function Impressum() {
  return (
    <>  
    <motion.div
 exit={{ opacity: 0 }}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5 }}
>
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
      </motion.div>
    </>
  )
}
