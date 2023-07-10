/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import KampusITHero from '../components/KampusITHero/KampusITHero';
import SeeWhatWeGotHero from '../components/SeeWhatWeGotHero/SeeWhatWeGotHero';
import ChooseYourTeam from '../components/ChooseYourTeam/ChooseYourTeam';
import McHReviewsAndMovies from '../components/McHReviewsAndMovies/McHReviewsAndMovies';
import ScheduleRecrutation from '../components/ScheduleRecrutation/ScheduleRecrutation';
import MeetTheMentors from '../components/MeetTheMentors/MeetTheMentors';
import AdditionalActivities from '../components/AdditionalActivities/AdditionalActivities';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function MitCzyHit() {
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
        })(window, document, 'script', 'dataLayer', 'GTM-TPQ59RN')
        `,
          }}
        />
      </Head>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPQ59RN"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      <main id="KampusIT" className={styles.main}>
        <Navbar />
        <KampusITHero />
        <SeeWhatWeGotHero />
        <ChooseYourTeam />
        <ScheduleRecrutation />
        <AdditionalActivities />
        <MeetTheMentors />
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
