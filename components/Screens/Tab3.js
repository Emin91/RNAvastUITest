import React, { useState } from 'react'
import { Button, View, Text } from 'react-native'
import IconStar from 'react-native-vector-icons/MaterialIcons'
const Tab3 = ({navigation, style}) => {

    const [start, setStar] = useState(0)
    const [png, setPng] = useState('colorize')
    return (
            <View style={{flex: 1, backgroundColor: '#745961'}}>
                <Button title="Go to tab 1" onPress={() => navigation.navigate('L1')}></Button>
                <Button title="Go to tab 1" ></Button>
                <Text style={{fontSize: 40}} onPress={() =>{setStar(start + 1), setPng({name: 'add-alert'})}}>{start}</Text>
                <IconStar name={png} color='#fff' size={80} />
            </View>
        )
}

export default Tab3
