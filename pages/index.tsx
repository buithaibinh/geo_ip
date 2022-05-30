import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Geo IP to location</title>
        <meta name='description' content='Geo IP to location' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Geo IP to location API</h1>
      </main>
    </div>
  );
};

export default Home;
