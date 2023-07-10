import React, { useEffect } from 'react';
import styles from './ScheduleRecrutation.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

const ScheduleRecrutation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let header = document.querySelector('#ScheduleRecrutation');
    let subHeader = document.querySelector('#ScheduleRecrutationSubHeader');

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
      <section id="ScheduleRecrutation" className={classNames(styles.hero)}>
        <div className={classNames(styles.main)}>
          <article
            id="ScheduleRecrutationSubHeader"
            className={classNames(styles.itKampusHeader)}
          >
            <h2>harmonogram</h2>
            <p>rekrutacji na kampus</p>
          </article>
          <div className={classNames(styles.scheduleRecrutationHolder)}>
            <video
              width="40%"
              loop
              muted
              playsInline
              autoPlay
              src="/kampusit-schedule.mp4"
              alt="person standing with laptop animation"
            />
            <img
              width="60%"
              src="/schedule-graph-image.png"
              alt="graph with schedule"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleRecrutation;
