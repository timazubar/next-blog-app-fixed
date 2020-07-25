import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import store from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = (props: { Component: any; pageProps: any; store: any }) => {
  const { Component, pageProps, store } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  return {
    pageProps: {
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    },
  };
};

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
