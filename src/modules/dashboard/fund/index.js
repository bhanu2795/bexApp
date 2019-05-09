import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Funds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shown: true
        }
    }

    render = () => {
        return (
            <View style={styles.container}>
                <Text>Funds</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
});

export default Funds;