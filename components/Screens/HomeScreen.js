import React, { useState } from 'react';
import { View, Text, TextInput, StatusBar, Button, BackHandler } from 'react-native';
import TouchableButtons from '../Buttons/TouchableButtons'
import styles from '../Styles/HomeStyles'

const HomeScreen = (props) => {
  const [symbol, setSymbol] = useState("");
  const { navigation } = props;

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#2d364c" />
      <View style={styles.mainView}>
        <Text style={styles.mainViewText}>AVAST<Text style={[styles.mainViewText, { color: '#fff', fontWeight: 'bold' }]}> PASSWORDS</Text></Text>
      </View>
      <View style={styles.secondView}>
        <Text style={styles.secondViewText}>Enter Master Password</Text>
      </View>
      <View style={styles.textInputView}>
        <TextInput
          placeholderTextColor={'#d35400'}
          value={symbol}
          maxLength={5}
          style={styles.textInput}
        />
      </View>
      <View style={styles.btnView}>
        <TouchableButtons setSymbol={newSymbol => {
          if (newSymbol === 'del') {
            return setSymbol(symbol.slice(0, -1))
          } else if (newSymbol === 'OK') {
             if(symbol === "12345") {
                 alert(`Password is: ${symbol}`)
                 navigation.navigate('L2')
             } else if(symbol != '12345') {
                alert("Please type correct password")
             }
            //BackHandler.exitApp()
            return setSymbol
          }
          if (symbol.length < 5) {
            setSymbol(symbol + newSymbol)
          }
        }} />
      </View>
    </View>
  )
}

HomeScreen.navigationOptions = {
    headerTransparent: true,
    title: ''
}

export default HomeScreen