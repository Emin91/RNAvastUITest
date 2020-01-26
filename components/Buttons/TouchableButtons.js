import React, {useState} from 'react'
import { View, TouchableNativeFeedback, Text } from 'react-native'
import styles from '../Styles/TouchableButtonsStyles'
import Icon from 'react-native-vector-icons/Feather'


const TouchableButtons = () => {

    const numbers = {
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
        zero: '0',
    }


    return (
        <View style={styles.mainView}>
            <View style={styles.btnView}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bdc3c7')}>
                    <View style={styles.btnNumView}>
                        <Text style={styles.btnText}>{numbers.one}</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bdc3c7')}>
                    <View style={styles.btnNumView}>
                        <Text style={styles.btnText}>{numbers.two}</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bdc3c7')}>
                    <View style={styles.btnNumView}>
                        <Text style={styles.btnText}>{numbers.three}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

            <View style={styles.btnView}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bdc3c7')}>
                    <View style={styles.btnNumView}>
                        <Text style={styles.btnText}>4</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bdc3c7')}>
                    <View style={styles.btnNumView}>
                        <Text style={styles.btnText}>5</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bdc3c7')}>
                    <View style={styles.btnNumView}>
                        <Text style={styles.btnText}>6</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

            <View style={styles.btnView}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bdc3c7')}>
                    <View style={styles.btnNumView}>
                        <Text style={styles.btnText}>7</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bdc3c7')}>
                    <View style={styles.btnNumView}>
                        <Text style={styles.btnText}>8</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bdc3c7')}>
                    <View style={styles.btnNumView}>
                        <Text style={styles.btnText}>9</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

            <View style={styles.btnView}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bdc3c7')}>
                    <View style={styles.btnNumView}>
                        <Text style={styles.btnText}></Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bdc3c7')}>
                    <View style={styles.btnNumView}>
                        <Text style={styles.btnText}>0</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bdc3c7')}>
                    <View style={styles.btnNumView}>
                        <Icon
                            name="delete"
                            color='#fff'
                            size={30}>
                        </Icon>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>

    )
}

export default TouchableButtons