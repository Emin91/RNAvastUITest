import React, { useState } from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import TouchableButtons from './components/Buttons/TouchableButtons'
import styles from './components/Styles/AppStyles'

const App = () => {
  const [symbol, setSymbol] = useState("");

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


export default App