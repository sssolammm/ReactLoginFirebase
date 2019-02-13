// import React from 'react';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import TabNavigator from './TabNavigator';
// import { Store } from './Store/Store';
// import { Provider } from 'react-redux';


// <Provider store={Store}>
//     <TabNavigator></TabNavigator>
// </Provider>

// export default createAppContainer(TabNavigator);

import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TabNavigator from './TabNavigator';
import { Store } from './Store/Store';
import { Provider } from 'react-redux';

const Nav = createAppContainer(TabNavigator);

export default class App extends React.Component {

  render() {
    return (
        <Provider store={Store}>
        <View style={{flex:1, backgroundColor:'white'}}>
            <Nav />
        </View>
        </Provider>
    );
  }
}
