import { AppRegistry } from 'react-native';
import App from './App';
import Main from './Components/Screen/Main';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('test', () => Main);
