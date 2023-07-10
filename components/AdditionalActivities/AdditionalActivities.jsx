import React, { useEffect } from 'react';
import styles from './AdditionalActivities.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

const AdditionalActivities = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let header = document.querySelector('#additionalActivities');
    let subHeader = document.querySelector('#additionalActivitiesSubHeader');

    gsap.fromTo(
      header.children,
      { y: '-=50', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,

        ease: 'easeInOut',
      }
    );
    gsap.fromTo(
      subHeader.children,
      { y: '-=50', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,

        ease: 'easeInOut',
      }
    );
  }, []);

  return (
    <>
      <section id="additionalActivities" className={classNames(styles.hero)}>
        <div className={classNames(styles.main)}>
          <article
            id="additionalActivitiesSubHeader"
            className={classNames(styles.itKampusHeader)}
          >
            <h2>zajęcia</h2>
            <p>dodatkowe</p>
          </article>
          <p className={classNames(styles.additionalActivitiesParagraph)}>
            Oprócz pracy projektowej zaplanowaliśmy szkolenia, dzięki którym
            możesz rozwijać swoje umiejętności miękkie i techniczne.{' '}
            <span>Sprawdź, co dla Ciebie przygotowaliśmy!</span>
          </p>
          <h4 className={classNames(styles.additionalActivitiesHeader)}>
            kompetencje chmurowe
          </h4>
          <div className={classNames(styles.cloudCompHolder)}>
            <div className={classNames(styles.ulAndImg)}>
              <ul>
                <p>
                  Będziesz mieć możliwość rozwijać swoje kompetencje chmurowe.
                  Nasze Cloud Competence Center organizuje szkolenia, bootcampy
                  i certyfikację w różnych obszarach IT.{' '}
                  <span>Dostępne ścieżki:</span>
                </p>
                <div className={classNames(styles.liHolder)}>
                  <li style={{ backgroundColor: '#E90A0A', width: '213px' }}>
                    administrator cloud
                  </li>
                  <li style={{ backgroundColor: '#008520', width: '213px' }}>
                    cloud architect
                  </li>
                  <li style={{ backgroundColor: '#FF8600', width: '213px' }}>
                    data scientist
                  </li>
                </div>
                <div className={classNames(styles.liHolder)}>
                  <li style={{ backgroundColor: '#0066B1', width: '213px' }}>
                    developer
                  </li>
                  <li style={{ backgroundColor: '#AE0000' }}>
                    inżynier bezpieczeństwa
                  </li>
                </div>
                <div className={classNames(styles.liHolder)}>
                  <li style={{ backgroundColor: '#E90A0A' }}>inżynier AI</li>
                  <li style={{ backgroundColor: '#008520', width: '213px' }}>
                    inżynier DevOps
                  </li>
                </div>
              </ul>
              <video
                style={{ marginTop: '90px' }}
                width="35%"
                loop
                muted
                autoPlay
                playsInline
                src="/kampusit-skate2.mp4"
                alt="skate animation"
              />
            </div>
          </div>
          <h4 className={classNames(styles.additionalActivitiesHeader)}>
            Data Academy
          </h4>
          <p className={classNames(styles.additionalActivitiesParagraphSecond)}>
            Będziesz mieć możliwość zapisać się do Data Academy. Jej uczestnicy
            zdobywają wiedzę na temat przetwarzania danych i systemów. Szkolenia
            (np. z SQL, Power BI) odbywają się na różnych poziomach
            zaawansowania.
            <span> Na pewno znajdziesz ścieżkę dla siebie!</span>
          </p>
          <div className={classNames(styles.boxesHolder)}>
            <div className={classNames(styles.box)}>
              <h4 className={classNames(styles.boxHeader, styles.boxHeader1)}>
                szkolenia narzędziowe
              </h4>
              <ul className={classNames(styles.boxUl1)}>
                <li>Python + Jupyter</li>
                <li>SQL Oracle</li>
                <li>MS-SQL</li>
                <li>Power BI</li>
                <li>Excel + Power Query</li>
              </ul>
            </div>
            <div className={classNames(styles.box)}>
              <h4 className={classNames(styles.boxHeader, styles.boxHeader2)}>
                wizualizacja
              </h4>
              <ul className={classNames(styles.boxUl2)}>
                <li>wizualizacja danych</li>
                <li>prezentacja biznesowa</li>
              </ul>
            </div>
            <div className={classNames(styles.box)}>
              <h4 className={classNames(styles.boxHeader, styles.boxHeader3)}>
                automatyzacja
              </h4>
              <ul className={classNames(styles.boxUl3)}>
                <li>sztuczna inteligencja (AI)</li>
                <li>uczenie maszynowe (ML)</li>
                <li>automatyzacja i robotyzacja (RPA)</li>
              </ul>
            </div>
            <div className={classNames(styles.box)}>
              <h4 className={classNames(styles.boxHeader, styles.boxHeader4)}>
                kompetencje przyszłości
              </h4>
              <ul className={classNames(styles.boxUl4)}>
                <li>myślenie krytyczne</li>
                <li>kreatywność</li>
                <li>storytelling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdditionalActivities;
