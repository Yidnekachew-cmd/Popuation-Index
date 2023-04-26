import React from 'react';
import CountryList from '../components/Home/CountryList';
import Header from '../components/Header';

const Home = () => (
  <div>
    <Header name="Population Index" returnPage={false} />
    <CountryList />
  </div>
);

export default Home;
