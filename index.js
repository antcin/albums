// Import library to help create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create component
const App = () => (
    <Header headerText={'Albums'} />
);

// Render component to device
AppRegistry.registerComponent('albums', () => App);
