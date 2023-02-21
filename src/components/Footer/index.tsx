import styles from './styles.module.scss';

export default function Footer() {
  return (
    <div
      className={styles.footer}
      data-aos='fade-in'
      data-aos-delay='50'
      data-aos-duration='2500'
      id='contact'
    >
      <h5>
        get updates straignt on on your  <br />
        <span>Mail</span>
      </h5>
      <br></br>
      <form action=''>
        <input type='text' />
        <button type='submit'>SUBSCRIBE</button>
      </form>
      <p>MIni BOTS </p>
    </div>
  );
}
