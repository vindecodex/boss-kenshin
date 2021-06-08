import Head from 'next/head';
import styles from '../tones/About.module.scss';

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.info}>
        <h1 className={styles.myName}>Vincent Amistoso Villaluna</h1>
        <small>Software Engineer</small>
      </div>
      <hr />
      <div className={styles.myQoute}>
        <p>
          " Programming is an experience with art, that's why design patterns we're created!
            You will solve Problems with experience and design implementations with art. "
        </p>
        <small>- Vincent Amistoso Villaluna -</small>
      </div>
      <hr/>
      <div className={styles.links}>
        <ul>
          <li><a target="_blank" rel="noopener" href="https://github.com/vindecodex">&lt; Github /&gt;</a></li>
          <li><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/vincent-villaluna-491b51118/">&lt; Linkedin /&gt;</a></li>
          <li><a target="_blank" rel="noopener" href="#">&lt; Resume /&gt;</a></li>
          <li><a target="_blank" rel="noopener" href="mailto:villalunavincent@gmail.com">&lt; Email /&gt;</a></li>
        </ul>
      </div>
    </>
  )
}

export default About;
