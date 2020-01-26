import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import TouchableButtons from './components/Buttons/TouchableButtons'

const App = () => {
  const [symbol, setSymbol] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1, width: '100%', backgroundColor: '#451245' }}>
        <Text>Viesssw</Text>
      </View>
      <View style={{ flex: 0.2, width: '100%', backgroundColor: '#252536' }}>
        <Text>View</Text>
      </View>
      <View style={{ flex: 0.3, width: '100%', backgroundColor: '#363636', justifyContent: 'center', }}>
        <TextInput
          placeholder="1234"
          value={symbol}
          style={{ backgroundColor: '#451258', height: 90, fontSize: 50, paddingLeft: 50, paddingRight: 50 }}
        />
      </View>
      <View style={{ flex: 0.6, backgroundColor: '#2d364c', justifyContent: 'space-between', }}>
        <TouchableButtons setSymbol={newSymbol => {
          if (newSymbol === 'del') {
            return setSymbol(symbol.slice(0, -8))
          }
          setSymbol(symbol + newSymbol)
        }} />
      </View>
    </View>
  )
}


export default App