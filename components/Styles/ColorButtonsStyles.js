import { StyleSheet } from 'react-native'
import * as colors from '../assets/const/Colors'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "red",
    },
    textView: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: colors.DARK,
    },
    colorBtnView: {
        flex: 0.25,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    colorBtn: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderColor: colors.WHITE,
        borderWidth: 5,
        backgroundColor: colors.PUMPKIN,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        elevation: 8,
    },
})

export default styles