import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

import { Provider } from 'react-redux';
import store from './src/redux/store';

const navigator= createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  }

, {
  initalRouteName: 'Index',
  defaultNavigationOptions: {
    title:'Contacts',
    headerTitleStyle:{marginBottom:5}

  }

});

const App = createAppContainer(navigator);

export default () => {
  return(
    <Provider store= {store}>
      <App/>
    </Provider>
  ) 
};


