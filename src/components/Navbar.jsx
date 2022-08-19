import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import DarkModeToggle from "react-dark-mode-toggle";

import { ThemeContext } from '../App'   
import { useTranslation } from 'react-i18next'

function Navbar() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  const { t, i18n } = useTranslation()
  const [expanded, setExpanded] = useState(false)

  function handleChangeLanguage () {
      const lgn = i18n.language === 'pt-BR' ? 'en-US' : 'pt-BR'
      i18n.changeLanguage(lgn)
  }

  return (
    <nav className={styles.navbar}>
        <div className={styles.container}>
            <Link to='/' className={styles.logo}>
                Gabriel Souza Costa <span> &lt; \ &gt; </span>
            </Link>
            <ul className={expanded ? styles.navigationMenuExpanded : styles.navigationMenu}>
                <li>
                    <Link onClick={() => setExpanded(!expanded)} to='/about'>
                        {t("About")}
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setExpanded(!expanded)} to='/work'>
                        {t("Work")}
                    </Link>
                </li>
                {/* <li>
                    <Link to='/blog'>
                        Blog
                    </Link>
                </li> */}
                <div className={styles.fixedRight}>
                    <DarkModeToggle
                    onChange={toggleTheme}
                    checked={theme === 'dark'? true : false}
                    size={80}
                    className={styles.toggler}
                    />
                    <button name="language" value={i18n.language} onClick={handleChangeLanguage} className={styles.lgn}>
                        {i18n.language}
                    </button>
                </div>
            </ul>
            <FontAwesomeIcon 
            icon={ faBars } 
            className={styles.navbarToggle}
            onClick={() => setExpanded(!expanded)}
            />
        </div>
    </nav>
  )
}

export default Navbar