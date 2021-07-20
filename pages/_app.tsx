import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
// local
import { theme } from '@md-styles/styled/theme';
import { GlobalStyles } from '@md-styles/styled/global';
// global css
import 'normalize.css/normalize.css';
import { BasketProvider } from '@md-modules/basket/layers';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { cookiesManager } from 'modules/shared/cookies/index';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { getToken } = cookiesManager();
  const token: string | undefined = pageProps.serverToken ?? getToken();
  const apolloClient = useApollo(pageProps.initialApolloState, token);
  return (
    <>
      <Head>
        <title>Cultum Starter Kit</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <meta charSet='utf-8' />
      </Head>
      <ApolloProvider client={apolloClient}>
        <BasketProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </BasketProvider>
      </ApolloProvider>
      <GlobalStyles />
    </>
  );
};

export default MyApp;
