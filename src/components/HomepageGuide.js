import React from 'react';
import clsx from 'clsx';
import styles from './HomepageGuide.module.css';

const GuideList = [
  {
    title: 'Docs',
    Svg: require('../../static/img/docs.svg').default,
    link: '/docs/Start/Introduction',
    description: (
      <>
        Learn more about Enarx. Documentation includes: Getting Started, Installation Guide,
        Contributing Guide, and Technical Overview.
      </>
    ),
  },
  {
    title: 'Resources',
    Svg: require('../../static/img/resources.svg').default,
    link: '/resources',
    description: (
      <>
        Find a list of useful resources: from articles, blog posts, podcasts, to videos. Everything
        Enarx related gathered in one place.
      </>
    ),
  },
  {
    title: 'GitHub',
    Svg: require('../../static/img/github.svg').default,
    link: 'https://github.com/enarx/enarx',
    description: (
      <>
        The source code of Enarx is available at GitHub. You&apos;ll also be able to track issues,
        bugs, pull requests, and release notes.
      </>
    ),
  },
  {
    title: 'Meetings',
    Svg: require('../../static/img/meeting.svg').default,
    link: '/meetings',
    description: (
      <>
        You are welcome to join the Enarx Daily meetings. These meetings are open to the public. If
        you are a newcomer, feel free to join and introduce yourself.
      </>
    ),
  },
  {
    title: 'Events',
    Svg: require('../../static/img/conference.svg').default,
    link: '/events',
    description: (
      <>
        The Enarx team is present at the top conferences worldwide, including Linux Security Summit,
        Open Source Summit, DevConf, and RSA Conference.
      </>
    ),
  },
  {
    title: 'Chat',
    Svg: require('../../static/img/chat.svg').default,
    link: 'https://chat.enarx.dev',
    description: (
      <>
        Join the chat at chat.enarx.dev and come say hi, read the conversations, and ask questions.
        We are happy to answer any questions you might have.
      </>
    ),
  },
];

function Guide({ Svg, title, link, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          <Svg className={styles.guideSvg} alt={title} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link}>
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageGuide() {
  return (
    <section className={styles.guide}>
      <div className="container">
        <div className="row">
          {GuideList.map((props, idx) => (
            <Guide key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
