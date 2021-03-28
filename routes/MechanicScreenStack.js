import { createStackNavigator } from 'react-navigation-stack'
import SignUpMech from '../components/screens/SignUpMech'


const screens = {
    SignUp: {
        screen: SignUpMech, 
        navigationOptions: {
            title: 'Sign Up (Mechanic)'
        }
    }
}
export default createStackNavigator(screens);
