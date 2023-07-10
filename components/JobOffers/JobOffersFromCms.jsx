import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
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
import Markdown from 'markdown-to-jsx';

var contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.space,
  accessToken: process.env.accessToken,
});

const JobOffersFromCms = () => {
  const [jobOffers, setJobOffers] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'jobOffersContainer',
      })
      .then(function (entries) {
        // log the title for all the entries that have it
        entries.items.forEach(function (entry) {
          if (entry.fields.productName) {
          }
        });

        const filterUnpublished =
          entries?.items?.[0]?.fields?.jobOffersContainer?.filter(
            (post) => post.sys.revision > 0,
          );

        setJobOffers(filterUnpublished);

        // console.log(
        //   util.inspect(entries?.items?.[0]?.fields?.test, {
        //     showHidden: false,
        //     depth: null,
        //     colors: true,
        //   })
        // );
      });
  }, []);

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
      },
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
      },
    );
  }, []);

  return (
    <section id="JobOffers">
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
          {(jobOffers || []).map((offer) => (
            <AccordionItem
              className={classNames(styles.accordion__item)}
              key={offer.sys.id}
            >
              <AccordionItemHeading>
                <AccordionItemButton
                  className={classNames(styles.accordion__button)}
                >
                  {offer.fields.jobOfferTitle}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={offer.fields.buttonLink}
                  >
                    <button>Aplikuj</button>
                  </a>
                </AccordionItemButton>
              </AccordionItemHeading>
              {offer.fields.jobOfferDescription && (
                <AccordionItemPanel
                  className={classNames(styles.accordion__panel)}
                >
                  <Markdown
                    options={{
                      overrides: {
                        p: {
                          props: {
                            className: styles.jobOffer_p,
                          },
                        },
                        span: {
                          props: {
                            className: styles.jobOffer_p,
                          },
                        },
                        ul: {
                          props: {
                            className: styles.jobOfferList,
                          },
                        },
                        h1: {
                          props: {
                            className: styles.jobOffer_h,
                          },
                        },
                        h2: {
                          props: {
                            className: styles.jobOffer_h,
                          },
                        },
                        h3: {
                          props: {
                            className: styles.jobOffer_h,
                          },
                        },
                      },
                    }}
                  >
                    {offer.fields.jobOfferDescription}
                  </Markdown>
                </AccordionItemPanel>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default JobOffersFromCms;
