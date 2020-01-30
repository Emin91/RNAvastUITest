import HomeScreen from '../Screens/HomeScreen'
import Page2 from '../Screens/Page2'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const AppContainer = createStackNavigator({
    L1: HomeScreen,
    L2: {
        screen: Page2,}
},
{
    initialRouteName: 'L2'
})

export default createAppContainer(AppContainer)