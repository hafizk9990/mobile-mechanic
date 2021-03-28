import { createAppContainer } from 'react-navigation' 
import { createStackNavigator } from 'react-navigation-stack'
import PreSignUp from '../components/screens/PreSignUp'
import SplashScreen from '../components/screens/SplashScreen'
import CustomerStack from './CustomerScreenStack'
import MechanicStack from './MechanicScreenStack'

const screens = {
    
    // Add Splash Screen Here. It should lead to the PreSignUp screen down below (after 2 seconds)
    
    PreSignUp: {
        screen: PreSignUp, 
        navigationOptions: {
            title: 'MobileMechanic', 
            header: null
        }
    }, 

    // Here, a sign in screen should be implemented (not stack)
    // This screen will also have access to both the stacks down below
    // This screen gives the option of signing in as Mechanic or Customer

    FullCustomerStack: {
        screen: CustomerStack, 
        navigationOptions: {
            header: null
        }
    },
    FullMechanicStack: {
        screen: MechanicStack, 
        navigationOptions: {
            header: null
        }
    }
}

const stack = createStackNavigator(screens);
const appContainer = createAppContainer(stack);

export default appContainer
