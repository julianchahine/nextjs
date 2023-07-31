"use client";
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

export default function Leistungen() {
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
      </motion.div>
    </>
  )
}
