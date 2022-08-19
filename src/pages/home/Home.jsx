import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import styles from './styles.module.scss'
import { ThemeContext } from '../../App'
import Social from '../../components/Social'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom' 
import Footer from '../../components/Footer'

function Home() {
  const {theme} = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <>
        <Navbar />
        <Social />
        <div className='container'>
          <header style={{minHeight: '95vh'}}>
            <section className={styles.content}>
                <div className={styles.bgHero} style={theme === 'dark' ? {mixBlendMode: 'hard-light'}: {}}>
                  <div className={styles.textSection}>
                    <div className={styles.profilePhoto}>
                      <img src="/images/profile.png" alt="my photo" />
                      </div>
                    <h1>
                      {t("Hi, My name is Gabriel and I'm a Full Stack Developer.")}
                    </h1>
                    <Link to="projects" smooth={true} duration={500}>
                      <button style={{cursor: 'pointer'}} >
                        {t("MY WORK")}
                      </button>
                    </Link>
                  </div>
                </div>
            </section>
            <section className={styles.centeredSection}>
              <h2>
                {t("ABOUT ME")}
              </h2>
              <p style={{marginBottom: '1.5rem'}}>
              {t("I am a self-taught programmer with 2 years of experience and 1 year as a full stack developer. I am always developing new applications and looking to improve my skills.")}
              </p>
              <div className={styles.aboutButton}>
                <RouterLink to='/about' >
                  {t("More about me")} &#128522;
                </RouterLink>
              </div>
            </section>
          </header>

          <section className={styles.projectsSection} id="projects">
            <h2>
              {t("MY BEST PROJECTS")}
            </h2>
            <div className={`${styles.project} ${(theme === 'dark') ? styles.projectDark : styles.projectLight}`}>
              <img src="/images/projects/breatheshoes.png" alt="breathe shoes website" />
              <div className={styles.title}>
                <h3>
                  Breathe Shoes
                </h3>
              </div>
              <p>
                {t("Breathe Shoes is a fictional E-commerce, it implements payment through Pagseguro and Paypal in Sandbox mode.")}
              </p>
              <div className={styles.link}>
                {t("Repository")}:  
                <a href="https://github.com/GabrielSouzaCosta/shoe-shop" target='_blank'>
                  https://github.com/GabrielSouzaCosta/shoe-shop
                </a>
              </div>
              <RouterLink to='/breathe-shoes'>
                <button className={styles.detailsButton}>
                  {t("More Details")}
                </button>
              </RouterLink>
            </div>
            <div className={`${styles.project} ${(theme === 'dark') ? styles.projectDark : styles.projectLight}`}>
              <img src="/images/projects/heavenbakery.png" alt="heaven bakery website" />
              <div className={styles.title}>
                <h3>
                  Heaven Bakery
                </h3>
              </div>
              <p>
                {t("It's a fictional bakery shop, the owner for example, can register your products and put it to sale. The payment is done by")} <strong>Stripe</strong>.
              </p>
              <div className={styles.link}>
                {t("Repository")}:  
                <a href="https://github.com/GabrielSouzaCosta/ecommerce-bakery-django-react" target='_blank'>
                https://github.com/GabrielSouzaCosta/ecommerce-bakery-django-react
                </a>
              </div>
              <RouterLink to='/heaven-bakery'>
                <button className={styles.detailsButton}>
                  {t("More Details")}
                </button>
              </RouterLink>
            </div>
            <div className={`${styles.project} ${(theme === 'dark') ? styles.projectDark : styles.projectLight}`}>
              <img src="/images/projects/animehunter.png" alt="anime hunter website" />
              <div className={styles.title}>
                <h3>
                  Anime Hunter
                </h3>
              </div>
              <p>
                {t("Anime Watchlist Manager: it retrieves animes from an unofficial MyAnimeList API and it's possible to favorite and/or add the anime to your watchlist.")} 
              </p>
              <div className={styles.link}>
                {t("Repository")}:  
                <a href="https://github.com/GabrielSouzaCosta/anime_hunter" target='_blank'>
                https://github.com/GabrielSouzaCosta/anime_hunter
                </a>
              </div>
              <RouterLink to='/anime-hunter'>
                <button className={styles.detailsButton}>
                  {t("More Details")}
                </button>
              </RouterLink>
            </div>
            <div className={`${styles.project} ${(theme === 'dark') ? styles.projectDark : styles.projectLight}`}>
              <img src="/images/projects/salveumpet.png" alt="Save a pet website" />
              <div className={styles.title}>
                <h3>
                  {t("Save a Pet")}
                </h3>
              </div>
              <p>
                {t("Save a Pet is a website for donating cats and dogs")}
              </p>
              <div className={styles.link}>
                {t("Repository")}:  
                <a href="https://github.com/GabrielSouzaCosta/SalveUmPet-React-Flask" target='_blank'>
                  https://github.com/GabrielSouzaCosta/SalveUmPet-React-Flask
                </a>
              </div>
              <RouterLink to='/save-a-pet'>
                <button className={styles.detailsButton}>
                  {t("More Details")}
                </button>
              </RouterLink>
            </div>
            <div className={`${styles.project} ${(theme === 'dark') ? styles.projectDark : styles.projectLight}`}>
              <img src="/images/projects/excelfiller.png" alt="excel filler website website" />
              <div className={styles.title}>
                <h3>
                  Excel Filler
                </h3>
              </div>
              <p>
                {t("ExcelFiller was created in order to fasten the creation of spreadsheets that need to be filled with many repetitive data.")}
              </p>
              <div className={styles.link}>
                {t("Repository")}:  
                <a href="https://github.com/GabrielSouzaCosta/ExcelFiller" target='_blank'>
                https://github.com/GabrielSouzaCosta/ExcelFiller
                </a>
              </div>
              <RouterLink to='/excelfiller'>
                <button className={styles.detailsButton}>
                  {t("More Details")}
                </button>
              </RouterLink>
            </div>
          </section>
        </div>
        <Footer />
    </>
  )
}

export default Home