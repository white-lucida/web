import type { NextPage } from 'next';
import styles from '../styles/index.module.css';
import { Heading } from '../components/ui/typography/Heading';

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Heading>おすすめユーザー</Heading>
    </div>
  );
};

export default Home;
