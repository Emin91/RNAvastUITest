import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-between',
    },
    symbolsRow: {
        flex: 0.3,
        flexDirection: 'row',
        backgroundColor: '#2d364c'
    },
    symbolView: {
        flexGrow: 1,
        flexDirection: 'row',
    },
    touchBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 35,
        color: '#fff'
    }
})

export default styles