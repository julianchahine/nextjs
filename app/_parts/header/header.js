"use client";
import styles from './header.module.css'

import Image from 'next/image'

import mailImage from '../../_images/mail.svg'
import phoneImage from '../../_images/phone.svg'
import logoImage from '../../_images/logo-netalliance.webp'
import waterMarkImage from '../../_images/netalliance-watermark.png'


import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';
import Link from 'next/link'

import classNames from 'classnames';


export function useScrollToActive() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sectionOffset = 50; // Change this value to adjust the scroll distance

            setIsActive(scrollY >= sectionOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isActive;
};


export default function Header({condition1, condition2}) {
    const [menu, showMenu] = useState(false);
    const currentRoute = usePathname();
    const isActive = useScrollToActive();

    const combinedClasses = classNames(
        styles.headerx, // Always applied
        {
            [styles.headerNoScroll]: currentRoute == "/",
            [styles.header]: currentRoute != "/",
        }
    );

    const test = classNames(
        styles.headerx, // Always applied
        {
            [styles.logoInvert]: currentRoute == "/",
            [styles.noInvert]: currentRoute == "/" && isActive,
        }
    );

    return (
        <>
            <header className={combinedClasses}>
                <section className={isActive ? styles.topbarScroll : styles.topbar}>
                    <div className={styles.container}>
                        <div className={styles.topbarMail}>
                            <Link href="/" className={styles.topbarLink}><Image src={mailImage} className="invertWh" width="15" height="15" />www.company.eu</Link>
                        </div>
                        <div className={styles.topbarPhone}>
                            <Link href="/" className={styles.topbarLink}><Image src={phoneImage} className="invertWh" width="15" height="15" />06062 / 956 138</Link>
                        </div>
                    </div>
                </section>
                <section className={isActive ? styles.navigation + ' ' + styles.navigationScroll : styles.navigation}>
                    <div className={styles.container}>
                        <nav className={styles.navbar}>
                            <Link className={styles.brand} href="/"><Image src={logoImage} className={test + ' ' + styles.logo} width="211" height="40" alt="NETALLIANCE Logo" title="NETALLIANCE Logo" /></Link>
                            <label onClick={() => showMenu((prevMenu) => !prevMenu)} className={styles.navToggle}>
                                <span className={menu ? styles.burgerClose : ''}></span>
                                <span className={menu ? styles.burgerClose : ''}></span>
                                <span className={menu ? styles.burgerClose : ''}></span>
                            </label>
                            <div className={menu ? styles.wrapper + ' ' + styles.menuActive : styles.wrapper}>
                                <ul className={styles.menu}>
                                    <li className={styles.menuItem}><Link href="/" onClick={() => showMenu((prevMenu) => !prevMenu)} className={currentRoute === "/" ? styles.active : styles.menuLink}>Startseite</Link>
                                    </li>
                                    <li className={styles.menuItem}><Link href="/ueber-uns" onClick={() => showMenu((prevMenu) => !prevMenu)} className={currentRoute === "/ueber-uns" ? styles.active : styles.menuLink}>Über Uns</Link>
                                    </li>
                                    <li className={styles.menuItem}><Link href="/leistungen" onClick={() => showMenu((prevMenu) => !prevMenu)} className={currentRoute === "/leistungen" ? styles.active : styles.menuLink}>Leistungen</Link>
                                    </li>
                                    <li className={styles.menuItem}><Link href="/kontakt" onClick={() => showMenu((prevMenu) => !prevMenu)} className={currentRoute === "/kontakt" ? styles.active : styles.menuLink}>Kontakt</Link>
                                    </li>
                                    <li className={styles.menuItem}><Link href="/impressum" onClick={() => showMenu((prevMenu) => !prevMenu)} className={currentRoute === "/impressum" ? styles.active : styles.menuLink}>Impressum</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </section>
            </header>
        </>
    )
}
