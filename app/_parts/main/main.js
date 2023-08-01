"use client";
import styles from './main.module.css'

import { usePathname } from 'next/navigation'

export default function Main({content}) {

    const currentRoute = usePathname();

    return (
        <>
            <main className={currentRoute === "/" ? styles.mainStart : styles.main}>
               
                    {content}
               
            </main>
        </>
    )
}
