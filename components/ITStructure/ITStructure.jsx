/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import styles from "./ITStructure.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

const ITStructure = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let header = document.querySelector("#structureHeader");

    gsap.fromTo(
      header.children,
      { y: "-=50", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,

        ease: "easeInOut",
        scrollTrigger: {
          trigger: "#ITStructure",
          start: "-600px",
          end: "100px",
          // scrub: 0.5,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section id="ITStructure" className={classNames(styles.itStructureHolder)}>
      <div className={classNames(styles.main)}>
        <div
          id="structureHeader"
          className={classNames(styles.chapterHeaderHolder)}
        >
          <h2
            aria-label="nasze wartości"
            className={classNames(styles.chapterHeader)}
          >
            nasze wartości
          </h2>
        </div>

        <img
          style={{ width: "100%" }}
          src="/wartosci.svg"
          alt="Nasze wartości to autentyczność, empatia, odwaga, odpowiedzialność i współpraca."
        />

        <a
          passhref="true"
          target="_blank"
          href="https://www.mbank.pl/kariera/wyszukiwarka-ofert/"
        >
          <button
            style={{ marginBottom: "40px" }}
            className={classNames(styles.btn)}
            aria-label="aplikuj"
          >
            aplikuj
          </button>
        </a>
      </div>
    </section>
  );
};

export default ITStructure;
