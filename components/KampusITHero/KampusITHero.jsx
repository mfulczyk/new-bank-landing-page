import React, { useEffect } from 'react';
import styles from './KampusITHero.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

const McHHero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let header = document.querySelector('#mchHeader');
    let subHeader = document.querySelector('#mchSubHeader');

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
      <section id="KampusITHero" className={classNames(styles.hero)}>
        <div className={classNames(styles.main)}>
          <div className={classNames(styles.headersHolderNew)}>
            <div id="mchHeader">
              <h2 style={{ fontSize: '35px' }}>
                zacznij swoją przygodę zawodową w świecie nowych technologii
              </h2>
              <h4 style={{ fontSize: '25px' }}>
                i zdobądź pierwsze doświadczenie w IT
              </h4>
            </div>

            <video
              style={{
                marginTop: '50px',
              }}
              width="50%"
              loop
              muted
              autoPlay
              playsInline
              src="/kampusit-video.mp4"
              alt="two people standing with a laptops animation"
            />
          </div>
          <article
            id="mchSubHeader"
            className={classNames(styles.itKampusHeader)}
          >
            <h2>Cześć!</h2>

            <div className={classNames(styles.itCampusArticleHolder)}>
              <div>
                <h2 className={classNames(styles.itCampusBold)}>
                  marzysz o karierze w <span>IT</span>?
                </h2>
                <span>Kampus mBanku jest dla Ciebie!</span>
              </div>
              <p>
                W programie stażowym czeka na Ciebie wiele{' '}
                <b className={classNames(styles.bold)}>szkoleń,</b> masa
                praktycznej <b className={classNames(styles.bold)}>wiedzy</b> i
                bezcenne{' '}
                <b className={classNames(styles.bold)}>doświadczenie.</b>
              </p>
              <p>
                Przez cały czas{' '}
                <b className={classNames(styles.bold)}>
                  będzie towarzyszyć Ci opiekun,
                </b>{' '}
                który pokaże, jak pracujemy na co dzień.
              </p>
            </div>
            <div className={classNames(styles.itCampusSecondArticleHolder)}>
              <video
                style={{
                  marginTop: '50px',
                  height: '450px',
                }}
                loop
                muted
                autoPlay
                playsInline
                src="/kampusit-skate.mp4"
                alt="skate animation"
              />
              <div>
                <h2>dołącz do kampusu mBanku</h2>
                <p>
                  Zdobądź pierwszą pracę w{' '}
                  <b className={classNames(styles.bold)}>
                    jednym z czołowych polskich software house&rsquo;ów!
                  </b>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default McHHero;
