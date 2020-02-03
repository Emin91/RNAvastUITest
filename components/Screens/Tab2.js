import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { useSelector } from 'react-redux';

export default function Tab1() {
    const bgColor = useSelector(state => state.settings.bgColor);
    return (
        <View style={{ flex: 1, backgroundColor: bgColor }}>
            <Text> Tab2 </Text>
        </View>
    )
}
