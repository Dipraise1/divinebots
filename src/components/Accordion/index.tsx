import Link from 'next/link';
import styles from './styles.module.scss';

export default function Accordion() {
  return (
    <div
      className={styles.accordion}
      data-aos='zoom-in-up'
      data-aos-delay='50'
      data-aos-duration='2500'
      id='faqs'
    >
      <h1>FAQs</h1>
      <div className={styles.card}>
        <details className={styles.warning}>
          <summary>
            What blockchaain are we on ? <span>+</span>
          </summary>
          <p>join the community and let us know what you prefer </p>
        </details>
        <details className={styles.warning}>
        <summary>
            whats the utility like ? <span>+</span>
          </summary>
          <p>stay tuned chad  </p>
        </details>

        <details>
          <summary>
            is there a discord community ?<span>+</span>
          </summary>
          <Link href=''> yes please click the link to join </Link>
        </details>

        <details className={styles.alert}>
          <summary>
            what are our socials ? <span>+</span>
          </summary>
          <Link href='https://gomestzx.github.io'> gomestzx.github.io </Link>
          <Link href='https://capfinanceira.com.br'>capfinanceira.com.br</Link>
          <Link href='https://github.com/gomestzx/covidapp'> CovidApp </Link>
        </details>
      </div>
    </div>
  );
}
