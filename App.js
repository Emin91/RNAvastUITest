import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import TouchableButtons from './components/Buttons/TouchableButtons'

const App = () => {
 

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1, width: '100%', backgroundColor: '#451245' }}>
        <Text>Viesssw</Text>
      </View>
      <View style={{ flex: 0.2, width: '100%', backgroundColor: '#252536' }}>
        <Text>View</Text>
      </View>
      <View style={{ flex: 0.3, width: '100%', backgroundColor: '#363636', justifyContent: 'center',}}>
        <TextInput
        placeholder="jdjhjdd"
          style={{backgroundColor: 'rgba(0,0,0,0)',}}
        />
      </View>
      <View style={{ flex: 0.6, backgroundColor: '#2d364c' }}>
        <TouchableButtons />
      </View>
    </View>
  )
}


export default App