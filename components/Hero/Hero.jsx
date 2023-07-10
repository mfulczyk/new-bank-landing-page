import React from 'react';
import styles from './Hero.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="Hero" className={classNames(styles.hero)}>
      <div className={classNames(styles.main)}>
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="hero-movie-test.mp4"
          class="${classNames(styles.video)}"
        />,
      `,
          }}
        ></div>
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="hero-movie-test-mobile.mp4"
          class="${classNames(styles.videoMobile)}"
        />,
      `,
          }}
        ></div>

        <div
          className={classNames(styles.headersHolder)}
          style={{ paddingBottom: '190px' }}
        >
          <h1>
            w<span>IT</span>aj
          </h1>
          <h3>w mBanku!</h3>
          <h4>
            w jednym z czołowych <br />
            polskich software house’ów
          </h4>
          <Link passHref href="/experts">
            <button className={classNames(styles.btn)}>
              dowiedz się więcej
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
