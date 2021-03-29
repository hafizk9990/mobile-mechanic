import SignUpCustomer from '../components/screens/SignUpCust'
import { createStackNavigator } from 'react-navigation-stack'

const screens = {
    SignUpCustomer: {
        screen: SignUpCustomer, 
        navigationOptions: {
            title: 'Sign Up (Customer)'
        }
    }
}
export default createStackNavigator(screens);
