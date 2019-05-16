import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from './search';
import Title from './title';
import THEME_CONFIG from '../../themes/theme';
import Input from './Input';
import Ripple from 'react-native-material-ripple';

const NavBar = (props) => {

    const currentTab = props.navigation.state.routes[props.navigation.state.index].routes[props.navigation.state.routes[props.navigation.state.index].index].routeName;
    
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={{ flex: 1, position: 'relative' }}>
                <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, elevation: 8, backgroundColor: '#673ab6' }}>
                    <View style={styles.container}>
                        {
                            currentTab !== 'Home'
                            ? <Title title={currentTab} />
                            : <Search />
                        }
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 0.1,
        backgroundColor: '#673ab6',
        shadowColor: '#8059c3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        alignItems: 'center'
    },
    formInputs: {
        width: '100%',
        fontSize: 21,
        color: '#fff',
        padding: 10,
        paddingBottom: 5,
        paddingTop: 5
    },
});

export default NavBar;