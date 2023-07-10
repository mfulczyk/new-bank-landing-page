import React, { useEffect, useState } from 'react';
import styles from './ChooseYourTeam.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { offers } from './offers';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';

const McHHero = () => {
  const router = useRouter();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let header = document.querySelector('#ChooseYourTeam');
    let subHeader = document.querySelector('#ChooseYourTeamSubHeader');

    gsap.fromTo(
      header.children,
      { y: '-=50', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,

        ease: 'easeInOut',
      },
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
      },
    );
  }, []);

  const [jobOffers, setOffers] = useState([]);
  const [highlightedOffer, setHighlightedOffer] = useState();

  useEffect(() => {
    setOffers(offers);
    // setHighlightedOffer(offers[0]);
  }, []);

  return (
    <>
      <section id="ChooseYourTeam" className={classNames(styles.hero)}>
        <div className={classNames(styles.main)}>
          <article
            id="ChooseYourTeamSubHeader"
            className={classNames(styles.itKampusHeader)}
          >
            <h2>wybierz swoje bractwo</h2>
            <p>i dołącz do niego!</p>
          </article>
          <div className={classNames(styles.offersHolder)}>
            {jobOffers.map((offer, index) => (
              <div
                style={{
                  backgroundColor: offer.id % 2 === 0 ? '#f5f5f5' : '#ffffff',

                  boxShadow: '0px 0px 10px #00000029',
                  borderLeft:
                    offer.id === 1
                      ? '10px solid #008520'
                      : offer.id === 2
                      ? '10px solid #E90A0A'
                      : offer.id === 3
                      ? '10px solid #0066B1'
                      : offer.id === 4
                      ? '10px solid #FF8600'
                      : offer.id === 5
                      ? '10px solid #0066B1'
                      : offer.id === 6
                      ? '10px solid #008520'
                      : offer.id === 7
                      ? '10px solid  #E90A0A'
                      : offer.id === 8
                      ? '10px solid #FF8600'
                      : offer.id === 9
                      ? '10px solid #E90A0A'
                      : offer.id === 10
                      ? '10px solid #0066B1'
                      : offer.id === 11
                      ? '10px solid #E90A0A'
                      : offer.id === 12
                      ? '10px solid #008520'
                      : '10px solid #FF8600',
                }}
                className={classNames(styles.offer)}
                key={offer.id}
              >
                <div>
                  <h4>{offer.offerTitle}</h4>
                </div>
                <a
                  href="#highlightedOffer"
                  onClick={() => setHighlightedOffer(offer)}
                >
                  Dowiedz się więcej
                </a>
              </div>
            ))}
          </div>
          {highlightedOffer && (
            <div
              id="highlightedOffer"
              style={{
                scrollMarginTop: '100px',
              }}
              className={classNames(styles.highlightedOffersHolder)}
            >
              <div className={classNames(styles.highlightedOffer)}>
                <h2>{highlightedOffer.offerTitle}</h2>
                <h5>
                  <b className={classNames(styles.bold)}>
                    Rozpędź karierę i wskocz na wyższy poziom!{' '}
                  </b>
                  <br />
                  {highlightedOffer.offerDescription}
                </h5>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={classNames(styles.btn)}
                  href={highlightedOffer.aplicationLink}
                >
                  Aplikuj
                </a>
              </div>
              <div className={classNames(styles.highlightedOffer)}>
                <h6 className={classNames(styles.offerHeader)}>
                  czym zajmuje się zespół?
                </h6>
                <p>{highlightedOffer.whatTheTeamDo}</p>
              </div>
              <div className={classNames(styles.highlightedOffer)}>
                <h6 className={classNames(styles.offerHeader)}>
                  czego się nauczysz na stażu?
                </h6>
                <ul className={classNames(styles.ulOffer)}>
                  {highlightedOffer?.yourTasks?.map((task, index) => (
                    <li key={task.id}>{task.taskDescription}</li>
                  ))}
                </ul>
              </div>
              <div className={classNames(styles.highlightedOffer)}>
                <h6 className={classNames(styles.offerHeader)}>
                  czego od Ciebie oczekujemy?
                </h6>
                <ul className={classNames(styles.ulOffer)}>
                  {highlightedOffer?.ourExpectations?.map(
                    (expectation, index) => (
                      <li key={index}>
                        <Markdown
                          key={index}
                          options={{
                            overrides: {
                              strong: {
                                props: {
                                  className: styles.bold,
                                },
                              },
                            },
                          }}
                        >
                          {expectation.taskDescription}
                        </Markdown>
                      </li>
                    ),
                  )}
                </ul>
                {highlightedOffer.niceToSee ? (
                  <ul className={classNames(styles.ulOffer)}>
                    <span style={{ fontFamily: 'mbankbold' }}>
                      Mile widziane będą podstawy:
                    </span>
                    {highlightedOffer?.niceToSee?.map((nice, index) => (
                      <li
                        style={{ marginTop: index === 0 ? '10px' : '' }}
                        key={nice.id}
                      >
                        {nice.taskDescription}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default McHHero;
