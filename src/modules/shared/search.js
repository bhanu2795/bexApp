import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import THEME_CONFIG from '../../themes/theme';
import Input from './Input';
import Ripple from 'react-native-material-ripple';

const Search = () => {
    return (
        <View style={{ flex: 1, marginRight: 30, marginLeft: 30, backgroundColor: '#8E71C3', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ marginRight: 10, marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name='search-web' style={{ alignItems: 'center', justifyContent: 'center' }} size={40} color={'#fff'} />
            </View>
            <TouchableOpacity onPress={() => alert('Pressed')}>
                <Input placeholder={'Search'} pointerEvents={'none'} placeholderColor={'#fff'} newStyles={styles.formInputs} returnKeyType={'search'} secureTextEntry={false} autoFocus={false} maxLength={10} blurOnSubmit={false} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 60,
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

export default Search;