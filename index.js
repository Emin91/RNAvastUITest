/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

console.ignoredYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
