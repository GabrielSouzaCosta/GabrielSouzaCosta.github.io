import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer>
        <nav>
            <Link to='/about'>
                <h3 className={styles.footerLogo}>
                    Gabriel S. Costa
                </h3>
            </Link>
            <ul className={styles.quickLinks}>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/work">
                        {t("Work")}
                    </Link>
                </li>
                <li>
                    <Link to="/blog">
                        Blog
                    </Link>
                </li>
            </ul>
            <div className={styles.links}>
                <a href="https://drive.google.com/file/d/1BBSPZt-ol1BCoOMqjcjo-uW1Rmb2YPr2/view?usp=sharing" target='_blank'>
                    {t("Resume")}
                </a>
                <a href="mailto:gabrielsscosta2010@hotmail.com" target='_blank'>
                    email
                </a>
            </div>
        </nav>
    </footer>
  )
}

export default Footer