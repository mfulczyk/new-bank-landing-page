import React, { useEffect } from 'react';
import styles from './McHHero.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classNames from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

const carouselPhotos = [
  { imageSrc: '/photo1.png', employeeName: 'Michał', role: 'menadżer IT' },
  {
    imageSrc: '/photo2.png',
    employeeName: 'Rafał',
    role: 'inżynier IT ds.\u00A0infrastruktury IT',
  },
  {
    imageSrc: '/photo3.png',
    employeeName: 'Barbara',
    role: 'scrum master',
  },
  {
    imageSrc: '/photo4.png',
    employeeName: 'Kornel',
    role: 'starszy inżynier IT ds.\u00A0infrastruktury IT',
  },
  {
    imageSrc: '/photo5.png',
    employeeName: 'Albert',
    role: 'specjalista IT ds.\u00A0rozwoju oprogramowania',
  },
  {
    imageSrc: '/photo6.png',
    employeeName: 'Olga',
    role: 'lider zespołu IT',
  },
  {
    imageSrc: '/photo7.png',
    employeeName: 'Kuba',
    role: 'starszy inżynier IT ds.\u00A0rozwoju oprogramowania',
  },
];

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
      <section id="MCHHero" className={classNames(styles.hero)}>
        <div className={classNames(styles.main)}>
          <div className={classNames(styles.headersHolderNew)}>
            <div id="mchHeader">
              <h1>
                M<span>IT</span> CZY H<span>IT</span>?
              </h1>
              <h4>
                Sprawdź, co pracownicy mówią
                <br />o pracy w IT w mBanku!
              </h4>
            </div>
            <Carousel
              className={classNames(styles.carousel)}
              infiniteLoop={true}
              autoPlay={true}
              // dynamicHeight={true}
              showThumbs={false}
              interval={3000}
              showStatus={false}
              showArrows={false}
              showIndicators={false}
            >
              {carouselPhotos.map((photo, id) => (
                <>
                  <div key={id}>
                    <img
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center center',
                      }}
                      height="500px"
                      width="500px"
                      src={photo.imageSrc}
                      alt="hero"
                    />
                    <h2 style={{ margin: 0, marginTop: '10px' }}>
                      {photo.employeeName}
                    </h2>
                    <span style={{ fontFamily: 'mbankregular' }}>
                      {photo.role}
                    </span>
                  </div>
                </>
              ))}
            </Carousel>
          </div>
          <article id="mchSubHeader" className={classNames(styles.heroArticle)}>
            <img src="/mbank-keyboard.png" alt="mit czy hit?" />
            <div>
              <p>
                Wokół pracy w IT w sektorze bankowości krążą plotki, <br />
                mity i domysły. A jak jest naprawdę?
              </p>
              <h2>
                Sprawdź, co pracownicy mBanku mówią o pracy w IT w mBanku!
              </h2>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default McHHero;
