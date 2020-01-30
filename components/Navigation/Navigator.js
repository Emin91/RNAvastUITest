import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { Text } from 'react-native'
import IconStar from 'react-native-vector-icons/MaterialIcons'
import IconKey from 'react-native-vector-icons/FontAwesome5'
import IconList from 'react-native-vector-icons/FontAwesome'
import styles from '../Styles/HomeStyles'
import HomeScreen from '../Screens/HomeScreen'
import Tab1 from '../Screens/Tab1'
import Tab2 from '../Screens/Tab2'
import Tab3 from '../Screens/Tab3'
import AddButton from '../Buttons/AddButton'

const TabContainer = createMaterialTopTabNavigator({
    L1: {
        screen: Tab1,
        navigationOptions: {
            tabBarLabel: () => { return null },
            tabBarIcon: <IconStar name="star" color='#fff' size={22} />,
        }
    },
    L2: {
        screen: Tab2,
        navigationOptions: {
            tabBarLabel: () => { return null },
            tabBarIcon: <IconKey name="key" color='#fff' size={22} />,
        }
    },
    L3: {
        screen: Tab3,
        navigationOptions: {
            tabBarLabel: () => { return null },
            tabBarIcon: <IconList name="list-alt" color='#fff' size={22} />
        }
    },
},
    {
        initialRouteName: 'L2',
        tabBarOptions: {
            showIcon: true,
            indicatorStyle: {
                backgroundColor: '#d35400'
            },
            style: {
                backgroundColor: '#2d364c',
            },
        }
    })

const AppContainer = createStackNavigator({
    L1: HomeScreen,
    L2: {
        screen: TabContainer,
        navigationOptions: {
            title: <Text style={styles.mainViewText}>AVAST<Text style={[styles.mainViewText, { color: '#fff', fontWeight: 'bold' }]}> PASSWORDS</Text></Text>,
            headerStyle: {
                backgroundColor: '#2d364c',
                elevation: 0
            }
        }
    }
},
    {
        initialRouteName: 'L2'
    })

export default createAppContainer(AppContainer)