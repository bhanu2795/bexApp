import React from 'react';
import { View, TextInput, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Input = (
    {
        value,
        autoCapitalize,
        changeText,
        placeholder,
        secureTextEntry,
        error,
        errorStyles,
        onSubmitEditing,
        rel,
        placeholderColor,
        returnKeyType,
        keyboardType,
        newStyles,
        autoFocus,
        multiline,
        blurOnSubmit,
        maxLength,
        pointerEvents
    }) => {
        
        const { textInput, errorStyle } = InputFieldStyles;

    return (
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    ref={rel}
                    returnKeyType={returnKeyType}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    onSubmitEditing={onSubmitEditing}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderColor}
                    autoCorrect={false}
                    value={value}
                    onChangeText={changeText}
                    underlineColorAndroid={'transparent'}
                    blurOnSubmit={blurOnSubmit ? blurOnSubmit : true}
                    autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
                    style={error ? '' : (newStyles ? newStyles : textInput)}
                    autoFocus={autoFocus}
                    multiline={multiline}
                    maxLength={maxLength}
                    pointerEvents={pointerEvents ? pointerEvents : null}
                />
            </View>
    );
};

const InputFieldStyles = {
    inputHeight: {
        height: 50
    },
    textInput: {
        height: 50,
        backgroundColor: 'transparent',
        color: 'grey',
        paddingHorizontal: 8,
        borderRadius: 15
    },
    errorStyle: {
        height: 35,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 2,
        color: '#000',
        paddingHorizontal: 8
    },
    requireField: {
        color: 'red'
    }
};

export default Input;