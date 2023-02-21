import styles from './styles.module.scss';

export default function Team() {
  return (
    <div
      className={styles.team}
      data-aos='fade-in'
      data-aos-delay='50'
      data-aos-duration='3000'
      id='team'
    >
      <h1>Team</h1>
      <div className={styles.row}>
        <div
          className={styles.card}
          data-aos='fade-right'
          data-aos-delay='50'
          data-aos-duration='2500'
        >
          <img src='/mini bots lg.png' alt='' />
          <h3>di praise</h3>
          <p>Developer</p>
        </div>
        <div
          className={styles.card}
          data-aos='fade-up'
          data-aos-delay='50'
          data-aos-duration='2500'
        >



          <img
          src='/mini bots lg.png' alt='' />
          <h3>Black ayo</h3>
          <p>Design</p>
        </div>
        <div
          className={styles.card}
          data-aos='fade-left'
          data-aos-delay='50'
          data-aos-duration='2500'
        >
          <img src='/mini bots lg.png' alt='' />
          <h3>vont</h3>
          <p>Manager</p>
        </div>
      </div>
    </div>
  );
}
