// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { SignIn, LogIn, Home } from './Components/index';
import IconWithBadge from './IconWithBadge';

export default createBottomTabNavigator(
  {
    SignIn: SignIn,
    LogIn: LogIn,
    Home: Home,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'SignIn') {
          iconName = `ios-information-circle`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          //IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'LogIn') {
          iconName = `ios-options`;
        } else if (routeName === 'Home') {
          iconName = `ios-home`;
        }

        // You can return any component that you like here!
        // return <IconComponent name={iconName} size={25} color={tintColor} />;
        return <IconWithBadge name={iconName} size={25} color={tintColor} badgeCount={3} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);