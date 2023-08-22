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
          alt="Na środku grafiki jest otwarty laptop, po jego prawej stronie leżą dwie zamknięte książki, po lewej stronie jest kubek. Wokół laptopa, na linii koła, wymienione się wartości mBanku wraz z opisami : Autentyczność: znaj swoje mocne strony i talenty, staraj się być najlepszą wersją siebie, szanuj i doceniaj różnice między ludźmi; Empatia: traktuj innych z szacunkiem, wykazuj wrażliwość na potrzeby, opinie i emocje członków zespołu, klientów i społeczeństwa; Odwaga: podejmuj odważne decyzje, w sposób otwarty wyrażaj swoje opinie, szanuj przy tym drugiego człowieka, mów wprost, miej w sobie gotowość, by przyznać się do błędów, wyciągaj z nich wnioski i traktuj jako naturalną drogę do tego, by odkryć nowe możliwości; Odpowiedzialność: w codziennej pracy patrz na kontekst całego banku, pamiętaj, że jesteś ważną częścią większej całości, zachowuj się etycznie i odpowiedzialnie, dotrzymuj danego słowa, dbaj o środowisko, w którym żyjesz, otwórz się na wrażliwość społeczną; Współpraca: okazuj otwartość na współpracę, zakładaj, że inni mają dobre intencje, bierz pod uwagę inne punkty widzenia i opinie, szukaj najlepszych sposobów osiągania wspólnych celów."
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
