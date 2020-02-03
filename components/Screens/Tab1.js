import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, BackHandler } from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons';
import IconPalette from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

export default function Tab1() {
    const bgColor = useSelector(state => state.settings.bgColor);
    const [isReady, setIsReady] = useState("false")
    console.log('isReady', isReady)
    return (
        <View style={{ flex: 1, backgroundColor: bgColor }}>
            <ActionButton buttonColor="rgba(231,76,60,1)" offsetX={8} offsetY={8} spacing={8} fixNativeFeedbackRadius={true}>
                <ActionButton.Item buttonColor='#9b59b6' title="Go to color palete" onPress={() => console.log('Btn 1')}>
                    <IconPalette name="color-lens" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Choose default background color" onPress={() => console.log('Btn 2')}>
                    <IconPalette name="format-color-fill" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' title="Press to Exit" onPress={() => BackHandler.exitApp()}>
                    <Icon name="md-exit" style={styles.actionButtonIcon} size={5} />
                </ActionButton.Item>
            </ActionButton>
            <Button title='Click here' onPress={() => { setIsReady("true") }}></Button>
            <Text>{isReady}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});