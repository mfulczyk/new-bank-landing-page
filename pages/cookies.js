/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
import Link from "next/link";

export default function Cookies() {
  return (
    <div className={styles.container}>
      <Head>
        <title>wITaj w mBanku!</title>
        <meta
          name="description"
          content="wITaj w mBanku! W jednym z czołowych polskich software house’ów"
        />
        <link rel="icon" href="/favicon.ico" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-NQBJCX3')
        `,
          }}
        />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NQBJCX3"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.cookiesDeclaration}></div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLogoAndCookies}>
          <a href="https://www.mbank.pl/">
            <img
              height="35px"
              src="/mbankLogoBlack.svg"
              alt="mbank black logo"
            />
          </a>
          <div>
            <a passhref="true" href="javascript:mbiscuit.open()">
              Ustawienia cookie
            </a>
            <a href="https://www.mbank.pl/o-nas/o-mbanku/polityka-prywatnosci.html">
              Polityka prywatności
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
