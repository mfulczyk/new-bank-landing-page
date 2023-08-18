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
          alt="film mBank - Weź udział w zabawie"
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
          alt="film mBank - Weź udział w zabawie"
          src="hero-movie-test-mobile.mp4"
          class="${classNames(styles.videoMobile)}"
        />,
      `,
          }}
        ></div>

        <div className={classNames(styles.headersHolder)}>
          <h3 style={{ paddingTop: "70px" }} aria-label="Weź udział w zabawie">
            weź udział <br /> w zabawie
          </h3>
          <h4 aria-label="dokonuj wyboru i poznaj wartości mBanku!">
            - dokonuj wyboru i poznaj <br /> wartości mBanku!
          </h4>
          <Link passHref href="#InteractiveMovie">
            <button className={classNames(styles.btn)} aria-label="otwórz film">
              odtwórz film
            </button>
          </Link>
        </div>

        <a href="#InteractiveMovie" className={classNames(styles.chevron)} />
      </div>
    </section>
  );
};

export default Hero;
