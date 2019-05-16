import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ripple from 'react-native-material-ripple';
import THEME_CONFIG from '../../../themes/theme';
import { getPlatform } from '../../../utils/misc';
class Funds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shown: true
        }
    }

    render = () => {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={[styles.container, getPlatform() === 'ios' ? { marginTop: 60 } : { marginTop: 10 }]}>
                    <View style={{ marginBottom: 5, backgroundColor: '#fff', width: '100%', alignItems: 'center', paddingBottom: 10, paddingTop: 10, borderBottomWidth: 2, borderTopWidth: 1, borderColor: '#fafafa' }}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 5 }}>
                            <View style={{ paddingRight: 5 }}>
                                <Text style={{ fontFamily: THEME_CONFIG.fontProp.fontFamily.regular, fontSize: 12, color: '#000' }}>Estimated Value(BTC)</Text>
                            </View>
                            <View>
                                <FontAwesome5 name={'eye'} size={20} color="#ccc" />
                            </View>
                        </View>
                        <View style={{ width: '100%', alignItems: 'center', marginBottom: 10 }}>
                            <View>
                                <Text style={{ fontFamily: THEME_CONFIG.fontProp.fontFamily.bold.normal, fontSize: 30, color: '#000' }}>0.08496687 BTC</Text>
                            </View>
                            <View>
                                <Text style={{ fontFamily: THEME_CONFIG.fontProp.fontFamily.light.normal, color: '#A9A9A9' }}>= $ 501.05</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                            <Ripple>
                                <View style={{ padding: 10, borderColor: '#ccc', borderWidth: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name={'download'} size={20} color="#ccc" />
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <TouchableOpacity activeOpacity={1}>
                                            <Text style={styles.textStyle}>Deposit</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Ripple>
                            <Ripple>
                                <View style={{ padding: 10, borderColor: '#ccc', borderWidth: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name={'upload'} size={20} color="#ccc" />
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <TouchableOpacity activeOpacity={1}>
                                            <Text style={styles.textStyle}>Withdrawal</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Ripple>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#fff', width: '100%', alignItems: 'center', paddingBottom: 10, paddingTop: 10, borderBottomWidth: 2, borderTopWidth: 1, borderColor: '#fafafa' }}>
                        <View>
                            
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fafafa'
    },
    textStyle: {
        fontFamily: THEME_CONFIG.fontProp.fontFamily.light.normal
    }
});

export default Funds;