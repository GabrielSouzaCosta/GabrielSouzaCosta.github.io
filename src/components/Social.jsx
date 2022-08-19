import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import styles from './styles.module.scss'

function Social() {
  const { theme } = useContext(ThemeContext)

  return (
    <nav className={styles.socialBox}>
        <a href="https://github.com/GabrielSouzaCosta/" target='_blank'>
            <img src="/icons/github.png" alt="github link icon" style={theme === 'dark' ? {filter: 'invert(1)'} : {} }/>
        </a>
        <a href="https://www.linkedin.com/in/gabriel-souza-costa-8443481bb/" target='_blank' style={{marginLeft: '0.4rem'}}>
            <img src="/icons/linkedin.png" alt="linkedin link icon" />
        </a>
        <a href="https://www.instagram.com/__gabrielscosta__/" target='_blank'>
            <img src="/icons/instagram.png" alt="instagram link icon" />
        </a>
    </nav>
  )
}

export default Social