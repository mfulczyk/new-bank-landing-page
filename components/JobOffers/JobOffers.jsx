import classNames from 'classnames';
import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import styles from './JobOffers.module.scss';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

const JobOffers = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let header = document.querySelector('#recrutationHeader');
    let accordion = document.querySelector('#accordion');

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
          trigger: '#JobOffers',
          start: '-600px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      accordion.children,
      { y: '-=50', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,

        ease: 'easeInOut',
        scrollTrigger: {
          trigger: '#JobOffers',
          start: '-600px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section className={classNames(styles.darkSection)} id="JobOffers">
      <div className={classNames(styles.main)}>
        <div
          id="recrutationHeader"
          className={classNames(styles.chapterHeaderHolder)}
        >
          <img src="./joboffers-header.svg" alt="offers icon" />
          <h2 className={classNames(styles.chapterHeader)}>oferty pracy</h2>
        </div>

        <Accordion
          id="accordion"
          allowZeroExpanded={true}
          className={classNames(styles.accordion)}
        >
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                className={classNames(styles.accordion__button)}
              >
                Specjalista(-ka) ds. digitalizacji procesów w zespole Michał
                Szymczak
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://skk.erecruiter.pl/Offer.aspx?oid=3893916&cfg=0B23D21DC7B54DFAA0900C44FD8CA54D&ejoId=38026&ejorId=66329&comId=18217196"
                >
                  <button>Aplikuj</button>
                </a>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>{' '}
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                className={classNames(styles.accordion__button)}
              >
                Specjalista(-ka) ds. digitalizacji procesów w zespole Marta
                Kubarska
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://skk.erecruiter.pl/Offer.aspx?oid=3893024&cfg=0B23D21DC7B54DFAA0900C44FD8CA54D&ejoId=38001&ejorId=66305&comId=18217196"
                >
                  <button>Aplikuj</button>
                </a>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>{' '}
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                className={classNames(styles.accordion__button)}
              >
                Specjalista(-ka) ds. digitalizacji procesów z Java
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://skk.erecruiter.pl/Offer.aspx?oid=3893938&cfg=0B23D21DC7B54DFAA0900C44FD8CA54D&ejoId=38029&ejorId=66306&comId=18217196"
                >
                  <button>Aplikuj</button>
                </a>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>{' '}
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                className={classNames(styles.accordion__button)}
              >
                St. specjalista(-ka) ds. technologii omnichannel
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://skk.erecruiter.pl/Offer.aspx?oid=3863653&cfg=0B23D21DC7B54DFAA0900C44FD8CA54D&ejoId=37631&ejorId=66055&comId=18217196"
                >
                  <button>Aplikuj</button>
                </a>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                className={classNames(styles.accordion__button)}
              >
                Manager IT
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://skk.erecruiter.pl/Offer.aspx?oid=3899004&cfg=0B23D21DC7B54DFAA0900C44FD8CA54D&ejoId=38060&ejorId=66359&comId=18217196"
                >
                  <button>Aplikuj</button>
                </a>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                className={classNames(styles.accordion__button)}
              >
                St. specjalista(-ka) ds. systemów komunikacyjnych i
                bezpieczeństwa IT (mBank Hipoteczny)
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://skk.erecruiter.pl/Offer.aspx?oid=3899143&cfg=0B23D21DC7B54DFAA0900C44FD8CA54D&ejoId=37613&ejorId=66041&comId=18217196"
                >
                  <button>Aplikuj</button>
                </a>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                className={classNames(styles.accordion__button)}
              >
                Administrator(-ka) IT (Linux)
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://skk.erecruiter.pl/Offer.aspx?oid=3880298&cfg=0B23D21DC7B54DFAA0900C44FD8CA54D&ejoId=37827&ejorId=66188&comId=18217196"
                >
                  <button>Aplikuj</button>
                </a>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                className={classNames(styles.accordion__button)}
              >
                Administrator(-ka) Informatica PowerCenter
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://skk.erecruiter.pl/Offer.aspx?oid=3895081&cfg=0B23D21DC7B54DFAA0900C44FD8CA54D&ejoId=38047&ejorId=66345&comId=18217196"
                >
                  <button>Aplikuj</button>
                </a>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                className={classNames(styles.accordion__button)}
              >
                Programista(-ka) Informatica PowerCenter
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://skk.erecruiter.pl/Offer.aspx?oid=3892884&cfg=0B23D21DC7B54DFAA0900C44FD8CA54D&ejoId=37689&ejorId=66101&comId=18217196"
                >
                  <button>Aplikuj</button>
                </a>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>{' '}
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                className={classNames(styles.accordion__button)}
              >
                Specjalista(-ka) ds. bezpieczeństwa procesów biznesowych i
                informacji
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://skk.erecruiter.pl/Offer.aspx?oid=3899122&cfg=0B23D21DC7B54DFAA0900C44FD8CA54D&ejoId=37822&ejorId=66185&comId=18217196"
                >
                  <button>Aplikuj</button>
                </a>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                className={classNames(styles.accordion__button)}
              >
                Mł. programista(-ka) ETL (IPC/SQL)
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://skk.erecruiter.pl/Offer.aspx?oid=3899515&cfg=0B23D21DC7B54DFAA0900C44FD8CA54D&ejoId=38074&ejorId=66368&comId=18217196"
                >
                  <button>Aplikuj</button>
                </a>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default JobOffers;
