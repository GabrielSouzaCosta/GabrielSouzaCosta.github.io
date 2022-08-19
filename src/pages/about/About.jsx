import React from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Social from '../../components/Social'
import styles from './styles.module.scss'

function About() {
  const { t } = useTranslation()

  return (
  <>
    <div className={styles.aboutBg}>
      <Social />
      <Navbar />
      <div className="container">
        <header className={styles.header}>
          <h1>[gabrielscosta ~]$ Whoami</h1>
          <h2>
            {t("I'm A Self-Taught Programmer")}
          </h2>
          <p>
            {t("I started coding about 2 years ago and it was where I found my passion. I started programming in Python and through my path I developed some little applications in areas such as desktop apps, data science and automations. Until I finally began working with Web Development and that's what I decided to specialize in. The Python frameworks I have experience and work today are Django (I use the most) and Flask, and I use React JS for the front end usually.")}
          </p>
        </header>

        <section className={styles.infoContainer}>
          
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <img src="/images/profile.png" alt="profile photo" width="200px" height="200px"/>
            </div>
            <div className={styles.cardContent}>
              <h3>
                Gabriel Souza Costa
              </h3>
              <div className={styles.contact}>
                <a href='https://drive.google.com/file/d/1BBSPZt-ol1BCoOMqjcjo-uW1Rmb2YPr2/view?usp=sharing' target='_blank'>
                  <img src="/icons/resume.png" alt="download resume" height='70px' />
                  <div>{t("My Resume")}</div>
                </a>
                <a href="mailto:gabrielsscosta2010@hotmail.com" target='_blank'>
                  <img src="/icons/email.svg" alt="download resume" style={{filter: 'invert(1)'}} height='70px' />
                  <div>Email</div>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.cardInfo}>
            <h4>
              {t("Technologies")}
            </h4>
            <div className={styles.info}>
                <img src="/icons/python.svg" alt=""/>
                <img src="/icons/django.svg" alt=""/>
                <img src="/icons/flask-black.svg" alt=""/>
                <img src="/icons/postgresql.svg" alt="" />
                <img src="/icons/docker.svg" alt=""/>
                <img src="/icons/html.png" alt=""/>
                <img src="/icons/css.png" alt="" />
                <img src="/icons/javascript.svg" alt=""/>
                <img src="/icons/react.svg" alt=""/>
                <img src="/icons/bootstrap.svg" alt=""/>
            </div>
          </div>

        </section>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default About