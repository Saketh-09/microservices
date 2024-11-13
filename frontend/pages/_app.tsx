// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css'; // Global styles (optional)

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
