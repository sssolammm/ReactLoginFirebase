import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TabNavigator from '../TabNavigator';

class SignIn extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SingIn!</Text>
      </View>
    );
  }
}

export default SignIn;