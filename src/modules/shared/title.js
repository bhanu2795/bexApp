import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import THEME_CONFIG from '../../themes/theme';

const Title = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontFamily: THEME_CONFIG.fontProp.fontFamily.bold.normal,
        fontSize: 25,
        fontWeight: '900'
    }
});

export default Title;