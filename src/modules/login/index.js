import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shown: true
        }
    }

    render = () => {
        return (
            <View style={styles.container}>
                <Button title={'Go to home'} onPress={()=> this.props.navigation.navigate('Home')}/>
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

export default Login;