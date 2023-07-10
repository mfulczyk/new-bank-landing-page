import React, { useEffect } from 'react';
import styles from './RecrutationProcess.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

const RecrutationProcess = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let icon1 = document.querySelector('#recrutationIcon1');
    let icon2 = document.querySelector('#recrutationIcon2');
    let icon3 = document.querySelector('#recrutationIcon3');
    let icon4 = document.querySelector('#recrutationIcon4');
    let header = document.querySelector('#recrutationHeader');

    gsap.fromTo(
      icon1.children,
      { x: '-=100', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,

        ease: 'easeInOut',
        scrollTrigger: {
          trigger: '#RecrutationProcess',
          start: '-400px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      },
    );
    gsap.fromTo(
      icon2.children,
      { x: '-=100', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 1,

        ease: 'easeInOut',
        scrollTrigger: {
          trigger: '#RecrutationProcess',
          start: '-400px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      },
    );
    gsap.fromTo(
      icon3.children,
      { x: '-=100', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.4,
        duration: 1,

        ease: 'easeInOut',
        scrollTrigger: {
          trigger: '#RecrutationProcess',
          start: '-400px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      },
    );
    gsap.fromTo(
      icon4.children,
      { x: '-=100', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.5,
        duration: 1,

        ease: 'easeInOut',
        scrollTrigger: {
          trigger: '#RecrutationProcess',
          start: '-400px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      },
    );
    gsap.fromTo(
      header.children,
      { y: '-=50', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,

        ease: 'easeInOut',
        scrollTrigger: {
          trigger: '#RecrutationProcess',
          start: '-600px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      },
    );
  }, []);
  return (
    <section id="RecrutationProcess">
      <div className={classNames(styles.main)}>
        <div
          id="recrutationHeader"
          className={classNames(styles.chapterHeaderHolder)}
        >
          <img src="/recrutation-header.svg" alt="recrutation icon" />
          <h2 className={classNames(styles.chapterHeader)}>
            proces rekrutacji
          </h2>
        </div>
        <div className={classNames(styles.smallHolder)}>
          <div
            id="recrutationIcon1"
            className={classNames(styles.recrutationIcon)}
          >
            <img height="90px" src="/cv.png" alt="cv document icon" />
            <h5>prześlij nam swoje CV</h5>
            <p>
              Nasz zespół rekrutacyjny zapozna się z Twoim CV. Upewnij się, że
              jasno opisujesz swoje umiejętności i pokazujesz technologie /
              narzędzia, których używasz. Bycie konkretnym jest dla nas
              kluczowe.
            </p>
          </div>
          <div
            id="recrutationIcon2"
            className={classNames(styles.recrutationIcon)}
          >
            <img height="90px" src="/meeting.png" alt="meeting icon" />
            <h5>spotkajmy się i&nbsp;porozmawiajmy</h5>
            <p>
              Ta część procesu zajmuje około godziny. Porozmawiamy za
              pośrednictwem wideo (MS Teams lub Skype) lub w naszym oddziale:
              w&nbsp;Warszawie lub Łodzi. Na spotkaniu będziesz mieć okazję
              poznać nas bliżej i&nbsp;opowiedzieć o swoim dotychczasowym
              doświadczeniu i motywacji, aby do nas dołączyć.
            </p>
          </div>
          <div
            id="recrutationIcon3"
            className={classNames(styles.recrutationIcon)}
          >
            <img height="90px" src="/manager.png" alt="manager icon" />
            <h5>poznaj swojego menadżera</h5>
            <p>
              Rozmowa techniczna trwa zazwyczaj około półtorej godziny. Menadżer
              podczas tego etapu porozmawia z&nbsp;Tobą o Twoim doświadczeniu
              i&nbsp;umiejętnościach technicznych, aby upewnić się, że jesteś
              odpowiednim kandydatem. Przygotuj się na rozmowę pod kątem wyzwań
              w poprzednich rolach i podaj przykłady projektów, nad którymi
              pracowałeś/aś.
            </p>
          </div>
          <div
            id="recrutationIcon4"
            className={classNames(styles.recrutationIcon)}
          >
            <img height="90px" src="/feedback.png" alt="feedback icon" />
            <h5>damy znać, jak Ci poszło</h5>
            <p>
              Bez względu na wynik rekrutacji otrzymasz od nas informację
              zwrotną. Jeśli tym razem Ci się nie udało, nie oznacza, że nie
              odniesiesz sukcesu! Kandydatom, którzy z&nbsp;powodzeniem przeszli
              cały proces rekrutacji przedstawimy ofertę pracy. Jeśli ją
              zaakceptujesz, umowę podpiszemy pierwszego dnia pracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecrutationProcess;
