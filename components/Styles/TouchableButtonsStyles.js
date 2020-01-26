import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainView: {
        flex: 1, 
    },
    btnView: {
        flex: 1,
        flexDirection: 'row', 
    },
    btnNumView: {
        flex: 1,
        backgroundColor: '#2d364c', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    btnText: {
        fontSize: 35,
        color: '#ecf0f1'
    }
})

export default styles