import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TabNavigator from './TabNavigator';
import { Store } from './Store/Store';
import { Provider } from 'react-redux';


<Provider store={Store}>
    <TabNavigator></TabNavigator>
</Provider>

export default createAppContainer(TabNavigator);
