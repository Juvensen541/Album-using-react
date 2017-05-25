// place code in here for IOS!!

/// import a libery to help create a compent
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

///create a compent

const App = () => {
  return(
    <Header />
  );
};

//Render it to the device
AppRegistry.registerComponent('albums', () => App );

