import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import THEME_CONFIG from '../../../themes/theme';
import { getPlatform, getDeviceWidth } from '../../../utils/misc';

class Home extends Component {

    MARKET = [
        {
            name: 'BitCoin',
            symbol: 'BTC',
            value: '',
            icon: 'https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png'
        },
        {
            name: 'BitCoin Cash',
            symbol: 'BCH',
            value: '',
            icon: 'https://dynamic-assets.coinbase.com/93a4303d1b0410b79bb1feac01020e4e7bdf8e6ece68282d0af2c7d0b481c5f5c44c0cec1d7071ae8f84674dbd139e290d50a038a6a4c1bbc856ec0871b5f3e2/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png'
        },
        {
            name: 'Ethereum',
            symbol: 'ETH',
            value: '',
            icon: 'https://dynamic-assets.coinbase.com/7796fb1bd5752a156c77e0b1fa28fb17e93d03b4b8e2dcff58dcaf8f99b2e4a3c3af2cd905d5536761c54ac273d62d91a38ef8e5702fa988c37264e7aba36b3b/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png'
        },
        {
            name: 'Ethereum Classic',
            symbol: 'ETC',
            value: '',
            icon: 'https://dynamic-assets.coinbase.com/954e17be0facc99b81203f98c65bb7cdaca969f1bc8cd8b52e7feb91cbe55d7f9581066f5bbd715c2e80f3474cb166674ac0a55e30a3486c6a004d558ade8fb9/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png'
        },
        {
            name: 'Litecoin',
            symbol: 'LTC',
            value: '',
            icon: 'https://dynamic-assets.coinbase.com/f018870b721574ef7f269b9fd91b36042dc05ebed4ae9dcdc340a1bae5b359e8760a8c224bc99466db704d10a3e23cf1f4cd1ff6f647340c4c9c899a9e6595cd/asset_icons/984a4fe2ba5b2c325c06e4c2f3ba3f1c1fef1f157edb3b8ebbfe234340a157a5.png'
        },
        {
            name: 'Ox',
            symbol: 'ZRX',
            value: '',
            icon: 'https://dynamic-assets.coinbase.com/3d0b1dc2a70acb73379c2d35a1e641f4438702ce8e4a4855b5514ad2758e3f520797d3ae7a9aa675d683188302e4d09c801a5195d89382d4296933dd72217717/asset_icons/1597d628dd19b7885433a2ac2d7de6ad196c519aeab4bfe679706aacbf1df78a.png'
        }
    ];

    constructor(props) {
        super(props);
        this.state = {
            screenHeight: 0
        }
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
    };

    render = () => {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <ScrollView contentContainerStyle={styles.scrollContainer} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
                    <View style={[styles.container, getPlatform() === 'ios' ? { marginTop: 60 } : { marginTop: 10 }]}>
                        <View style={{ backgroundColor: '#fff', width: '100%', alignItems: 'center', paddingBottom: 10, paddingTop: 10, borderBottomWidth: 2, borderTopWidth: 1, borderColor: '#fafafa' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View>
                                        <AntDesign name={'solution1'} size={30} color="#ccc" />
                                    </View>
                                    <View>
                                        <Text>Support</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View>
                                        <AntDesign name={'menuunfold'} size={30} color="#ccc" />
                                    </View>
                                    <View>
                                        <Text>Favorites</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View>
                                        <AntDesign name={'download'} size={30} color="#ccc" />
                                    </View>
                                    <View>
                                        <Text>Deposit</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View>
                                        <AntDesign name={'upload'} size={30} color="#ccc" />
                                    </View>
                                    <View>
                                        <Text>Withdrawal</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#fff', width: '100%', alignItems: 'center', paddingBottom: 10, paddingTop: 10, borderBottomWidth: 2, borderTopWidth: 1, borderColor: '#fafafa', marginTop: 10 }}>
                            <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <View style={{ marginRight: 10 }}>
                                        <AntDesign name={'isv'} size={30} color="#ccc" />
                                    </View>
                                    <View>
                                        <Text>BTC 24h Volume Top</Text>
                                    </View>
                                </View>
                                <View>
                                    <AntDesign name={'right'} size={30} color="#ccc" />
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#fff', width: '100%', alignItems: 'center', paddingBottom: 10, paddingTop: 10, borderBottomWidth: 2, borderTopWidth: 1, borderColor: '#fafafa', marginTop: 10 }}>
                            <View>
                                {
                                    this.MARKET.map((prop, key) => {
                                        return (
                                            <View style={styles.cardWrapper} key={key}>
                                                <View style={styles.contentWrapper}>
                                                    <View style={{ flex: 0.5, flexDirection: 'row' }}>
                                                        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                                                            <Image style={{ width: 50, height: 50, resizeMode: 'stretch' }} source={{ uri: prop.icon }} />
                                                        </View>
                                                        <View style={{ justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                                                            <View>
                                                                <Text style={{ fontFamily: THEME_CONFIG.fontProp.fontFamily.light.normal }}>{prop.name}</Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{ fontFamily: THEME_CONFIG.fontProp.fontFamily.light.normal }}>{prop.symbol}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                                        <View style={{ flex: 0.7, backgroundColor: '#d3d3d3', padding: 12, borderRadius: 21 }}>
                                                            <Text style={{ fontFamily: THEME_CONFIG.fontProp.fontFamily.light.normal }}>US$5, 183.80</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        );
                                    })
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
    scrollContainer: {
        flex: 1,
        width: getDeviceWidth(),
        alignItems: 'center',
        borderColor: '#A9A9A9'
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    cardWrapper: {
        flex: 1,
        width: '100%',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        flexDirection: 'column'
    },
    contentWrapper: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default Home;