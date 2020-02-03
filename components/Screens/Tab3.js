import React, { useState } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import * as colors from '../assets/const/Colors'
import * as actions from '../../actions/index'
import styles from '../Styles/ColorButtonsStyles'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';


const allColors = [
    colors.PUMPKIN,
    colors.GREEN_SEA,
    colors.PINK,
]
const allColors2 = [
    colors.BLUE,
    colors.WISTERIA,
    colors.MAIN_COLOR,
]


const Tab3 = () => {
    const dispatch = useDispatch();
    const bgColor = useSelector(state => state.settings.bgColor);

    return (
        <View style={{ flex: 1, backgroundColor: bgColor, }}>
            <View style={styles.textView}>
                <Text style={styles.text}>Choose background color</Text>
            </View>
            <View style={styles.colorBtnView}>
                {
                    allColors.map((color) => (
                        <TouchableNativeFeedback
                            onPress={() => dispatch(actions.changeColor(color))}
                            background={TouchableNativeFeedback.Ripple('white')}
                        >
                            <View style={[styles.colorBtn, { backgroundColor: color }]}></View>
                        </TouchableNativeFeedback>
                    ))
                }
            </View>
            <View style={styles.colorBtnView}>
                {
                    allColors2.map((color) => (
                        <TouchableNativeFeedback
                            onPress={() => dispatch(actions.changeColor(color))}
                            background={TouchableNativeFeedback.Ripple('white')}
                        >
                            <View style={[styles.colorBtn, { backgroundColor: color }]}></View>
                        </TouchableNativeFeedback>
                    ))
                }
            </View>
        </View>
    )
}

export default Tab3
