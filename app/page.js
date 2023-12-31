import styles from './page.module.css'
import './globals.css'

import sliderImage from './_images/sliderImage.webp'
import circlesImage from './_images/circles.svg'
import webDevImage from './_images/webDev.svg'
import iMacsImage from './_images/imacs.webp'

import Link from 'next/link'
import Image from 'next/image'

import ValueBox from './_components/valuebox/valuebox'
import ServiceBox from './_components/servicebox/servicebox.js'

export default function Home() {
    return (
        <>
            <section className={styles.slider}>
                    <div className={styles.container}>
                        <div className={styles.sliderLeft}>
                            <h1 className={styles.title}>
                                Einzigartige Weblösungen
                            </h1>
                            <h2 className={styles.sliderDescription}>
                                Mit welchen wir Ihre Beliebtheit, Umsätze und Gewinne steigern.
                            </h2>
                            <h2 className={styles.sliderDescription}>
                                Gemeinsam mit unseren erfahrenen Experten verhelfen wir Ihnen zum digitalen Erfolg.
                            </h2>
                        </div>
                        <div className={styles.sliderRight}>
                            <Image loading="eager" src={sliderImage} className={styles.sliderImage} width="auto" height="auto" alt="" title="" />
                        </div>
                    </div>
                <Image src={circlesImage} className={styles.circlesImage} width="50" height="50" alt="" title="" />
                <Image src={circlesImage} className={styles.circlesImage} width="50" height="50" alt="" title="" />
            </section >

            {/************Get Offer**************
             ***********************************/}

            <section className={styles.getOffer}>
                <div className={styles.line}></div>
                <div className={styles.getOfferBg}>
                    A
                </div>
                <h2 className={styles.titel}>Kostenloses Angebot</h2>
                <p className={styles.description}>Bei notwendigen Nachfragen setzen wir uns nochmals mit Ihnen in Verbindung.</p>
                <div className={styles.wrapper}>
                    <form className={styles.inquiryForm}>
                        <div className={styles.inquiryFormDiv}>
                            <input type="text" placeholder="Vor- und Nachname" className={styles.formControl} id="name" name="name" required="" />
                        </div>
                        <div className={styles.inquiryFormDiv}>
                            <input type="text" placeholder="Firmenname" className={styles.formControl} id="name" name="name" required="" />
                        </div>
                        <div className={styles.inquiryFormDiv}>
                            <input type="text" placeholder="E-Mail" className={styles.formControl} id="name" name="name" required="" />
                        </div>
                        <div className={styles.inquiryFormDiv}>
                            <input type="text" placeholder="Telefon/Handy Nr." className={styles.formControl} id="name" name="name" required="" />
                        </div>
                        <div className={styles.inquiryFormDiv}>
                            <input type="text" placeholder="Leistung auswählen" className={styles.formControl} id="name" name="name" required="" />
                        </div>
                        <div className={styles.inquiryFormDiv}>
                            <textarea type="text" placeholder="Beschreiben Sie bitte Ihr Projekt!" rows="8" className={styles.formControl} id="name" name="name" required="" />
                        </div>
                    </form>
                </div>
            </section>

            {/************ Values**************
             ***********************************/}

                <section className={styles.companyValue}>
                    <div className={styles.container}>
                        <ValueBox titel="15+" description="Jahre Erfahrung" />
                        <ValueBox titel="21+" description="Abgeschlossene Projekte" />
                        <ValueBox titel="7" description="Entwickler & Designer" />
                        <ValueBox titel="100%" description="Zufriedene Kunden" />
                    </div>
                </section>

            {/************ ABOUT **************
             ***********************************/}

            <section className={styles.aboutUs + ' ' + 'container'}>
                <div className={styles.aboutUsBg}>
                    W
                </div>
                <div className={styles.aboutUsLeft}>
                    <h2 className="titleDark">Wir sind kreativ<br />und digital!</h2>
                    <p>
                        Wir von COMPANY sind ein IT-Dienstleister aus Erbach Odenwald und spezialisiert auf die
                        Entwicklung von einzigartigen Webseiten und Applikationen. Wir sind stolz darauf, qualitativ hochwertige
                        Lösungen zu liefern, die den Umsatz und Gewinn unserer Kunden maximieren. Unser Team bleibt stets auf dem
                        neuesten Stand und beobachtet die Entwicklungen neuer Technologien, so dass unsere Projekte stets
                        State-of-the-Art Technologies nutzen und den beliebtesten und erfolgreichsten Designtrends folgen
                        und dabei neue Maßstäbe setzen.
                        <br /><br />
                        Dadurch gestalten wir moderne und hochtechnologische Lösungen, die unsere Kunden von der
                        Konkurrenz abheben
                        und ihr Geschäftspotenzial voll ausschöpfen. Vertrauen Sie unserer Expertise und lassen Sie uns
                        gemeinsam
                        Ihren digitalen Erfolg verwirklichen.
                        <br /><br />
                        Als Partner begleiten wir Sie Seite an Seite und stehen Ihnen auch nach Abschluss der Projekte
                        stets für
                        alle Angelegenheiten, Fragen und Unternehmungen zur Verfügung.
                    </p>
                </div>
                <div className={styles.aboutUsRight}>
                    <ServiceBox titel="Webentwicklung" description="Professionelle Webentwicklung für moderne und ansprechende Online-Lösungen, maßgeschneidert für Ihr Unternehmen, mit und ohne CMS." image={webDevImage} alt="Alt" title="Titel" />
                    <ServiceBox titel="Online-Shops" description="Effiziente Online-Shop Entwicklung für erfolgreichen E-Commerce mit kundenorientierten Funktionen und ansprechendem Design." image={webDevImage} alt="Alt" title="Titel" />
                    <ServiceBox titel="Landing Pages" description="Kreative Landing Page Gestaltung, um Besucher zu überzeugen und Ihre Conversion-Raten zu steigern." image={webDevImage} alt="Alt" title="Titel" />
                    <ServiceBox titel="Grafik- und Printdesign" description="Maßgeschneidertes Grafik- und Printdesign, das Ihre Marke/Firma zum Strahlen bringt und Aufmerksamkeit erzeugt." image={webDevImage} alt="Alt" title="Titel" />
                </div>
            </section>


            {/************ CONSULT **************
             ***********************************/}

            <section className={styles.consultUs + ' ' + 'fwContainer'}>
                <div className="container">
                    <div className={styles.consultUsLeft}>
                        <h2 className={styles.consultTitle}>Vereinbaren Sie eine<br />kostenlose Beratung.</h2>
                        <p className={styles.consultDescription}>
                            Erhalten Sie eine kostenlose Beratung und lassen Sie uns gemeinsam über Ihre Anforderungen und Ziele sprechen.
                        </p>
                        <p className={styles.consultDescription}>
                            COMPANY unterstützt Sie gerne dabei, die beste Lösung für Ihr Unternehmen zu finden.
                        </p>
                    </div>
                    <div className={styles.consultUsRight}>
                        <Image src={iMacsImage} width="450" height="310" className={styles.consultImage} />
                    </div>
                </div>
            </section>


            {/************ STEPS **************
             ***********************************/}

            <section className="container">
                <div class={styles.steps}>
                    <h3 className="titleDark">
                        Der Ablauf im Überblick
                    </h3>
                    <p class="description">
                        Eine kurze Beschreibung der Projektabläufe:
                    </p>
                    <div className={styles.wrapper}>
                        <div className={styles.box}>
                            <p className={styles.boxP}>
                                <span className={styles.boxBg}>01</span>
                                Informationsbeschaffung
                            </p>
                            <span className={styles.description}>
                                Wir benötigen ein gutes Verständnis Ihrer Unternehmensziele.
                            </span>
                        </div>
                        <div className={styles.box}>
                            <p className={styles.boxP}>
                                <span className={styles.boxBg}>02</span>
                                Planung
                            </p>
                            <span className={styles.description}>
                                Wir werden Ihnen dabei helfen, zu entscheiden, welche Technologien implementiert werden
                                sollten.
                            </span>
                        </div>
                        <div className={styles.box}>
                            <p className={styles.boxP}>
                                <span className={styles.boxBg}>03</span>
                                Design
                            </p>
                            <span className={styles.description}>
                                Es ist an der Zeit, das Aussehen und das Gefühl Ihrer Website oder App festzulegen.
                            </span>
                        </div>
                        <div className={styles.box}>
                            <p className={styles.boxP}>
                                <span className={styles.boxBg}>04</span>
                                Entwicklung
                            </p>
                            <span className={styles.description}>
                                Wir nutzen State-of-the-Art Technologien, um den neusten Standards gerecht zu werden.
                            </span>
                        </div>
                        <div className={styles.box}>
                            <p className={styles.boxP}>
                                <span className={styles.boxBg}>05</span>
                                Testing &amp; Release
                            </p>
                            <span className={styles.description}>
                                Testen der vollständigen Funktionalität von Formularen, Skripten usw.
                            </span>
                        </div>

                    </div>
                </div>
            </section>



            {/************ Costs **************
             ***********************************/}

            <section className={styles.fwContainer + ' ' + styles.costsBg}>
                <div className={'container' + ' ' + styles.costs}>
                    <h2 className="titleDark">
                        Welche Kosten?
                    </h2>
                    <p className={styles.description}>
                        Hier finden Sie eine Übersicht über die durchschnittlichen Richtpreise verschiedenster Projekte.
                        Preise können pro Projekt variieren.
                    </p>
                    <div className={styles.costsContainer}>
                        <div className={styles.costsBox}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" version="1.1" id="Layer_1" viewBox="0 0 512 512">
                                <path style={{ fill: "#464655" }} d="M494.345,39.724H17.655C7.904,39.724,0,47.629,0,57.379v282.483h512V57.379  C512,47.629,504.096,39.724,494.345,39.724z M485.517,119.172v194.207H26.483V119.172V66.207h459.034V119.172z"></path>
                                <path style={{ fill: "#464655" }} d="M26.483,313.379h459.034V119.172H26.483V313.379z M388.414,163.31v-8.828  c0-4.875,3.953-8.828,8.828-8.828h52.966c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759c0,4.875-3.953,8.828-8.828,8.828h-52.966  c-4.875,0-8.828-3.953-8.828-8.828V163.31z M291.31,163.31v-8.828c0-4.875,3.953-8.828,8.828-8.828h52.966  c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759c0,4.875-3.953,8.828-8.828,8.828h-52.966c-4.875,0-8.828-3.953-8.828-8.828V163.31z   M194.207,163.31v-8.828c0-4.875,3.953-8.828,8.828-8.828H256c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759  c0,4.875-3.953,8.828-8.828,8.828h-52.966c-4.875,0-8.828-3.953-8.828-8.828V163.31z M52.966,163.31v-8.828  c0-4.875,3.953-8.828,8.828-8.828h97.103c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759c0,4.875-3.953,8.828-8.828,8.828H61.793  c-4.875,0-8.828-3.953-8.828-8.828V163.31z"></path>
                                <path style={{ fill: "#464655" }} d="M0,375.172c0,9.75,7.904,17.655,17.655,17.655h167.724h141.241h167.724  c9.751,0,17.655-7.905,17.655-17.655v-35.31H0V375.172z M256,353.103c7.313,0,13.241,5.929,13.241,13.241  s-5.929,13.241-13.241,13.241c-7.313,0-13.241-5.929-13.241-13.241S248.687,353.103,256,353.103z"></path>
                                <polygon style={{ fill: "#AFBBD0" }} points="177.655,454.621 334.345,454.621 328.828,410.483 183.172,410.483 "></polygon>
                                <path style={{ fill: "#BEC8DC" }} d="M176.552,454.621c-4.875,0-8.828,3.953-8.828,8.828s3.953,8.828,8.828,8.828h158.897  c4.875,0,8.828-3.953,8.828-8.828s-3.953-8.828-8.828-8.828h-1.103h-156.69H176.552z"></path>
                                <polygon style={{ fill: "#96A5B9" }} points="183.172,410.483 328.828,410.483 326.621,392.828 185.379,392.828 "></polygon>
                                <path style={{ fill: "#FF6469" }} d="M26.483,119.172h459.034V66.207H26.483V119.172z M423.724,83.862h35.31  c4.875,0,8.828,3.953,8.828,8.828c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828  C414.897,87.815,418.849,83.862,423.724,83.862z M353.103,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828  c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828C344.276,87.815,348.228,83.862,353.103,83.862z   M282.483,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828  C273.655,87.815,277.608,83.862,282.483,83.862z M211.862,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828  c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828C203.034,87.815,206.987,83.862,211.862,83.862z   M141.241,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828  C132.414,87.815,136.366,83.862,141.241,83.862z M52.966,83.862h52.966c4.875,0,8.828,3.953,8.828,8.828  c0,4.875-3.953,8.828-8.828,8.828H52.966c-4.875,0-8.828-3.953-8.828-8.828C44.138,87.815,48.09,83.862,52.966,83.862z"></path>
                                <path style={{ fill: "#FFDC69" }} d="M52.966,101.517h52.966c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828H52.966  c-4.875,0-8.828,3.953-8.828,8.828C44.138,97.565,48.09,101.517,52.966,101.517z"></path>
                                <g>
                                    <path style={{ fill: "#D2555F" }} d="M141.241,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C132.414,97.565,136.366,101.517,141.241,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M211.862,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C203.034,97.565,206.987,101.517,211.862,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M282.483,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C273.655,97.565,277.608,101.517,282.483,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M353.103,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C344.276,97.565,348.228,101.517,353.103,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M423.724,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C414.897,97.565,418.849,101.517,423.724,101.517z"></path>
                                </g>
                                <g>
                                    <path style={{ fill: "#DEE3ED" }} d="M61.793,286.897h97.103c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   H61.793c-4.875,0-8.828-3.953-8.828-8.828v114.759C52.966,282.944,56.918,286.897,61.793,286.897z"></path>
                                    <path style={{ fill: "#DEE3ED" }} d="M203.034,286.897H256c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   h-52.966c-4.875,0-8.828-3.953-8.828-8.828v114.759C194.207,282.944,198.159,286.897,203.034,286.897z"></path>
                                    <path style={{ fill: "#DEE3ED" }} d="M300.138,286.897h52.966c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   h-52.966c-4.875,0-8.828-3.953-8.828-8.828v114.759C291.31,282.944,295.263,286.897,300.138,286.897z"></path>
                                    <path style={{ fill: "#DEE3ED" }} d="M397.241,286.897h52.966c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   h-52.966c-4.875,0-8.828-3.953-8.828-8.828v114.759C388.414,282.944,392.366,286.897,397.241,286.897z"></path>
                                </g>
                                <path style={{ fill: "#FFDC69" }} d="M61.793,172.138h97.103c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  H61.793c-4.875,0-8.828,3.953-8.828,8.828v8.828C52.966,168.185,56.918,172.138,61.793,172.138z"></path>
                                <path style={{ fill: "#B4E173" }} d="M203.034,172.138H256c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  h-52.966c-4.875,0-8.828,3.953-8.828,8.828v8.828C194.207,168.185,198.159,172.138,203.034,172.138z"></path>
                                <path style={{ fill: "#FF969B" }} d="M300.138,172.138h52.966c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  h-52.966c-4.875,0-8.828,3.953-8.828,8.828v8.828C291.31,168.185,295.263,172.138,300.138,172.138z"></path>
                                <path style={{ fill: "#A0DCF0" }} d="M397.241,172.138h52.966c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  h-52.966c-4.875,0-8.828,3.953-8.828,8.828v8.828C388.414,168.185,392.366,172.138,397.241,172.138z"></path>
                                <circle style={{ fill: "#96A5B9" }} cx="256" cy="366.345" r="13.241"></circle>
                            </svg>
                            <p className={styles.costsTitle}>
                                Landing Page
                            </p>
                            <span className={styles.costsPrice}>
                                649 € - 1000 €
                            </span>
                        </div>
                        <div className={styles.costsBox}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" version="1.1" id="Layer_1" viewBox="0 0 512 512">
                                <path style={{ fill: "#464655" }} d="M494.345,39.724H17.655C7.904,39.724,0,47.629,0,57.379v282.483h512V57.379  C512,47.629,504.096,39.724,494.345,39.724z M485.517,119.172v194.207H26.483V119.172V66.207h459.034V119.172z"></path>
                                <path style={{ fill: "#464655" }} d="M26.483,313.379h459.034V119.172H26.483V313.379z M388.414,163.31v-8.828  c0-4.875,3.953-8.828,8.828-8.828h52.966c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759c0,4.875-3.953,8.828-8.828,8.828h-52.966  c-4.875,0-8.828-3.953-8.828-8.828V163.31z M291.31,163.31v-8.828c0-4.875,3.953-8.828,8.828-8.828h52.966  c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759c0,4.875-3.953,8.828-8.828,8.828h-52.966c-4.875,0-8.828-3.953-8.828-8.828V163.31z   M194.207,163.31v-8.828c0-4.875,3.953-8.828,8.828-8.828H256c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759  c0,4.875-3.953,8.828-8.828,8.828h-52.966c-4.875,0-8.828-3.953-8.828-8.828V163.31z M52.966,163.31v-8.828  c0-4.875,3.953-8.828,8.828-8.828h97.103c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759c0,4.875-3.953,8.828-8.828,8.828H61.793  c-4.875,0-8.828-3.953-8.828-8.828V163.31z"></path>
                                <path style={{ fill: "#464655" }} d="M0,375.172c0,9.75,7.904,17.655,17.655,17.655h167.724h141.241h167.724  c9.751,0,17.655-7.905,17.655-17.655v-35.31H0V375.172z M256,353.103c7.313,0,13.241,5.929,13.241,13.241  s-5.929,13.241-13.241,13.241c-7.313,0-13.241-5.929-13.241-13.241S248.687,353.103,256,353.103z"></path>
                                <polygon style={{ fill: "#AFBBD0" }} points="177.655,454.621 334.345,454.621 328.828,410.483 183.172,410.483 "></polygon>
                                <path style={{ fill: "#BEC8DC" }} d="M176.552,454.621c-4.875,0-8.828,3.953-8.828,8.828s3.953,8.828,8.828,8.828h158.897  c4.875,0,8.828-3.953,8.828-8.828s-3.953-8.828-8.828-8.828h-1.103h-156.69H176.552z"></path>
                                <polygon style={{ fill: "#96A5B9" }} points="183.172,410.483 328.828,410.483 326.621,392.828 185.379,392.828 "></polygon>
                                <path style={{ fill: "#FF6469" }} d="M26.483,119.172h459.034V66.207H26.483V119.172z M423.724,83.862h35.31  c4.875,0,8.828,3.953,8.828,8.828c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828  C414.897,87.815,418.849,83.862,423.724,83.862z M353.103,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828  c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828C344.276,87.815,348.228,83.862,353.103,83.862z   M282.483,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828  C273.655,87.815,277.608,83.862,282.483,83.862z M211.862,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828  c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828C203.034,87.815,206.987,83.862,211.862,83.862z   M141.241,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828  C132.414,87.815,136.366,83.862,141.241,83.862z M52.966,83.862h52.966c4.875,0,8.828,3.953,8.828,8.828  c0,4.875-3.953,8.828-8.828,8.828H52.966c-4.875,0-8.828-3.953-8.828-8.828C44.138,87.815,48.09,83.862,52.966,83.862z"></path>
                                <path style={{ fill: "#FFDC69" }} d="M52.966,101.517h52.966c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828H52.966  c-4.875,0-8.828,3.953-8.828,8.828C44.138,97.565,48.09,101.517,52.966,101.517z"></path>
                                <g>
                                    <path style={{ fill: "#D2555F" }} d="M141.241,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C132.414,97.565,136.366,101.517,141.241,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M211.862,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C203.034,97.565,206.987,101.517,211.862,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M282.483,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C273.655,97.565,277.608,101.517,282.483,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M353.103,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C344.276,97.565,348.228,101.517,353.103,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M423.724,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C414.897,97.565,418.849,101.517,423.724,101.517z"></path>
                                </g>
                                <g>
                                    <path style={{ fill: "#DEE3ED" }} d="M61.793,286.897h97.103c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   H61.793c-4.875,0-8.828-3.953-8.828-8.828v114.759C52.966,282.944,56.918,286.897,61.793,286.897z"></path>
                                    <path style={{ fill: "#DEE3ED" }} d="M203.034,286.897H256c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   h-52.966c-4.875,0-8.828-3.953-8.828-8.828v114.759C194.207,282.944,198.159,286.897,203.034,286.897z"></path>
                                    <path style={{ fill: "#DEE3ED" }} d="M300.138,286.897h52.966c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   h-52.966c-4.875,0-8.828-3.953-8.828-8.828v114.759C291.31,282.944,295.263,286.897,300.138,286.897z"></path>
                                    <path style={{ fill: "#DEE3ED" }} d="M397.241,286.897h52.966c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   h-52.966c-4.875,0-8.828-3.953-8.828-8.828v114.759C388.414,282.944,392.366,286.897,397.241,286.897z"></path>
                                </g>
                                <path style={{ fill: "#FFDC69" }} d="M61.793,172.138h97.103c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  H61.793c-4.875,0-8.828,3.953-8.828,8.828v8.828C52.966,168.185,56.918,172.138,61.793,172.138z"></path>
                                <path style={{ fill: "#B4E173" }} d="M203.034,172.138H256c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  h-52.966c-4.875,0-8.828,3.953-8.828,8.828v8.828C194.207,168.185,198.159,172.138,203.034,172.138z"></path>
                                <path style={{ fill: "#FF969B" }} d="M300.138,172.138h52.966c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  h-52.966c-4.875,0-8.828,3.953-8.828,8.828v8.828C291.31,168.185,295.263,172.138,300.138,172.138z"></path>
                                <path style={{ fill: "#A0DCF0" }} d="M397.241,172.138h52.966c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  h-52.966c-4.875,0-8.828,3.953-8.828,8.828v8.828C388.414,168.185,392.366,172.138,397.241,172.138z"></path>
                                <circle style={{ fill: "#96A5B9" }} cx="256" cy="366.345" r="13.241"></circle>
                            </svg>
                            <p className={styles.costsTitle}>
                                Business Website
                            </p>
                            <span className={styles.costsPrice}>
                                1000 € - 3000 € +
                            </span>
                        </div>
                        <div className={styles.costsBox}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" version="1.1" id="Layer_1" viewBox="0 0 512 512">
                                <path style={{ fill: "#464655" }} d="M494.345,39.724H17.655C7.904,39.724,0,47.629,0,57.379v282.483h512V57.379  C512,47.629,504.096,39.724,494.345,39.724z M485.517,119.172v194.207H26.483V119.172V66.207h459.034V119.172z"></path>
                                <path style={{ fill: "#464655" }} d="M26.483,313.379h459.034V119.172H26.483V313.379z M388.414,163.31v-8.828  c0-4.875,3.953-8.828,8.828-8.828h52.966c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759c0,4.875-3.953,8.828-8.828,8.828h-52.966  c-4.875,0-8.828-3.953-8.828-8.828V163.31z M291.31,163.31v-8.828c0-4.875,3.953-8.828,8.828-8.828h52.966  c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759c0,4.875-3.953,8.828-8.828,8.828h-52.966c-4.875,0-8.828-3.953-8.828-8.828V163.31z   M194.207,163.31v-8.828c0-4.875,3.953-8.828,8.828-8.828H256c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759  c0,4.875-3.953,8.828-8.828,8.828h-52.966c-4.875,0-8.828-3.953-8.828-8.828V163.31z M52.966,163.31v-8.828  c0-4.875,3.953-8.828,8.828-8.828h97.103c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759c0,4.875-3.953,8.828-8.828,8.828H61.793  c-4.875,0-8.828-3.953-8.828-8.828V163.31z"></path>
                                <path style={{ fill: "#464655" }} d="M0,375.172c0,9.75,7.904,17.655,17.655,17.655h167.724h141.241h167.724  c9.751,0,17.655-7.905,17.655-17.655v-35.31H0V375.172z M256,353.103c7.313,0,13.241,5.929,13.241,13.241  s-5.929,13.241-13.241,13.241c-7.313,0-13.241-5.929-13.241-13.241S248.687,353.103,256,353.103z"></path>
                                <polygon style={{ fill: "#AFBBD0" }} points="177.655,454.621 334.345,454.621 328.828,410.483 183.172,410.483 "></polygon>
                                <path style={{ fill: "#BEC8DC" }} d="M176.552,454.621c-4.875,0-8.828,3.953-8.828,8.828s3.953,8.828,8.828,8.828h158.897  c4.875,0,8.828-3.953,8.828-8.828s-3.953-8.828-8.828-8.828h-1.103h-156.69H176.552z"></path>
                                <polygon style={{ fill: "#96A5B9" }} points="183.172,410.483 328.828,410.483 326.621,392.828 185.379,392.828 "></polygon>
                                <path style={{ fill: "#FF6469" }} d="M26.483,119.172h459.034V66.207H26.483V119.172z M423.724,83.862h35.31  c4.875,0,8.828,3.953,8.828,8.828c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828  C414.897,87.815,418.849,83.862,423.724,83.862z M353.103,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828  c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828C344.276,87.815,348.228,83.862,353.103,83.862z   M282.483,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828  C273.655,87.815,277.608,83.862,282.483,83.862z M211.862,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828  c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828C203.034,87.815,206.987,83.862,211.862,83.862z   M141.241,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828  C132.414,87.815,136.366,83.862,141.241,83.862z M52.966,83.862h52.966c4.875,0,8.828,3.953,8.828,8.828  c0,4.875-3.953,8.828-8.828,8.828H52.966c-4.875,0-8.828-3.953-8.828-8.828C44.138,87.815,48.09,83.862,52.966,83.862z"></path>
                                <path style={{ fill: "#FFDC69" }} d="M52.966,101.517h52.966c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828H52.966  c-4.875,0-8.828,3.953-8.828,8.828C44.138,97.565,48.09,101.517,52.966,101.517z"></path>
                                <g>
                                    <path style={{ fill: "#D2555F" }} d="M141.241,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C132.414,97.565,136.366,101.517,141.241,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M211.862,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C203.034,97.565,206.987,101.517,211.862,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M282.483,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C273.655,97.565,277.608,101.517,282.483,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M353.103,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C344.276,97.565,348.228,101.517,353.103,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M423.724,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C414.897,97.565,418.849,101.517,423.724,101.517z"></path>
                                </g>
                                <g>
                                    <path style={{ fill: "#DEE3ED" }} d="M61.793,286.897h97.103c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   H61.793c-4.875,0-8.828-3.953-8.828-8.828v114.759C52.966,282.944,56.918,286.897,61.793,286.897z"></path>
                                    <path style={{ fill: "#DEE3ED" }} d="M203.034,286.897H256c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   h-52.966c-4.875,0-8.828-3.953-8.828-8.828v114.759C194.207,282.944,198.159,286.897,203.034,286.897z"></path>
                                    <path style={{ fill: "#DEE3ED" }} d="M300.138,286.897h52.966c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   h-52.966c-4.875,0-8.828-3.953-8.828-8.828v114.759C291.31,282.944,295.263,286.897,300.138,286.897z"></path>
                                    <path style={{ fill: "#DEE3ED" }} d="M397.241,286.897h52.966c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   h-52.966c-4.875,0-8.828-3.953-8.828-8.828v114.759C388.414,282.944,392.366,286.897,397.241,286.897z"></path>
                                </g>
                                <path style={{ fill: "#FFDC69" }} d="M61.793,172.138h97.103c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  H61.793c-4.875,0-8.828,3.953-8.828,8.828v8.828C52.966,168.185,56.918,172.138,61.793,172.138z"></path>
                                <path style={{ fill: "#B4E173" }} d="M203.034,172.138H256c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  h-52.966c-4.875,0-8.828,3.953-8.828,8.828v8.828C194.207,168.185,198.159,172.138,203.034,172.138z"></path>
                                <path style={{ fill: "#FF969B" }} d="M300.138,172.138h52.966c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  h-52.966c-4.875,0-8.828,3.953-8.828,8.828v8.828C291.31,168.185,295.263,172.138,300.138,172.138z"></path>
                                <path style={{ fill: "#A0DCF0" }} d="M397.241,172.138h52.966c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  h-52.966c-4.875,0-8.828,3.953-8.828,8.828v8.828C388.414,168.185,392.366,172.138,397.241,172.138z"></path>
                                <circle style={{ fill: "#96A5B9" }} cx="256" cy="366.345" r="13.241"></circle>
                            </svg>
                            <p className={styles.costsTitle}>
                                Online Shop
                            </p>
                            <span className={styles.costsPrice}>
                                1000 € - 3000 € +
                            </span>
                        </div>
                        <div className={styles.costsBox}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" version="1.1" id="Layer_1" viewBox="0 0 512 512">
                                <path style={{ fill: "#464655" }} d="M494.345,39.724H17.655C7.904,39.724,0,47.629,0,57.379v282.483h512V57.379  C512,47.629,504.096,39.724,494.345,39.724z M485.517,119.172v194.207H26.483V119.172V66.207h459.034V119.172z"></path>
                                <path style={{ fill: "#464655" }} d="M26.483,313.379h459.034V119.172H26.483V313.379z M388.414,163.31v-8.828  c0-4.875,3.953-8.828,8.828-8.828h52.966c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759c0,4.875-3.953,8.828-8.828,8.828h-52.966  c-4.875,0-8.828-3.953-8.828-8.828V163.31z M291.31,163.31v-8.828c0-4.875,3.953-8.828,8.828-8.828h52.966  c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759c0,4.875-3.953,8.828-8.828,8.828h-52.966c-4.875,0-8.828-3.953-8.828-8.828V163.31z   M194.207,163.31v-8.828c0-4.875,3.953-8.828,8.828-8.828H256c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759  c0,4.875-3.953,8.828-8.828,8.828h-52.966c-4.875,0-8.828-3.953-8.828-8.828V163.31z M52.966,163.31v-8.828  c0-4.875,3.953-8.828,8.828-8.828h97.103c4.875,0,8.828,3.953,8.828,8.828v8.828v114.759c0,4.875-3.953,8.828-8.828,8.828H61.793  c-4.875,0-8.828-3.953-8.828-8.828V163.31z"></path>
                                <path style={{ fill: "#464655" }} d="M0,375.172c0,9.75,7.904,17.655,17.655,17.655h167.724h141.241h167.724  c9.751,0,17.655-7.905,17.655-17.655v-35.31H0V375.172z M256,353.103c7.313,0,13.241,5.929,13.241,13.241  s-5.929,13.241-13.241,13.241c-7.313,0-13.241-5.929-13.241-13.241S248.687,353.103,256,353.103z"></path>
                                <polygon style={{ fill: "#AFBBD0" }} points="177.655,454.621 334.345,454.621 328.828,410.483 183.172,410.483 "></polygon>
                                <path style={{ fill: "#BEC8DC" }} d="M176.552,454.621c-4.875,0-8.828,3.953-8.828,8.828s3.953,8.828,8.828,8.828h158.897  c4.875,0,8.828-3.953,8.828-8.828s-3.953-8.828-8.828-8.828h-1.103h-156.69H176.552z"></path>
                                <polygon style={{ fill: "#96A5B9" }} points="183.172,410.483 328.828,410.483 326.621,392.828 185.379,392.828 "></polygon>
                                <path style={{ fill: "#FF6469" }} d="M26.483,119.172h459.034V66.207H26.483V119.172z M423.724,83.862h35.31  c4.875,0,8.828,3.953,8.828,8.828c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828  C414.897,87.815,418.849,83.862,423.724,83.862z M353.103,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828  c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828C344.276,87.815,348.228,83.862,353.103,83.862z   M282.483,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828  C273.655,87.815,277.608,83.862,282.483,83.862z M211.862,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828  c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828C203.034,87.815,206.987,83.862,211.862,83.862z   M141.241,83.862h35.31c4.875,0,8.828,3.953,8.828,8.828c0,4.875-3.953,8.828-8.828,8.828h-35.31c-4.875,0-8.828-3.953-8.828-8.828  C132.414,87.815,136.366,83.862,141.241,83.862z M52.966,83.862h52.966c4.875,0,8.828,3.953,8.828,8.828  c0,4.875-3.953,8.828-8.828,8.828H52.966c-4.875,0-8.828-3.953-8.828-8.828C44.138,87.815,48.09,83.862,52.966,83.862z"></path>
                                <path style={{ fill: "#FFDC69" }} d="M52.966,101.517h52.966c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828H52.966  c-4.875,0-8.828,3.953-8.828,8.828C44.138,97.565,48.09,101.517,52.966,101.517z"></path>
                                <g>
                                    <path style={{ fill: "#D2555F" }} d="M141.241,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C132.414,97.565,136.366,101.517,141.241,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M211.862,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C203.034,97.565,206.987,101.517,211.862,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M282.483,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C273.655,97.565,277.608,101.517,282.483,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M353.103,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C344.276,97.565,348.228,101.517,353.103,101.517z"></path>
                                    <path style={{ fill: "#D2555F" }} d="M423.724,101.517h35.31c4.875,0,8.828-3.953,8.828-8.828c0-4.875-3.953-8.828-8.828-8.828h-35.31   c-4.875,0-8.828,3.953-8.828,8.828C414.897,97.565,418.849,101.517,423.724,101.517z"></path>
                                </g>
                                <g>
                                    <path style={{ fill: "#DEE3ED" }} d="M61.793,286.897h97.103c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   H61.793c-4.875,0-8.828-3.953-8.828-8.828v114.759C52.966,282.944,56.918,286.897,61.793,286.897z"></path>
                                    <path style={{ fill: "#DEE3ED" }} d="M203.034,286.897H256c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   h-52.966c-4.875,0-8.828-3.953-8.828-8.828v114.759C194.207,282.944,198.159,286.897,203.034,286.897z"></path>
                                    <path style={{ fill: "#DEE3ED" }} d="M300.138,286.897h52.966c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   h-52.966c-4.875,0-8.828-3.953-8.828-8.828v114.759C291.31,282.944,295.263,286.897,300.138,286.897z"></path>
                                    <path style={{ fill: "#DEE3ED" }} d="M397.241,286.897h52.966c4.875,0,8.828-3.953,8.828-8.828V163.31c0,4.875-3.953,8.828-8.828,8.828   h-52.966c-4.875,0-8.828-3.953-8.828-8.828v114.759C388.414,282.944,392.366,286.897,397.241,286.897z"></path>
                                </g>
                                <path style={{ fill: "#FFDC69" }} d="M61.793,172.138h97.103c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  H61.793c-4.875,0-8.828,3.953-8.828,8.828v8.828C52.966,168.185,56.918,172.138,61.793,172.138z"></path>
                                <path style={{ fill: "#B4E173" }} d="M203.034,172.138H256c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  h-52.966c-4.875,0-8.828,3.953-8.828,8.828v8.828C194.207,168.185,198.159,172.138,203.034,172.138z"></path>
                                <path style={{ fill: "#FF969B" }} d="M300.138,172.138h52.966c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  h-52.966c-4.875,0-8.828,3.953-8.828,8.828v8.828C291.31,168.185,295.263,172.138,300.138,172.138z"></path>
                                <path style={{ fill: "#A0DCF0" }} d="M397.241,172.138h52.966c4.875,0,8.828-3.953,8.828-8.828v-8.828c0-4.875-3.953-8.828-8.828-8.828  h-52.966c-4.875,0-8.828,3.953-8.828,8.828v8.828C388.414,168.185,392.366,172.138,397.241,172.138z"></path>
                                <circle style={{ fill: "#96A5B9" }} cx="256" cy="366.345" r="13.241"></circle>
                            </svg>
                            <p className={styles.costsTitle}>
                                Mobile / Web App
                            </p>
                            <span className={styles.costsPrice}>
                                Auf Anfrage
                            </span>
                        </div>
                    </div>
                </div>
            </section>


            {/************ Questions **************
             ***********************************/}

            <section className={styles.getOffer + ' ' + styles.mt + ' ' + styles.questions}>
                <div className={styles.line}></div>
                <div className={styles.getOfferBg}>
                    F
                </div>
                <h2 className={styles.titel}>Offene Fragen?</h2>
                <p className={styles.description}>Senden Sie uns eine Nachricht!<br />Gerne können Sie uns auch jeder Zeit über unseren Live Chat erreichen!</p>
                <div className={styles.wrapper}>
                    <form className={styles.inquiryForm}>
                        <div className={styles.inquiryFormDiv}>
                            <input type="text" placeholder="Vor- und Nachname" className={styles.formControl} id="name" name="name" required="" />
                        </div>
                        <div className={styles.inquiryFormDiv}>
                            <input type="text" placeholder="Firmenname" className={styles.formControl} id="name" name="name" required="" />
                        </div>
                        <div className={styles.inquiryFormDiv}>
                            <input type="text" placeholder="E-Mail" className={styles.formControl} id="name" name="name" required="" />
                        </div>
                        <div className={styles.inquiryFormDiv}>
                            <input type="text" placeholder="Telefon/Handy Nr." className={styles.formControl} id="name" name="name" required="" />
                        </div>
                        <div className={styles.inquiryFormDiv}>
                            <input type="text" placeholder="Leistung auswählen" className={styles.formControl} id="name" name="name" required="" />
                        </div>
                        <div className={styles.inquiryFormDiv}>
                            <textarea type="text" placeholder="Beschreiben Sie bitte Ihr Projekt!" rows="8" className={styles.formControl} id="name" name="name" required="" />
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}
