/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './ExpertsBlogPost.module.scss';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

export const ExpertsBlogPost = ({
  headerImage,
  title,
  textContent,
  linkedInUrls,
  spotifyUrl,
  googlePodcastUrl,
  applePodcastUrl,
  callToActionText,
  buttonUrl,
  readOnLinkedin,
  headerVideo,
  isAnalyticsCookieConsent,
  isMarketingCookieConsent,
}) => {
  const transformYoutubueUrlToEmbedUrl = (url) => {
    if (url?.includes('watch?v=')) {
      const transformedUrl = url?.replace('watch?v=', 'embed/');
      const transformedUrlWithoutChannel =
        transformedUrl?.split('&ab_channel=')[0];
      return transformedUrlWithoutChannel;
    } else {
      return url;
    }
  };

  const shareLink = () => {
    if (headerVideo?.[0]) {
      return transformYoutubueUrlToEmbedUrl(headerVideo?.[0]);
    }
    if (readOnLinkedin) {
      return readOnLinkedin;
    }
    return spotifyUrl;
  };

  return (
    <div className={classNames(styles.experts_blog_wrapper, 'grid-item')}>
      {!headerVideo &&
        (headerImage ? (
          <img
            src={headerImage}
            alt="mbank experts blog post header image"
            width="100%"
          />
        ) : (
          <div className={styles.experts_blog_header_placeholder} />
        ))}
      {isAnalyticsCookieConsent &&
        isMarketingCookieConsent &&
        headerVideo?.map((video, index) => (
          <iframe
            key={index}
            className={styles.experts_video}
            src={transformYoutubueUrlToEmbedUrl(video)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}

      {headerVideo &&
        (!isAnalyticsCookieConsent || !isMarketingCookieConsent) && (
          <div className={styles.experts_video_cookies}>
            <img alt="cookies non consent" src="/cookies-no.svg" />
            <p style={{ fontSize: '12px' }}>
              Nie możemy Ci pokazać wideo na stronie bez Twojej zgody na
              ciasteczka analityczne i marketingowe. Wynika to z ograniczeń
              technicznych. Zmień zgodę w{' '}
              <a
                style={{ textDecoration: 'underline' }}
                passhref="true"
                href="javascript:mbiscuit.open()"
              >
                Ustawieniach cookie
              </a>{' '}
              lub obejrzyj film bezpośrednio na{' '}
              <a
                href={headerVideo}
                passhref="true"
                rel="noreferrer"
                target={'_blank'}
                style={{ textDecoration: 'underline' }}
              >
                Youtube.
              </a>
            </p>
          </div>
        )}
      <img src="/mbank-color-bar-big.png" alt="mbank color bar" width="100%" />

      <div className={classNames(styles.experts_blog_content)}>
        {(spotifyUrl || googlePodcastUrl || applePodcastUrl) && (
          <div className={styles.experts_blog_podcasts_wrapper}>
            {spotifyUrl && (
              <a href={spotifyUrl} target="_blank" rel="noreferrer">
                <img
                  className={styles.experts_blog_listen_img}
                  src="/listen-on-spotify.png"
                  alt="listen on spotify icon"
                />
              </a>
            )}
            {googlePodcastUrl && (
              <a href={googlePodcastUrl} target="_blank" rel="noreferrer">
                <img
                  className={styles.experts_blog_listen_img}
                  src="/listen-on-google-podcast.png"
                  alt="listen on google podcasts icon"
                />
              </a>
            )}
            {applePodcastUrl && (
              <a href={applePodcastUrl} target="_blank" rel="noreferrer">
                <img
                  className={styles.experts_blog_listen_img}
                  src="/listen-on-apple-podcast.png"
                  alt="listen on apple podcasts icon"
                />
              </a>
            )}
          </div>
        )}
        <h2 className={classNames(styles.experts_blog_h2)}>{title}</h2>
        <Markdown
          options={{
            overrides: {
              p: {
                props: {
                  className: styles.experts_blog_p,
                },
              },
              span: {
                props: {
                  className: styles.experts_blog_p,
                },
              },
            },
          }}
        >
          {textContent}
        </Markdown>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          {linkedInUrls?.map((url, index) => (
            <a
              key={index}
              href={url.split(' ')[2]}
              target="_blank"
              rel="noreferrer"
              className={classNames(styles.experts_blog_linkedin_url_a)}
            >
              <img
                className={styles.experts_blog_linkedin_url_img}
                src="/linkedin-url.png"
                alt="linkedin logo icon"
              />
              <span className={styles.experts_linkedin_name}>
                {url.split(';')[0]}
              </span>
            </a>
          ))}
        </div>

        {readOnLinkedin && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            className={
              styles.experts_blog_share_buttons_wrapper_read_on_linkedin
            }
          >
            <h6>Przeczytaj na LinkedIn</h6>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <a href={readOnLinkedin} target="_blank" rel="noreferrer">
                <img
                  className={styles.experts_blog_share_img_linkedin}
                  src="/read_on_linkedin.png"
                  alt="read on linkedin icon"
                />
              </a>
            </div>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          className={styles.experts_blog_share_buttons_wrapper}
        >
          <h6>Udostępnij</h6>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink()}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.experts_blog_share_img}
                src="/share-facebook.png"
                alt="facebook logo icon"
              />
            </a>
            <a
              href={`http://www.linkedin.com/shareArticle?mini=true&url=${shareLink()}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.experts_blog_share_img}
                src="/share-linkedin.png"
                alt="linkedin logo icon"
              />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${shareLink()}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.experts_blog_share_img}
                src="/share-twitter.png"
                alt="twitter logo icon"
              />
            </a>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <h6>{callToActionText}</h6>
          <a href={buttonUrl} target="_blank" rel="noreferrer">
            <button className={styles.btn}>aplikuj</button>
          </a>
        </div>
      </div>
    </div>
  );
};
