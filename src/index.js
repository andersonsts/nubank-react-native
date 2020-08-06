import React, {useEffect} from 'react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => {
  useEffect(() => {
    changeNavigationBarColor('#8b10ae', true, false);
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#8b10ae" barStyle="light-content" />
      <Routes />
    </>
  );
};

export default App;
