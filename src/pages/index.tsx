import type { NextPage } from 'next';
import styles from '../styles/index.module.css';
import { Heading } from '../components/ui/typography/Heading';
import { Button } from '../components/ui/button/Button';

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Button>プロフィールを編集する</Button>
    </div>
  );
};

export default Home;
