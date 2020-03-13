import {
    createStackNavigator
} from 'react-navigation-stack';
import App from './App'
import Gdsy from './gdsy'

const AppRouter = createStackNavigator({
    Main: {
        screen: App, navigationOptions: {
            title: null,
            headerShown: false
        }
    },
    gdsy: {
        screen: Gdsy, navigationOptions: {
            title: null,
            headerShown: false
        }
    },

});
export default AppRouter