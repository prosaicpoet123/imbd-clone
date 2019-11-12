import React from 'react';
// import Layout from '../containers/Layout';
import List from '../components/List';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Provider from './provider';

const Index = () => (
  <Provider>
    <Header />
    <List />
    <Footer />
  </Provider>
);

export default Index;
