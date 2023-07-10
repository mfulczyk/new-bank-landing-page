import React, { useEffect } from 'react';
import styles from './SeeWhatWeGotHero.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classNames from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

const McHHero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let header = document.querySelector('#SeeWhatWeGotHero');
    let subHeader = document.querySelector('#SeeWhatWeGotHeroSubHeader');

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
      <section id="SeeWhatWeGotHero" className={classNames(styles.hero)}>
        <div className={classNames(styles.main)}>
          <article
            id="SeeWhatWeGotHeroSubHeader"
            className={classNames(styles.itKampusHeader)}
          >
            <h2>zobacz,</h2>
            <p>co dla Ciebie mamy</p>
          </article>
          <img
            style={{ width: '100%' }}
            src="/see-what-we-got.png"
            alt="benefits of IT kampus"
          />
        </div>
      </section>
    </>
  );
};

export default McHHero;
