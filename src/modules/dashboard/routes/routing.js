import { createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import THEME_CONFIG from '../../../themes/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../home';
import Trade from '../trade';
import Funds from '../fund';
import Account from '../account';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: ({ focused, tintColor }) => <Text style={[styles.tabBarLabel, {color: tintColor, fontWeight: focused ? '700' : 'normal'}]}>Home</Text>,
            tabBarIcon: ({ tintColor }) => <Icon name='home' size={30} color={tintColor} />
        }
    },
    Trade: {
        screen: Trade,
        navigationOptions: {
            tabBarLabel: ({ focused, tintColor }) => <Text style={[styles.tabBarLabel, {color: tintColor, fontWeight: focused ? '700' : 'normal'}]}>Trade</Text>,
            tabBarIcon: ({ tintColor }) => <Icon name='shopping' size={30} color={tintColor} />
        }
    },
    Funds: {
        screen: Funds,
        navigationOptions: {
            tabBarLabel: ({ focused, tintColor }) => <Text style={[styles.tabBarLabel, {color: tintColor, fontWeight: focused ? '700' : 'normal'}]}>Funds</Text>,
            tabBarIcon: ({ tintColor }) => <Icon name='grid' size={30} color={tintColor} />
        }
    },
    Account: {
        screen: Account,
        navigationOptions: {
            tabBarLabel: ({ focused, tintColor }) => <Text style={[styles.tabBarLabel, {color: tintColor, fontWeight: focused ? '700' : 'normal'}]}>Account</Text>,
            tabBarIcon: ({ tintColor }) => <Icon name='wallet' size={30} color={tintColor} />
        }
    }
}, {
        initialRouteName: 'Home',
        animationEnabled: true,
        tabBarOptions: {
            showLabel: true, // hide labels
            inactiveTintColor: THEME_CONFIG.color.primaryColor.inactive, // inactive icon color
            activeTintColor: THEME_CONFIG.color.primaryColor.accentColor, // active icon color
            style: {
                height: 60,
                backgroundColor: THEME_CONFIG.color.common.white, // TabBar background
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    });


const styles = StyleSheet.create({
    tabBarLabel: {
        fontSize: THEME_CONFIG.fontProp.mdFont,
        textAlign: 'center',
        fontFamily: THEME_CONFIG.fontProp.fontFamily.regular
    }
});

export default TabNavigator;