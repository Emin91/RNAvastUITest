import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '../Styles/HomeStyles'

const Page2 = () => {

    return(
        <View style={{flex: 1, backgroundColor: '#fff',}}>
            <Text>Page 2</Text>
        </View>
    )
}

Page2.navigationOptions = {
    headerLeft: null,
    title: <Text style={styles.mainViewText}>AVAST<Text style={[styles.mainViewText, { color: '#fff', fontWeight: 'bold' }]}> PASSWORDS</Text></Text>,
    headerStyle: {
        backgroundColor: '#2d364c',
        elevation: 0,
    }
}


export default Page2