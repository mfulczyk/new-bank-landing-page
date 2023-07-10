import React, { useEffect } from 'react';
import styles from './Benefits.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

const Benefits = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let header = document.querySelector('#benefitsHeader');

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
          trigger: '#Benefits',
          start: '-600px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section className={classNames(styles.darkSection)} id="Benefits">
      <div className={classNames(styles.main)}>
        <div
          id="benefitsHeader"
          className={classNames(styles.chapterHeaderHolder)}
        >
          <img src="/benefits-header.svg" alt="benefits icon coffee" />
          <h2 className={classNames(styles.chapterHeader)}>bonusy</h2>
        </div>
        <h4>Dbamy o naszych pracowników na różne sposoby.</h4>

        <div>
          <div className={classNames(styles.smallHolder)}>
            <div>
              <img height="85px" src="/trainings.png" alt="trainings icon" />
              <h5>szkolenia i&nbsp;rozwój</h5>
              <p>
                Korzystaj z&nbsp;webinarów, warsztatów, bogatej bazy wiedzy,
                wewnętrznych konferencji.
              </p>
            </div>
            <div>
              <img
                height="85px"
                src="/differenttech.png"
                alt="technological diversity icon"
              />
              <h5>różnorodność technologii</h5>
              <p>
                Pracuj w&nbsp;innowacyjnym środowisku, sprawdzaj możliwości
                i&nbsp;proponuj swoje rozwiązania.
              </p>
            </div>
            <div>
              <img
                height="75px"
                style={{ marginBottom: '10px' }}
                src="/wellbeing.svg"
                alt=""
              />
              <h5>
                program well-being <br />
                „z energią po zdrowie”
              </h5>
              <p>
                Utrzymuj swoje ciało i&nbsp;umysł w formie, a&nbsp;my Ci w tym
                pomożemy.
              </p>
            </div>
            <div>
              <img
                height="85px"
                src="/workfromhome.png"
                alt="work from home icon"
              />
              <h5>elastyczne godziny pracy i&nbsp;praca zdalna</h5>
              <p>Pracuj wydajnie – z&nbsp;domu lub z&nbsp;biura.</p>
            </div>
          </div>
          <div className={classNames(styles.smallHolder)}>
            <div>
              <img height="85px" src="/party.png" alt="work party icon" />
              <h5 className={classNames(styles.headerIcon)}>
                imprezy integracyjne
              </h5>
              <p>
                Wyróżniają nas ludzie i&nbsp;atmosfera, jaką tworzą – lubimy
                spotykać się także po pracy.
              </p>
            </div>
            <div>
              <img
                height="85px"
                src="/mentoring.svg"
                alt="mentoring programme icon"
              />
              <h5 className={classNames(styles.headerIcon)}>
                wsparcie lidera i&nbsp;mentoring
              </h5>
              <p>
                Rozwijaj swoje umiejętności u&nbsp;boku lidera i&nbsp;zyskaj
                mentora już od pierwszego dnia.
              </p>
            </div>
            <div>
              <img
                height="85px"
                src="/healthinsurance.svg"
                alt="health insurance icon"
              />
              <h5 className={classNames(styles.headerIcon)}>
                prywatne ubezpieczenie zdrowotne
              </h5>
              <p>
                Zapewnimy Ci pakiet prywatnej opieki zdrowotnej, w&nbsp;tym
                badania profilaktyczne.
              </p>
            </div>
            <div>
              <img
                height="85px"
                src="/lifeinsurance.svg"
                alt="life insurance icon"
              />
              <h5 className={classNames(styles.headerIcon)}>
                ubezpieczenie na&nbsp;życie
              </h5>
              <p>
                Skorzystaj z&nbsp;ubezpieczenia na życie dla Ciebie
                i&nbsp;Twojej rodziny.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
