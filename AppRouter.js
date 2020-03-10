import {
    createStackNavigator,
} from 'react-navigation';
import App from './App'
const AppRouter = createStackNavigator({
    Main: { screen: App },

});
export default AppRouter