import React from 'react';
import { Animated, Easing } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NavBar from '../modules/shared/navBar';
import TabNavigator from '../modules/dashboard/routes/routing';
import Login from '../modules/login';
import THEME_CONFIG from '../themes/theme';

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps

            const thisSceneIndex = scene.index
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            })

            return { transform: [{ translateX }] }
        },
    }
}

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        },
    },
    Home: {
        screen: TabNavigator,
        navigationOptions: {
            header: <NavBar />,
        }
    }
}, {
    initialRouteName: 'Login',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontSize: THEME_CONFIG.fontProp.lgFont,
            fontFamily: THEME_CONFIG.fontProp.fontFamily.regular
        },
        headerTruncatedBackTitle: null,
        },
        transitionConfig,
    });

const Navigator = createAppContainer(AppNavigator);

export default Navigator;