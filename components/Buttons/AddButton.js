import React, { Component } from 'react'
import { Button, View } from 'react-native'

const background = ({changeBg}) => {
    return (
        <View style={{flex: 0.1, backgroundColor: '#141414'}}>
            <Button title='Red' onPress={() => changeBg('red')}></Button>
        </View>
    )
}

export default background
