import SignUp from '../components/screens/SignUp'
import { createAppContainer } from 'react-navigation' 
import { createStackNavigator } from 'react-navigation-stack'

const screens = {
    SignUp: {
        screen: SignUp, 
        navigationOptions: {
            title: 'Sign Up (Customer)'
        }
    }
}
export default createStackNavigator(screens);
