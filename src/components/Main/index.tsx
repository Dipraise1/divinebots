import Image from 'next/image';
import styles from './styles.module.scss';

export default function Main() {
  return (
    <div className={styles.container}>
      <div
        className={styles.row}
        data-aos='fade-in'
        data-aos-delay='50'
        data-aos-duration='3000'
      >
        <h1>
        MINI BOTS ERA OF NFTS<br />
          bringing a rare diffrence to the nft ecosystem 
          <br />
          welcome
        </h1>
        <div className={styles.content}>
          <p>
        join our twitter here  <a>here</a>
          </p>
          <div className={styles.btnMain} style={{ display: 'none' }}>
            <a href='/te'>
              <button type='button'>Discover</button>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.mainImg}>
          <Image
            src='/abotuimg.png'
            alt=''
            width={300}
            height={300}
            className={styles.token}
          />
          <Image
            src='/Tokenomics-1024x954.png'
            alt=''
            width={1000}
            height={400}
            className={styles.hand}
          />

          {/* <img className={styles.token} src="/token.png" alt="" data-aos="fade-in" data-aos-delay="80" data-aos-duration="3000" />
          <img className={styles.hand} src="/hand.png" alt="" data-aos="fade-left" data-aos-delay="80" data-aos-duration="3000" /> */}
        </div>
      </div>
    </div>
  );
}
