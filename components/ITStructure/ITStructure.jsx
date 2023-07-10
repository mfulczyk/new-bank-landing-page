/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import styles from './ITStructure.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

const ITStructure = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let header = document.querySelector('#structureHeader');

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
          trigger: '#ITStructure',
          start: '-600px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="ITStructure"
      className={classNames(styles.itStructureHolder, styles.darkSection)}
    >
      <div className={classNames(styles.main)}>
        <div
          id="structureHeader"
          className={classNames(styles.chapterHeaderHolder)}
        >
          <img src="./structure-header.svg" alt="mbank structure icon" />
          <h2 className={classNames(styles.chapterHeader)}>struktura IT</h2>
        </div>

        <div className={classNames(styles.wrapper)}>
          <div className={classNames(styles.smallHolder)}>
            <div>
              <img height="85px" src="/1000workers.png" alt="employees icon" />
              <h5>1000+</h5>
              <p>pracowników</p>
            </div>
            <div>
              <img height="85px" src="/10petabytes.png" alt="data icon" />
              <h5>10+</h5>
              <p>petabajtów danych</p>
            </div>
            <div>
              <img height="85px" src="/5mlnusers.png" alt="app users icon" />
              <h5>5,5 mln+</h5>
              <p>użytkowników aplikacji</p>
            </div>
            <div>
              <img height="85px" src="/itsystems.png" alt="it systems icon" />
              <h5>500+</h5>
              <p>systemów IT</p>
            </div>
          </div>
          <div className={classNames(styles.smallHolder)}>
            <div>
              <img height="70px" src="/softwarehouse.png" alt="software house icon" />
              <h5>20+</h5>
              <p>lat software house'u</p>
            </div>
            <div>
              <img height="70px" src="/itteams.png" alt="it teams icon" />
              <h5>160+</h5>
              <p>zespołów IT</p>
            </div>
            <div>
              <img height="70px" src="/devteam.svg" alt="dev teams icon" />
              <h5>100+</h5>
              <p>zespołów deweloperskich</p>
            </div>
            <div>
              <img height="75px" src="/5000servers.svg" alt="servers icon" />
              <h5>5000+</h5>
              <p>serwerów</p>
            </div>
          </div>
        </div>

        <div className={classNames(styles.bigRectangleHolder)}>
          <img
            style={{ width: '40%', height: '40%', marginRight: '30px' }}
            src="/itstructureserver.svg"
            alt="server picture"
          />
          <div className={classNames(styles.rectangleHolder)}>
            <div className={classNames(styles.rectangle)}>
              <h2>zarządzanie IT</h2>
              <ul className={classNames(styles.rectangleList)}>
                <li>architektura korporacyjna</li>
                <li>zarządzanie projektami strategicznymi</li>
                <li>doskonalenie zarządzania IT</li>
              </ul>
            </div>
            <div
              className={classNames(styles.rectangle, styles.secondRectangle)}
            >
              <h2>rozwój systemów IT</h2>
              <ul className={classNames(styles.rectangleList)}>
                <li>core banking’owe systemy bankowe: Altamira i Globus</li>
                <li>systemy do wsparcia zarządzania mBankiem</li>
                <li>systemy zarządzania danymi</li>
                <li>
                  internet{' '}
                  <img
                    style={{ height: '15px' }}
                    src="/mbanklogos.svg"
                    alt="mbank current internet apps"
                  />{' '}
                </li>
                <li>
                  mobile banking{' '}
                  <img
                    style={{ height: '15px' }}
                    src="/aktualne_apki.png"
                    alt="mbank current mobile apps"
                  />
                </li>
              </ul>
            </div>
            <div className={classNames(styles.rectangle)}>
              <h2>utrzymanie systemów</h2>
              <ul className={classNames(styles.rectangleList)}>
                <li>I, II, III linia wsparcia i HelpLine IT SLA Management</li>
                <li>administrowanie DevOps</li>
                <li>monitoring i zarządzanie siecią</li>
              </ul>
            </div>
            <div className={classNames(styles.rectangle)}>
              <h2>rozwój infrastruktury IT</h2>
              <ul className={classNames(styles.rectangleList)}>
                <li>platformy wirtualizacyjne / kontenery Kubernetes</li>
                <li>Cloud (AWS, Azure)</li>
                <li>
                  Data center
                  <br />
                  (przechowywanie danych, computing i serwery)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <a passhref="true"  href="/#JobOffers">
          <button
            style={{ marginBottom: '20px' }}
            className={classNames(styles.btn)}
          >
            aplikuj
          </button>
        </a>
      </div>
    </section>
  );
};

export default ITStructure;
