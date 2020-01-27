import React from 'react'
import { View, TouchableNativeFeedback, Text } from 'react-native'
import styles from '../Styles/TouchableButtonsStyles'
import Icon from 'react-native-vector-icons/Feather'

const symbols = [
    {
        value: '1',
    },
    {
        value: '2',
    },
    {
        value: '3',
    },
    {
        value: '4',
    },
    {
        value: '5',
    },
    {
        value: '6',
    },
    {
        value: '7',
    },
    {
        value: '8',
    },
    {
        value: '9',
    },
    {
        value: 'OK',
    },
    {
        value: '0',
    },
    {
        value: 'del',
        component: <Icon name="delete" color='#fff' size={35} />
    },
];

const rowCount = 4;

const columnsCount = symbols.length / rowCount;

const TouchableButtons = ({ setSymbol }) => {
    return (
        <View style={styles.mainView}>
            {
                Array(rowCount).fill(null).map((val, index) => {
                    const startIndex = index * columnsCount;
                    return (
                        <View key={index} style={styles.symbolsRow}>
                            {
                                symbols.slice(startIndex, startIndex + columnsCount).map(({ value, component = value }) => {
                                    return (
                                        <View key={value} style={styles.symbolView}>
                                            <TouchableNativeFeedback
                                                onPress={() => setSymbol(value)}
                                                background={TouchableNativeFeedback.Ripple('#bdc3c7')}>
                                                <View style={styles.touchBtn}>
                                                    <Text style={styles.btnText}>{component}</Text>
                                                </View>
                                            </TouchableNativeFeedback>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    )
                })
            }
        </View >
    )
}

export default TouchableButtons