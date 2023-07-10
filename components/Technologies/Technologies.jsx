import React, { useEffect } from 'react';
import styles from './Technologies.module.scss';
import classNames from 'classnames';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

const Technologies = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let header = document.querySelector('#technologyHeader');

    gsap.fromTo(
      header.children,
      { y: '-=50', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,

        ease: 'easeInOut',
        scrollTrigger: {
          trigger: '#Technologies',
          start: '-600px',
          end: '100px',
          // scrub: 0.5,
          // markers: true,
        },
      },
    );
  }, []);

  return (
    <section
      id="Technologies"
      className={classNames(styles.technologiesHolder, styles.darkSection)}
    >
      <div className={classNames(styles.main)}>
        <div
          id="technologyHeader"
          className={classNames(styles.chapterHeaderHolder)}
        >
          <img src="./technologies-header.svg" alt="gears icon" />
          <h2 className={classNames(styles.chapterHeader)}>technologie</h2>
        </div>
        <div>
          <img
            className={classNames(styles.imgTechnology)}
            src="/tools.png"
            alt="tools"
          />
          <img
            className={classNames(styles.smallImgTechnology)}
            src="/toolsSmall.png"
            alt="tools"
          />
          <p className={classNames(styles.technologyDescription)}>
            <b>Ansible</b>, Artifactory, Bitbucket, ControlM for Win, Grafana,
            Dynatrace, SonarQube, <b>Splunk, JIRA, Teamcity, Testlink,</b>{' '}
            Visual Studio, Prometheus/Victoria, Xray Infra, <b>Jenkins</b>
          </p>
        </div>
        <div>
          <img
            className={classNames(styles.imgTechnology)}
            src="/framework-platform.png"
            alt="framework platform"
          />
          <img
            className={classNames(styles.smallImgTechnology)}
            src="/frameworkSmall.png"
            alt="framework platform"
          />
          <p className={classNames(styles.technologyDescription)}>
            Xamarin, Firebase+HMS, Mobile PowerShell, Ent.Framework Core,{' '}
            <b>React</b>, Microsoft Dynamics AX, <b>.NET Core,</b>{' '}
            <b>.NET Framework, Android, Angular</b>, SignalR Core, Selenium,
            Sharepoint, <b>Ferryt</b>
          </p>
        </div>
        <div>
          <img
            className={classNames(styles.imgTechnology)}
            src="/programming-lang.png"
            alt="programming languages"
          />
          <img
            className={classNames(styles.smallImgTechnology)}
            src="/programmingLangSmall.png"
            alt="programming languages"
          />
          <p className={classNames(styles.technologyDescription)}>
            <b>C#</b>, Python, F#, <b>Swift, Java</b>, Kotlin, Cobol,
            <b> JavaScript</b>, jBASIC
          </p>
        </div>
        <div>
          <img
            className={classNames(styles.imgTechnology)}
            src="/data-management.png"
            alt="data management"
          />
          <img
            className={classNames(styles.smallImgTechnology)}
            src="/dataMgmtSmall.png"
            alt="data management"
          />
          <p className={classNames(styles.technologyDescription)}>
            <b>Power BI, Oracle</b>, Scikit, Tensorflow,{' '}
            <b>Apache&nbsp;Kafka</b>, Pandas, <b>Confluence</b>, Elasticsearch,{' '}
            <b>Spark, MSSQL</b>, PostgreSQL, <b>Hadoop, Informatica</b>, jBASE,
            Sybase
          </p>
        </div>
        <div>
          <img
            className={classNames(styles.imgTechnology)}
            src="/infrastructure.png"
            alt="infrastructure"
          />
          <img
            className={classNames(styles.smallImgTechnology)}
            src="/infrastructureSmall.png"
            alt="infrastructure"
          />
          <p className={classNames(styles.technologyDescription)}>
            <b>Open community K8s</b>, Azure AKS, AWS EKS, <b>VMWare, NSX-T</b>,
            Azure AWS, Office365, Docker, <b>HA MSSQL Cluster, Microsoft</b>,
            RedHat, <b>Cisco, SD-WAN, F5</b>, Arista, APM/NPM, Synerise, Zabbix
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
