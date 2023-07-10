/* eslint-disable @next/next/no-img-element */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './EmployeeReview.module.scss';
import classNames from 'classnames';

const reviews = [
  {
    employeeName: 'Albert, specjalista IT ds. rozwoju oprogramowania',
    subHeader: 'Rok w mBanku',
    reviewText:
      'Rozwój w mBanku jest jak najbardziej możliwy, a ja jestem tego dobrym przykładem. Dołączyłem tutaj mając nieduże doświadczenie. Szukałem pracy, która da mi rozwój w\u00A0stacku technologicznym.NET i rozwój w aplikacjach webowych. mBank mi to wszystko zapewnia, chciałem pracować w nowych technologiach i się nie zawiodłem.',
    imageSrc: '/albert.png',
    styleLayout: 1,
  },
  {
    employeeName: 'Barbara, scrum master',
    subHeader: '7 lat w mBanku',
    reviewText:
      'Nasze inicjatywy wspierają rozwój pracowników, np. Akademia Product Managera, czy warsztaty dla biznesu – user story mapping. Ta technika warsztatów zapewnia uwzględnienie perspektywy użytkownika i klienta, kiedy zaczynamy pracę z\u00A0produktem. Pomaga zbudować wspólne zrozumienie produktu, co jest bardzo ważne przy dużej grupie interesariuszy. Mamy warsztaty z Celu Sprintu. Organizujemy też wewnętrzną konferencję ABCD – Agile Bank Conference Day. Agile’ówka to nasz newsletter o warsztatach i materiałach rozwojowych dla pracowników. Zachęcamy w niej do słuchania podcastów i\u00A0udziału w meetupach. Szkolimy pracowników. Nasze spotkania społeczności Agile są dostępne dla całego mBanku i odbywają się co 2 tygodnie.',
    imageSrc: '/barbara.png',
    styleLayout: 1,
  },
  {
    employeeName: 'Kornel, starszy inżynier IT ds. infrastruktury IT',
    subHeader: '3 lata w mBanku',
    reviewText:
      'Moim zdaniem najcenniejsze w mBanku jest zaufanie. Możesz pracować elastycznie, bo sami ustalamy sobie tryb pracy. Mój zespół jest odpowiedzialny za krytyczne aplikacje. mBank pracuje 24/7, więc jak dzieje się coś niepokojącego wsiadamy do wozu strażackiego i gasimy pożar. W zespole jestem odpowiedzialny za automatyzację, programuję w\u00A0Pythonie. Jak przyszedłem do mBanku, to mieliśmy dużo możliwości, aby wdrażać nowe rozwiązania.',
    imageSrc: '/kornel.png',
    styleLayout: 3,
  },
  {
    employeeName: 'Rafał, inżynier IT ds. infrastruktury IT',
    subHeader: '6 lat w mBanku',
    reviewText:
      'Ludzie, atmosfera i możliwości rozwoju. Bardzo cenię sobie swojego managera za to, że pozwala mi pracować w takim środowisku, jakie sobie wymarzyłem. Poza tym, nie widziałem w mBanku, aby ktoś napisał do mnie e-maila zaczynającego się od „dzień dobry”. Raczej piszemy sobie „cześć”. Mówimy sobie „na Ty” bez względu na stanowisko.  To dzięki takiemu środowisku nasza praca idzie szybko i\u00A0sprawnie. Bez sztucznych barier. Parę godzin wystarczy, aby zobaczyć, jak tu\u00A0jest naprawdę.',
    imageSrc: '/rafal.jpg',
    styleLayout: 3,
  },
  {
    employeeName: 'Olga, lider zespołu IT',
    subHeader: '6 lat w mBanku',
    reviewText:
      "Na początku byłam tylko ja i sami faceci. Przejście do software house'u było wymagające. Musiałam nauczyć się np. jak wygląda proces rozwoju oprogramowania, w\u00A0jaki sposób mierzyć i jak pozbywać się długu technologicznego, a także typowego slangu IT. Obecnie pracuję w departamencie DRU, jestem w nim odpowiedzialna za Process Mining, którego jako pierwsi w Polsce używamy w obszarze ubezpieczeń i\u00A0bankowości. Process mining jest ważnym pomostem między tradycyjną analizą procesów opartą na modelach a\u00A0technikami analiz skoncentrowanych na\u00A0danych (np. uczenie maszynowe, eksploracja danych). Łączymy w ten sposób modele biznesowe procesów i dane pochodzące z\u00A0systemów informatycznych, na podstawie których zyskujemy informacje o procesach. Dzięki temu jesteśmy w stanie przemodelować proces biznesowy w taki sposób, żeby był efektywny kosztowo.",
    imageSrc: '/olga.png',
    styleLayout: 2,
  },
  {
    employeeName: 'Kuba, starszy inżynier IT ds. rozwoju oprogramowania',
    subHeader: '3 lata w mBanku ',
    reviewText:
      'Jestem tutaj od 3 lat, znalazłem ogłoszenie i\u00A0stwierdziłem, że\u00A0to\u00A0może być ciekawe miejsce pracy dla mnie. Brałem udział w\u00A0różnych procesach rekrutacyjnych w innych bankach, ale kompletnie mi się tam nie podobało. Było cicho i\u00A0strasznie sztywno. Postanowiłem, że zobaczę, jak jest w mBanku. Po pierwszych dniach w pracy czułem się tutaj bardzo dobrze. Mogę powiedzieć, że kultura organizacyjna jest bliższa polskim software house’om niż korporacji. W\u00A0mBanku odpowiada mi atmosfera. Biorąc pod uwagę doświadczenia, które miałem we\u00A0wcześniejszych miejscach, tutaj czuję się po prostu bardzo bezpiecznie. Może nie ma to znaczenia dla ludzi, którzy są singlami, ale jak się ma rodzinę to stabilność i poczucie bezpieczeństwa są ważne.',
    imageSrc: '/kuba.png',
    styleLayout: 1,
  },
  {
    employeeName: 'Michał, menadżer IT',
    subHeader: '13 lat w mBanku',
    reviewText:
      'Szukałem stabilności, ale i dużych wyzwań. Chciałem programować nie dla 50 użytkowników, ale w znacznie większej skali. W 2008 r. zostałem developerem inżynierem oprogramowania, stopniowo trafiało do mnie coraz więcej tematów i\u00A0zadań. Następnie byłem project managerem, a\u00A0potem leaderem zespołu. Obecnie jestem managerem kilku zespołów. Przywiązuję się do miejsca i płynę z nurtem technologii dalej. Jeśli praca jest jedynie utrzymaniowa, to mnie tak nie pasjonuje. Na szczęście tutaj jest inaczej.',
    imageSrc: '/michal.png',
    styleLayout: 2,
  },
];

