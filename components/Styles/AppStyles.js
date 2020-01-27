import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    mainView: {
        flex: 0.1,
        width: '100%',
        paddingLeft: 10,
        justifyContent: 'center',
        backgroundColor: '#2d364c',
    },
    mainViewText: {
        fontSize: 25,
        color: '#d35400',
        fontFamily: 'MThin',
    },
    secondView: {
        flex: 0.2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d364c',
    },
    secondViewText: {
        fontSize: 23,
        color: '#fff',
        fontFamily: 'MThin',
    },
    textInputView: {
        flex: 0.3,
        width: '100%',
        backgroundColor: '#2d364c',
        justifyContent: 'center',
        paddingLeft: '30%',
        paddingRight: '30%',
    },
    textInput: {
        height: 90,
        color: '#fff',
        fontFamily: 'MThin',
        fontSize: 45,
        paddingLeft: 2,
        paddingLeft: 8,
        borderBottomWidth: 3,
        borderBottomColor: '#d35400',
    },
    btnView: {
        flex: 0.6,
        backgroundColor: '#2d364c',
        justifyContent: 'space-between',
    },
})

export default styles