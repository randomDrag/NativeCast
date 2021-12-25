import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';


const Stack = createStackNavigator();

export class Route extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <SafeAreaProvider>
            <NavigationContainer>
              <Stack.Navigator>
              <Stack.Screen name='Home' component={Home} />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Route)
