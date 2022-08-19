import React, { useState } from 'react'
import styles from './styles.module.scss'
import Navbar from '../../components/Navbar'
import Social from '../../components/Social'
import { useTranslation } from 'react-i18next'

function Blog() {
  const [articles, setArticles] = useState(null)
  const { t } = useTranslation()

  return (
    <section className={styles.blog}>
    <Social />
    <Navbar />
    {(articles) ? 
    ""
    :
    <h1>{t("New Posts soon..")}</h1>
    }
    </section>
  )
}

export default Blog