import { createAppContainer } from 'react-navigation' 
import { createStackNavigator } from 'react-navigation-stack'

// FOLLOWING FILES WILL BE SET-UP IN THIS NAVIGATION STACK

// import SplashScreen from '../components/screens/SplashScreen'
import PreSignIn from '../components/screens/PreSignIn'
import PreSignUp from '../components/screens/PreSignUp'
import SignUpCust from '../components/screens/SignUpCust'
import SignUpMech from '../components/screens/SignUpMech'
import SignInCust from '../components/screens/SignInCust'
import SignInMech from '../components/screens/SignInMech'
import ServicesCust from '../components/screens/ServicesCust'
import SplashScreen from '../components/screens/splash'

const screens = {

    // Add Splash Screen Here. It should lead to the PreSignUp screen down below (after 2 seconds)
    SplashScreen: {
        screen: SplashScreen, 
        navigationOptions: {
            title: 'MobileMechanic (Splash Screen)', 
            headerShown: false
        }
    },
    PreSignIn: {
        screen: PreSignIn, 
        navigationOptions: {
            title: 'MobileMechanic (Pre-Sign In)', 
            headerShown: false
        }
    },
    PreSignUp: {
        screen: PreSignUp, 
        navigationOptions: {
            title: 'MobileMechanic (Pre-Sign Up)',
        }
    },
    SignUpCust: {
        screen: SignUpCust, 
        navigationOptions: {
            title: 'Sign Up Customer (SignUpCust)'
        }
    }, 
    SignUpMech: {
        screen: SignUpMech, 
        navigationOptions: {
            title: 'Sign Up Mechanic (SignUpMech)'
        }
    }, 
    SignInCust: {
        screen: SignInCust, 
        navigationOptions: {
            title: 'Sign In Customer (SignInCust)'
        }
    }, 
    SignInMech: {
        screen: SignInMech, 
        navigationOptions: {
            title: 'Sign In Mechanic (SignInMech)'
        }
    }, 
    ServicesCust: {
        screen: ServicesCust, 
        navigationOptions: {
            title: 'Customer Services (ServicesCust)'
        }
    }
}

const stack = createStackNavigator(screens);
const appContainer = createAppContainer(stack);

export default appContainer


// DO NOT DELETE THE FOLLOWING COMMENTED OUT CODE ....
 
// FullMechanicStack: { // All mechanic screens here
//     screen: MechanicStack, 
//     navigationOptions: {
//         header: null
//     }
// },
// FullCustomerStack: { // All customer screens here
//     screen: CustomerStack, 
//     navigationOptions: {
//         header: null
//     }
// },
