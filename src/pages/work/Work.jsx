import React from 'react'
import styles from './styles.module.scss'
import Navbar from '../../components/Navbar'
import Social from '../../components/Social'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Work() {
  const { t } = useTranslation()

  return (
    <>
    <Navbar />
    <Social />
    <section className={styles.container}>
        <div style={{textAlign: 'center'}}>
            <h1>
                MY BEST PROJECTS
            </h1>
        </div>
        <div className={styles.project}>
            <img src="/images/projects/breatheshoes.png" alt="breathe shoes website" className={styles.siteImage}/>
            <div className={styles.boxInfo}>
                <h2>
                    Breathe Shoes
                </h2>
                <div className={styles.images}>
                    <img src="/icons/django.svg" alt="django icon" />
                    <img src="/icons/react.svg" alt="react icon" />
                    <img src="/icons/docker.svg" alt="docker icon" />
                </div>
                <p>
                {t("Breathe Shoes is a fictional E-commerce, it implements payment through Pagseguro and Paypal in Sandbox mode.")}
                </p>
                <div className={styles.links}>
                    <a href="https://github.com/GabrielSouzaCosta/shoe-shop" target='_blank'>
                        <img src="/icons/github.png" alt="" width='60px' />
                    </a>
                    <div className={styles.detailsButton}>
                        <Link to='/breathe-shoes' >
                            {t("MORE DETAILS")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.project}>
            <img src="/images/projects/heavenbakery.png" alt="breathe shoes website" className={styles.siteImage}/>
            <div className={styles.boxInfo}>
                <h2>
                    Heaven Bakery
                </h2>
                <div className={styles.images}>
                    <img src="/icons/django.svg" alt="django icon" />
                    <img src="/icons/react.svg" alt="react icon" />
                </div>
                <p>
                {t("It's a fictional bakery shop, the owner for example, can register your products and put it to sale. The payment is done by")} <strong>Stripe</strong>.
                </p>
                <div className={styles.links}>
                    <a href="https://github.com/GabrielSouzaCosta/ecommerce-bakery-django-react" target='_blank'>
                        <img src="/icons/github.png" alt="" width='50px' />
                    </a>
                    <div className={styles.detailsButton}>
                        <Link to='/heaven-bakery' >
                            {t("MORE DETAILS")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.project}>
            <img src="/images/projects/salveumpet.png" alt="breathe shoes website" className={styles.siteImage}/>
            <div className={styles.boxInfo}>
                <h2>
                    Salve um Pet
                </h2>
                <div className={styles.images}>
                    <img src="/icons/flask.png" alt="flask icon" style={{filter: 'invert(1)'}} />
                    <img src="/icons/react.svg" alt="react icon" />
                </div>
                <p>
                {t("Save a Pet is a website for donating cats and dogs")}.
                </p>
                <div className={styles.links}>
                    <a href="https://github.com/GabrielSouzaCosta/SalveUmPet-React-Flask" target='_blank'>
                        <img src="/icons/github.png" width='50px' alt="" />
                    </a>
                    <div className={styles.detailsButton}>
                        <Link to='/save-a-pet' >
                            {t("MORE DETAILS")}
                        </Link>
                    </div>
                </div>
            </div>
            <img src="/images/projects/salveumpet.png" alt="breathe shoes website" className={styles.siteImage}/>
        </div>
        <div className={styles.project}>
            <img src="/images/projects/animehunter.png" alt="breathe shoes website" className={styles.siteImage}/>
            <div className={styles.boxInfo}>
                <h2>
                    Anime Hunter
                </h2>
                <div className={styles.images}>
                    <img src="/icons/django.svg" alt="django icon" />
                </div>
                <p>
                {t("Anime Watchlist Manager: it retrieves animes from an unofficial MyAnimeList API and it's possible to favorite and/or add the anime to your watchlist.")} 
                </p>
                <div className={styles.links}>
                    <a href="https://github.com/GabrielSouzaCosta/anime_hunter" target='_blank'>
                        <img src="/icons/github.png" width='50px' alt="" />
                    </a>
                    <div className={styles.detailsButton}>
                        <Link to='/anime-hunter' >
                            {t("MORE DETAILS")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.project}>
            <img src="/images/projects/excelfiller.png" alt="breathe shoes website" className={styles.siteImage}/>
            <div className={styles.boxInfo}>
                <h2>
                    Excel Filler
                </h2>
                <div className={styles.images}>
                    <img src="/icons/flask.png" alt="flask icon" style={{filter: 'invert(1)'}} />
                    <img src="/icons/react.svg" alt="react icon" />
                </div>
                <p>
                {t("ExcelFiller was created in order to fasten the creation of spreadsheets that need to be filled with many repetitive data.")}.
                </p>
                <div className={styles.links}> 
                    <a href="https://github.com/GabrielSouzaCosta/ExcelFiller" target='_blank'>
                        <img src="/icons/github.png" width='50px' alt="" />
                    </a>
                    <div className={styles.detailsButton}>
                        <Link to='/excelfiller' >
                            {t("MORE DETAILS")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Work