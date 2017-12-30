// import libraries to help create a component
import React from 'react';
import ReactNative from 'react-native';

// create a component
const App = () => {
  return (
    <Text> lorem ipsum </Text>
  );
};

// render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);
