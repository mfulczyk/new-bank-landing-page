/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Technologies from "../components/Technologies/Technologies";
import ITStructure from "../components/ITStructure/ITStructure";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Kariera w mBanku!</title>
        <meta
          name="description"
          content="Kariera w mBanku. Weź udział w zabawie - dokonuj wyboru i poznaj wartości mBanku!"
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
        })(window, document, 'script', 'dataLayer', 'GTM-TPQ59RN')
        `,
          }}
        />
      </Head>
      <>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TPQ59RN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <main className={styles.main}>
          <Navbar />
          <Hero />
          <Technologies />
          <ITStructure />
        </main>
      </>
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
            <a
              aria-label="ustawienia cookie"
              passhref="true"
              href="javascript:mbiscuit.open()"
            >
              Ustawienia cookie
            </a>
            <a
              aria-label="ustawienia cookie"
              style={{ textAlign: "middle" }}
              href="https://www.mbank.pl/o-nas/o-mbanku/polityka-prywatnosci.html"
            >
              Polityka prywatności
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
