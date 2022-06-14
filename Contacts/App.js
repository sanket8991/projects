import React from 'react';

import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import indexScreen from './src/screens/indexScreen';

import { Provider } from './src/context/ContactContext';

import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator= createStackNavigator(
  {
    Index: indexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  }

, {
  initalRouteName: 'Index',
  defaultNavigationOptions: {
    title:'Contacts'

  }

});

const App = createAppContainer(navigator);

export default () => {
  return(
    <Provider>
      <App/>
    </Provider>
  ) 
};


