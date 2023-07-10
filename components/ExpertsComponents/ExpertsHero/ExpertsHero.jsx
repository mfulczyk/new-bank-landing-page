import React from "react";
import styles from "./ExpertsHero.module.scss";
import classNames from "classnames";

export const ExpertsHero = () => {
  return (
    <div
      className={classNames(
        styles.experts_hero_wrapper,
        "grid-item grid-item--width2"
      )}
    >
      <img
        src="/expert-hero-img.png"
        alt="mbank experts header image"
        width="100%"
      />
      <img src="/mbank-color-bar-big.png" alt="mbank color bar" width="100%" />

      <div className={styles.experts_hero_content}>
        <p className={classNames(styles.experts_p)}>
          Nasze IT to 5,5 mln+ użytkowników aplikacji, 10+ petabajtów danych,
          500+ systemów IT, 5000+ serwerów, a przede wszystkim ponad 1000
          profesjonalistów, którzy nas wyróżniają. Przekonaj się, że praca w
          bankowości to przeciwieństwo nudy!
        </p>
      </div>
    </div>
  );
};
