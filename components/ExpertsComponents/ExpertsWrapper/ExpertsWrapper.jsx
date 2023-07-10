import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { ExpertsBlogPost } from '../ExpertsBlogPost';
import { ExpertsHero } from '../ExpertsHero';
import Masonry from 'react-masonry-component';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import styles from './ExpertsWrapper.module.scss';
// import { posts } from './posts.js';
// const util = require('util');

var contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.space,
  accessToken: process.env.accessToken,
});

export const ExpertsWrapper = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isAnalyticsCookieConsent, setAnalyticsCookieConsent] = useState(false);
  const [isMarketingCookieConsent, setMarketingCookieConsent] = useState(false);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'postsContainer',
      })
      .then(function (entries) {
        // log the title for all the entries that have it
        entries.items.forEach(function (entry) {
          if (entry.fields.productName) {
          }
        });

        // console.log(entries?.items?.[0]?.fields?.test);
        const filterUnpublished = entries?.items?.[0]?.fields?.test?.filter(
          (post) => post.sys.revision > 0,
        );
        setBlogPosts(filterUnpublished);

        // console.log(
        //   util.inspect(entries?.items?.[0]?.fields?.test, {
        //     showHidden: false,
        //     depth: null,
        //     colors: true,
        //   })
        // );
      });
  }, []);

  useEffect(() => {
    if (
      document.cookie.split('gdpr_consents=')[1]?.includes('analytics%22:true')
    ) {
      setAnalyticsCookieConsent(true);
    } else {
      setAnalyticsCookieConsent(false);
    }
    if (
      document.cookie.split('gdpr_consents=')[1]?.includes('marketing%22:true')
    ) {
      setMarketingCookieConsent(true);
    } else {
      setMarketingCookieConsent(false);
    }
  }, []);

  useEffect(() => {
    var checkCookie = (function () {
      var lastCookie = document.cookie; // 'static' memory between function calls

      return function () {
        var currentCookie = document.cookie;

        if (currentCookie != lastCookie) {
          // something useful like parse cookie, run a callback fn, etc.

          lastCookie = currentCookie; // store latest cookie

          window.location.reload();
        }
      };
    })();

    window.setInterval(checkCookie, 100);
  }, []);

  useEffect(() => {
    window.addEventListener('cookieconsent:initialize', function (event) {
      console.log('initialise');
      window.addEventListener('cookieconsent:complete', function (event) {
        console.log('complete');
        window.location.reload();
      });

      window.addEventListener('cookieconsent:allow', function (event) {
        console.log('allow');
        window.location.reload();
      });

      window.addEventListener('cookieconsent:revoke', function (event) {
        console.log('revoke');
        window.location.reload();
      });
    });
  }, []);

  useEffect(() => {
    // setBlogPosts(posts);
    gsap.registerPlugin(ScrollTrigger);
    let gridTest = document.querySelector('#grid');
    const arr = Array.from(gridTest.children);
    const arrWithoutFirst = arr.slice(2);

    gsap.fromTo(
      arrWithoutFirst,
      { y: '-=5', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 0.5,
        ease: 'easeInOut',
        scrollTrigger: {
          trigger: '#grid',
          scrub: 3,
          // markers: true,
          start: '-2000px 200px',
          end: 'bottom 700px',
        },
      },
    );
  }, [blogPosts, isAnalyticsCookieConsent, isMarketingCookieConsent]);

  return (
    <div id="ExpertsHero" className={classNames(styles.main)}>
      <Masonry
        className={'grid'}
        id="grid"
        options={{
          transitionDuration: 0,
          columnWidth: '.grid-sizer',
          itemSelector: '.grid-item',
          percentPosition: true,
        }}
      >
        <div className="grid-sizer"></div>
        <ExpertsHero />

        {(blogPosts || []).map((blogPost) => (
          <ExpertsBlogPost
            key={blogPost.sys.id}
            headerImage={blogPost.fields?.headerImage?.fields?.file?.url}
            headerVideo={blogPost.fields?.youtubeHeaderUrl}
            title={blogPost?.fields?.title}
            textContent={blogPost?.fields?.content}
            linkedInUrls={blogPost?.fields?.linkedInUrLs}
            spotifyUrl={blogPost?.fields?.spotifyUrl}
            googlePodcastUrl={blogPost?.fields?.googlePodcastUrl}
            applePodcastUrl={blogPost.fields?.applePodcastUrl}
            callToActionText={blogPost.fields?.callToActionText}
            buttonUrl={blogPost.fields?.buttonUrl}
            readOnLinkedin={blogPost.fields?.readOnLinkedin}
            isAnalyticsCookieConsent={isAnalyticsCookieConsent}
            isMarketingCookieConsent={isMarketingCookieConsent}
          />
        ))}
      </Masonry>
    </div>
  );
};
