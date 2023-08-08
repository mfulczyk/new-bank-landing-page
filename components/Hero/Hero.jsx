import React from "react";
import styles from "./Hero.module.scss";
import classNames from "classnames";
import Link from "next/link";

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

        <div className={classNames(styles.headersHolder)}>
          <h3>
            weź udział <br /> w zabawie
          </h3>
          <h4>
            - dokonuj wyboru i poznaj <br /> wartości mBanku!
          </h4>
          <Link passHref href="/experts">
            <button className={classNames(styles.btn)}>odtwórz film</button>
          </Link>
        </div>

        <div className={classNames(styles.chevron)} />
      </div>
    </section>
  );
};

export default Hero;
