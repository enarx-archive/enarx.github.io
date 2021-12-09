import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '100% Open Source',
    Svg: require('../../static/img/opensource.svg').default,
    description: (
      <>
        Enarx is the leading open source framework for running applications in TEEs (Trusted
        Execution Environments). It&apos;s part of the Confidential Computing Consortium from the
        Linux Foundation.
      </>
    ),
  },
  {
    title: 'Easy Deployment',
    Svg: require('../../static/img/deploy.svg').default,
    description: (
      <>
        Enarx provides a run-time TEE based on WebAssembly, allowing developers to deploy
        applications without any rewrites from languages like Rust, C/C++, C#, Go, Java, Python,
        Haskell and many more.
      </>
    ),
  },
  {
    title: 'Cloud Native, Hardware Neutral',
    Svg: require('../../static/img/cloudnative.svg').default,
    description: (
      <>
        Enarx is CPU-architecture independent, letting developers deploy the same application code
        transparently across multiple targets. It provides a single run-time and attestation
        framework which is hardware vendor and CSP neutral.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
