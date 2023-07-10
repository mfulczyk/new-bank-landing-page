import React, { useEffect } from 'react';
import styles from './Agile.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

const Agile = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let header = document.querySelector('#agileHeader');

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
          trigger: '#Agile',
          start: '-600px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section id="Agile" className={classNames(styles.methodsHolder)}>
      <div className={classNames(styles.main)}>
        <div
          id="agileHeader"
          className={classNames(styles.chapterHeaderHolder)}
        >
          <img src="./methods-header.svg" alt="settings icon" />
          <h2 className={classNames(styles.chapterHeader)}>Agile w mBanku</h2>
        </div>
        <div className={classNames(styles.methodsSmallHolder)}>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h5>
                Czy mBank wdrożył już Agile’a? <br />
                Nie, bo Agile’a się <b>nie wdraża.</b> Od 2015 pracujemy
                zwinnie. Jesteśmy dumni z tego, co osiągnęliśmy, ale nie
                spoczywamy na laurach. Wiemy, że usprawnianie się to jest{' '}
                <b>niekończący się proces.</b>
              </h5>
              <p>
                Dziś, aby stworzyć innowacyjny i dopasowany do klienta produkt,
                nie wystarczy dobry pomysł i plan, jak go zrealizować. Stawiamy
                na małe, zwinne zespoły, których członkowie uzupełniają się.
                Dzięki temu możemy odpowiadać na nieustannie zmieniające się
                potrzeby rynku.
              </p>
            </div>
            <img
              width="100%"
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
              src="./mbank-cloud.png"
              alt="cloud services picture"
            />
          </div>
          <p>
            Pracujemy <b>scrumem i kanbanem,</b> aby w coraz lepszy sposób
            sprostać wymaganiom klientów w szybko zmieniającym się otoczeniu.
            Agile to również dbałość o <b>warsztat inżynierski.</b> <br />
            Wartości i zasady, które przyświecają scrumowi i kanbanowi na
            poziomie zespołów, <b>skalujemy</b> <br />
            na poziom grup zespołów, departamentów, czy pionów. Dla przykładu,
            co kwartał możemy zobaczyć, jakie nowe funkcjonalności dostaną nasi
            klienci i jak wpływa to na nasze cele. Co roku na jesieni,
            organizujemy wewnętrzną konferencję o zwinności, mamy <b>
              gildie
            </b>{' '}
            (testerów, architektów, scrum masterów etc.), newsletter o zwinności
            – Agile’ówkę oraz regularne spotkania społeczności agile’owej.
          </p>
        </div>
        <img
          src="./mbank-agile-schema.png"
          alt="kanban agile management methods"
        />
      </div>
    </section>
  );
};

export default Agile;
