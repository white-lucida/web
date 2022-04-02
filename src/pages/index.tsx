import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <>
      <Button variant='contained'>おすすめユーザー</Button>
      <Typography variant='h1'> </Typography>
      <Typography variant='h2'>おすすめユーザー</Typography>
    </>
  );
};

export default Home;