const EmployeeReview = () => {
  return (
    <>
      <section
        className={classNames(styles.desktopCarousel)}
        style={{ height: '100%' }}
      >
        <Carousel
          className={classNames(styles.carousel)}
          infiniteLoop={true}
          height="700px"
          autoPlay={true}
          dynamicHeight={false}
          showThumbs={false}
          interval={8000}
          showStatus={false}
        >
          {reviews.map((review, id) =>
            review.styleLayout === 1 ? (
              <div
                key={id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <card
                  style={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    padding: '1rem',
                    paddingLeft: '2.5rem',
                  }}
                >
                  <h2 style={{ textAlign: 'left', fontFamily: 'mbankbold' }}>
                    {review.employeeName}
                  </h2>
                  <h4 style={{ margin: 0 }}>{review.subHeader}</h4>
                  <p style={{ textAlign: 'left' }}>{review.reviewText}</p>
                </card>
                <div className={classNames(styles.imageContainer)}>
                  <img
                    className={classNames(styles.image)}
                    width="100%"
                    height="100%"
                    style={{ objectFit: 'cover' }}
                    src={review.imageSrc}
                    alt="employee photo"
                  />
                </div>
              </div>
            ) : review.styleLayout === 2 ? (
              <div
                key={id}
                style={{
                  backgroundImage: `url(${review.imageSrc})`,
                  backgroundPosition: '80% top',
                  backgroundSize: 'cover',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  height: '100%',
                }}
              >
                <card
                  style={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    boxSizing: 'border-box',
                    padding: '1rem',
                    color: 'white',
                    textShadow: '3px 3px 4px rgba(0,0,0,0.44)',
                    paddingLeft: '2.5rem',
                  }}
                >
                  <h2 style={{ textAlign: 'left', fontFamily: 'mbankbold' }}>
                    {review.employeeName}
                  </h2>
                  <h4 style={{ margin: 0 }}>{review.subHeader}</h4>
                  <p style={{ textAlign: 'left' }}>{review.reviewText}</p>
                </card>
              </div>
            ) : review.styleLayout === 3 ? (
              <div
                key={id}
                style={{
                  backgroundImage: `url(${review.imageSrc})`,
                  backgroundPosition: '70% 50%',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  padding: '1rem',
                  height: '100%',
                }}
              >
                <card
                  className={classNames(styles.stripe)}
                  style={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    boxSizing: 'border-box',
                    padding: '1rem',
                    color: 'black',
                    backgroundColor: 'white',
                    paddingLeft: '2.5rem',
                  }}
                >
                  <h2
                    style={{
                      color: '#860100',

                      textAlign: 'left',
                      fontFamily: 'mbankbold',
                    }}
                  >
                    {review.employeeName}
                  </h2>
                  <h4 style={{ margin: 0 }}>{review.subHeader}</h4>
                  <p style={{ textAlign: 'left' }}>{review.reviewText}</p>
                </card>
              </div>
            ) : null
          )}
        </Carousel>
      </section>
      <section className={classNames(styles.main, styles.mobileCarousel)}>
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          dynamicHeight={true}
          showThumbs={false}
          showStatus={false}
          interval={8000}
        >
          {reviews.map((review, id) => (
            <div
              key={id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <card
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  padding: '1rem',
                }}
              >
                {review.subHeader === '6 lat w mBanku' ||
                review.subHeader === '3 lata w mBanku' ? (
                  <card
                    style={{
                      backgroundImage: `url(${review.imageSrc})`,
                      backgroundPosition: '90% 40%',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      height: '350px',
                      width: '100%',
                    }}
                  ></card>
                ) : (
                  <card
                    style={{
                      backgroundImage: `url(${review.imageSrc})`,
                      backgroundPosition: '60% 30%',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      height: '400px',
                      width: '100%',
                    }}
                  ></card>
                )}

                <h2 style={{ textAlign: 'left', fontFamily: 'mbankbold' }}>
                  {review.employeeName}
                </h2>
                <h4>{review.subHeader}</h4>
                <p style={{ textAlign: 'left' }}>{review.reviewText}</p>
              </card>
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default EmployeeReview;
