import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './styles.module.scss'
import { useParams } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import data from './data'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../App'

function Details() {
    const { project } = useParams()
    const projectData = data.find(p => p.url === project)
    const { theme } = useContext(ThemeContext)

    const { t } = useTranslation()

  return (
    <>
        <section className={styles.detailsSection}>
            <Navbar />
            <div className={styles.container} style={{ padding: "1.5rem" }}>
                <h1 className={styles.h1}>
                    {projectData.title} <a href={projectData.repo} target='_blank'><img src="/icons/github.png" alt="github repository" height='50px'/></a>
                </h1>
                <div className={styles.techs}>
                    {
                        projectData.techs.map((tech) => (
                            <div>
                                <img src={tech} alt="" />
                            </div>
                        ))
                    }
                </div>
                <Carousel 
                className={`${styles.carousel} ${theme === "light" ? styles.carouselLight: '123'}`} 
                emulateTouch 
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                useKeyboardArrows
                renderArrowPrev={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <div className={styles.arrow} style={{display: 'none'}} title={label} onClick={onClickHandler} >
                            <FontAwesomeIcon type='button' icon={ faChevronRight } />
                        </div>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <div className={styles.arrow} style={{right: 0}} title={label} onClick={onClickHandler} >
                            <FontAwesomeIcon type='button' icon={ faChevronRight } />
                        </div>
                    )
                }
                
                >
                    {projectData.images
                        .map((image, index) => {
                            return (
                            <div key={image}>
                                <img src={image} alt={project.title} />
                                <h3 className={styles.description}>
                                    {t(projectData.description[index])}
                                </h3>
                            </div>
                                )
                            })
                        }
                </Carousel>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Details