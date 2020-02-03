import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import * as colors from '../assets/const/Colors'
import styles from '../Styles/ColorButtonsStyles'
import { useDispatch } from 'react-redux'
import * as actions from '../../actions/index'

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

console.log('actions', actions)
const ColorButtons = (props) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.mainView}>
            <View style={styles.textView}>
                <Text style={styles.text}>{props.title}</Text>
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

export default ColorButtons
