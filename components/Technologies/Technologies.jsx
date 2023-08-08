import React, { useEffect } from "react";
import styles from "./Technologies.module.scss";
import classNames from "classnames";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

const Technologies = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let header = document.querySelector("#technologyHeader");

    // gsap.fromTo(
    //   header.children,
    //   { y: '-=50', opacity: 0 },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     stagger: 0.2,
    //     duration: 1,

    //     ease: 'easeInOut',
    //     scrollTrigger: {
    //       trigger: '#Technologies',
    //       start: '-600px',
    //       end: '100px',
    //       // scrub: 0.5,
    //       // markers: true,
    //     },
    //   },
    // );
  }, []);

  return (
    <section
      id="Technologies"
      className={classNames(styles.technologiesHolder, styles.darkSection)}
    >
      <div className={classNames(styles.main)}>
        <div style={{ width: "500px", height: "500px" }}></div>
      </div>
    </section>
  );
};

export default Technologies;
