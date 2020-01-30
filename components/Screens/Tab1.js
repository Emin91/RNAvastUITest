import React, { Component } from 'react'
import { StyleSheet, View, Text, BackHandler } from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons';
import IconPalette from 'react-native-vector-icons/MaterialIcons';
import AddButton from '../Buttons/AddButton';

export default class Tab1 extends Component {

    constructor(){
        super()
        this.state = {
            bgColor: '#f3f3f3'
        }
    }

    changeColor = color => {
        switch (color) {
            case '#fff':
                this.setState({ bgColor: '#3498db' })
                break
            case '#457458':
                this.setState({ bgColor: '#457458' })
                break
            case 'red':
                this.setState({ bgColor: 'red' })
                break
            case 'red':
                this.setState({ bgColor: 'red' })
                break
            default:
                break;
        }
    }

    
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: this.state.bgColor }}>
                <ActionButton buttonColor="rgba(231,76,60,1)" offsetX={8} offsetY={8} spacing={8} fixNativeFeedbackRadius={true}>
                    <ActionButton.Item buttonColor='#9b59b6' title="Go to color palete" onPress={() => this.props.navigation.navigate('L3')}>
                        <IconPalette name="color-lens" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Choose default background color" onPress={() => this.changeColor('#457458')} >
                        <IconPalette name="format-color-fill" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Press to Exit" onPress={()=> BackHandler.exitApp()}>
                        <Icon name="md-exit" style={styles.actionButtonIcon} size={5} />
                    </ActionButton.Item>
                </ActionButton>
                <Text>Tab 1</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});