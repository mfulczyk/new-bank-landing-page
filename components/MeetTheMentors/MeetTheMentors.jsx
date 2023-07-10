import React, { useEffect, useState } from 'react';
import styles from './MeetTheMentors.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { mentors } from './mentors';
import Link from 'next/link';

const MeetTheMentors = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let header = document.querySelector('#MeetTheMentors');
    let subHeader = document.querySelector('#MeetTheMentorsSubHeader');

    // let targets = gsap.utils.toArray('#test');
    // let container = gsap.utils.toArray('#highlightedMentorInfoHolder');
    // container.anim = gsap.to(container, { opacity: 1 }).reversed(true);
    // targets.forEach((obj) => {
    //   obj.anim = gsap.to(obj, { opacity: 1 }).reversed(true);
    //   obj.addEventListener('click', doCoolStuff);
    // });

    // function doCoolStuff() {
    //   this.anim.reversed(!this.anim.reversed());
    // }

    gsap.fromTo(
      header.children,
      { y: '-=50', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,

        ease: 'easeInOut',
      },
    );
    gsap.fromTo(
      subHeader.children,
      { y: '-=50', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,

        ease: 'easeInOut',
      },
    );
  }, []);

  const [bankMentors, setBankMentors] = useState([]);
  const [highlightedMentor, setHighlightedMentor] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setBankMentors(mentors);
    setHighlightedMentor(mentors[0]);
  }, []);

  const handleClick = (mentor) => {
    window.location.href = '#highlightedMentorInfoHolder';

    setHighlightedMentor(mentor);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 500);
  };

  return (
    <>
      <section id="MeetTheMentors" className={classNames(styles.hero)}>
        <div className={classNames(styles.main)}>
          <article
            id="MeetTheMentorsSubHeader"
            className={classNames(styles.itKampusHeader)}
          >
            <h2>poznaj</h2>
            <p>opiekunów staży</p>
          </article>
          <div
            id="highlightedMentorInfoHolder"
            style={{
              scrollMarginTop: '100px',
            }}
            className={classNames(
              styles.highlightedMentorInfoHolder,
              clicked ? styles.testClass : null,
            )}
          >
            <span
              className={classNames(styles.overlappingName)}
              style={{
                backgroundColor:
                  highlightedMentor.bgColor === 'red'
                    ? '#e90c09'
                    : highlightedMentor.bgColor === 'yellow'
                    ? '#ff8700'
                    : highlightedMentor.bgColor === 'blue'
                    ? '#0166b1'
                    : highlightedMentor.bgColor === 'darkRed'
                    ? '#ad0200'
                    : highlightedMentor.bgColor === 'green'
                    ? '#028521'
                    : '#e90c09',
              }}
            >
              {highlightedMentor.name}
            </span>
            <div className={classNames(styles.highlightedMentorPhoto)}>
              <img
                width="100%"
                height="100%"
                src={
                  highlightedMentor.photo
                    ? `/${highlightedMentor.photo}`
                    : '/mass_human.svg'
                }
                alt={highlightedMentor.name}
              />
            </div>
            <div className={classNames(styles.highlightedMentorInfo)}>
              <h3>
                Imię i nazwisko: <span>{highlightedMentor.name}</span>
              </h3>
              <h3>
                Zespół: <span>{highlightedMentor.team}</span>
              </h3>
              <h3>
                Stanowisko: <span>{highlightedMentor.jobTitle}</span>
              </h3>

              <h3>
                Poza pracą: <span>{highlightedMentor.afterWork}</span>
              </h3>

              {highlightedMentor?.linkedinLink && (
                <a
                  className={classNames(styles.linkedinLink)}
                  href={highlightedMentor.linkedinLink}
                >
                  <img
                    style={{ marginRight: '10px' }}
                    height="30px"
                    src="/linkedinMentor.png"
                    alt="linkedin icon"
                  />{' '}
                  Profil na LinkedIn
                </a>
              )}
            </div>
          </div>

          <div className={classNames(styles.carouselPhotos)}>
            {bankMentors.map((mentor, index) => (
              <button
                id="test"
                className={classNames(
                  styles.carouselPhotoButton,
                  mentor.bgColor === 'red'
                    ? `${styles.red}`
                    : mentor.bgColor === 'yellow'
                    ? `${styles.yellow}`
                    : mentor.bgColor === 'blue'
                    ? `${styles.blue}`
                    : mentor.bgColor === 'darkRed'
                    ? `${styles.darkRed}`
                    : mentor.bgColor === 'green'
                    ? `${styles.green}`
                    : null,
                )}
                onClick={() => handleClick(mentor)}
                key={index}
              >
                <img
                  className={classNames(styles.carouselPhoto)}
                  src={mentor.photo ? `/${mentor.photo}` : '/mass_human.svg'}
                  alt={mentor.name}
                  style={{
                    transform:
                      mentor.photo === 'waldemar.jpeg' ||
                      mentor.photo === 'przemyslaw.jpeg' ||
                      mentor.photo === 'olga.jpeg'
                        ? 'scaleX(-1)'
                        : 'none',
                    backgroundColor: mentor.photo ? 'none' : '#d5d5d5',
                  }}
                />
              </button>
            ))}
          </div>
          <article
            id="mchSubHeader"
            className={classNames(styles.itKampusHeader)}
          >
            <h2>Czy to już czas na</h2>
            <p>Twój pierwszy kampus w IT?</p>
          </article>
          <Link passHref href="/kampus-it/#ChooseYourTeam">
            <button className={classNames(styles.btn)}>Tak, aplikuję!</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default MeetTheMentors;
