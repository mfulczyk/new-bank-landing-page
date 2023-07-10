/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import styles from './McHReviewsAndMovies.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { useRouter } from 'next/router';

const McHReviewsAndMovies = () => {
  const router = useRouter();
  const [isOverlay, setOverlay] = useState({
    overlay1: true,
    overlay2: true,
    overlay3: true,
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let hit1 = document.querySelector('#hit1');
    let hit2 = document.querySelector('#hit2');
    let mit1 = document.querySelector('#mit1');

    gsap.fromTo(
      hit1,
      { y: '-=50', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,

        ease: 'easeInOut',
        scrollTrigger: {
          trigger: '#MCHReviews',
          start: '-600px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      hit2,
      { y: '-=50', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,

        ease: 'easeInOut',
        scrollTrigger: {
          trigger: '#hit1',
          start: '-600px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      mit1,
      { y: '-=50', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,

        ease: 'easeInOut',
        scrollTrigger: {
          trigger: '#hit2',
          start: '-600px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section id="MCHReviews" className={classNames(styles.sectionHolder)}>
      <div className={classNames(styles.bigHolder)}>
        <article>
          <h1>
            Wewnętrzny <br />
            software house.
          </h1>
          <h2>
            M<span className={classNames(styles.redLetters)}>IT</span> czy H
            <span className={classNames(styles.redLetters)}>IT</span>?
          </h2>
          <img
            id="hit1"
            className={classNames(styles.mitCzyHitImage)}
            height="200px"
            src="/mBank_hit.png"
            alt=""
          />
          <p>
            Robimy aplikacje mobilne, webowe. Wytwarzamy oprogramowanie, które
            jest nie tylko widziane na zewnątrz. W naszym IT pracuje ponad 1000
            osób.
          </p>
        </article>
        <div className={classNames(styles.videoHolder)}>
          {isOverlay.overlay1 === true ? (
            <div
              onClick={() =>
                window.open(
                  'https://www.youtube.com/watch?v=PiODyRd2Swg',
                  '_ blank'
                )
              }
              className={classNames(styles.videoOverlay1)}
            ></div>
          ) : null}
          <iframe
            src={
              isOverlay.overlay1 === false
                ? 'https://www.youtube.com/embed/PiODyRd2Swg?controls=0modestbranding=1autoplay=1'
                : 'https://www.youtube.com/embed/PiODyRd2Swg?controls=0modestbranding=1'
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className={classNames(styles.bigHolder)}>
        <div className={classNames(styles.videoHolder)}>
          {isOverlay.overlay2 === true ? (
            <div
              onClick={() =>
                window.open(
                  'https://www.youtube.com/watch?v=KE3SzBAq9h0',
                  '_ blank'
                )
              }
              className={classNames(styles.videoOverlay2)}
            ></div>
          ) : null}
          <iframe
            src={
              isOverlay.overlay2 === false
                ? 'https://www.youtube.com/embed/KE3SzBAq9h0?controls=0modestbranding=1autoplay=1'
                : 'https://www.youtube.com/embed/KE3SzBAq9h0?controls=0modestbranding=1'
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <article>
          <h1>
            Kontenery <br />w bankowości.
          </h1>
          <h2>
            M<span className={classNames(styles.redLetters)}>IT</span> czy H
            <span className={classNames(styles.redLetters)}>IT</span>?
          </h2>
          <img
            id="hit2"
            className={classNames(styles.mitCzyHitImage)}
            height="200px"
            src="/mBank_hit.png"
            alt=""
          />
          <p>
            W mBanku używamy Kubernetesa, platformy do orkiestracji kontenerów,
            która zyskuje na popularności. Kontenery mogą dać niesamowite
            korzyści w procesie dostarczania i wytwarzania oprogramowania.
          </p>
        </article>
      </div>
      <div className={classNames(styles.bigHolder)}>
        <article>
          <h1>
            Droga do Clouda <br />
            jest łatwa.
          </h1>
          <h2>
            M<span className={classNames(styles.redLetters)}>IT</span> czy H
            <span className={classNames(styles.redLetters)}>IT</span>?
          </h2>
          <img
            id="mit1"
            className={classNames(styles.mitCzyHitImage)}
            height="200px"
            src="/mBank_mit.png"
            alt=""
          />
          <p>
            Droga do Clouda nie jest łatwa, ale idziemy w tym kierunku! Jako
            pierwszy bank w Polsce wdrożyliśmy już Office365 w chmurze dla
            wszystkich pracowników.
          </p>
        </article>
        <div className={classNames(styles.videoHolder)}>
          {isOverlay.overlay3 === true ? (
            <div
              onClick={() =>
                window.open(
                  'https://www.youtube.com/watch?v=lhnk-f1hwRo',
                  '_ blank'
                )
              }
              className={classNames(styles.videoOverlay3)}
            ></div>
          ) : null}
          <iframe
            src={
              isOverlay.overlay3 === false
                ? 'https://www.youtube.com/embed/lhnk-f1hwRo?controls=0modestbranding=1autoplay=1'
                : 'https://www.youtube.com/embed/lhnk-f1hwRo?controls=0modestbranding=1'
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <article className={classNames(styles.heroArticle, styles.main)}>
        <img src="/mbank_it.png" alt="mit czy hit?" />
        <div>
          <h1>
            IT w mBanku to M
            <span className={classNames(styles.redLetters)}>IT</span>
            &nbsp;czy&nbsp;H
            <span className={classNames(styles.redLetters)}>IT</span>?
          </h1>
          <h2>
            Dla nas to HIT! <br />
            Sprawdź nasze oferty pracy i dołącz do firmy, która obala mity IT w
            bankowości!
          </h2>
          <Link passHref href="/#JobOffers">
            <button className={classNames(styles.btn)}>oferty pracy</button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default McHReviewsAndMovies;
