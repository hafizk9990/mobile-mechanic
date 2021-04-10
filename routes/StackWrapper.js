import { createAppContainer } from 'react-navigation' 
import { createStackNavigator } from 'react-navigation-stack'

// FOLLOWING FILES WILL BE SET-UP IN THIS NAVIGATION STACK

import PreSignIn from '../components/screens/PreSignIn'
import PreSignUp from '../components/screens/PreSignUp'
import SignUpCust from '../components/screens/SignUpCust'
import SignUpMech from '../components/screens/SignUpMech'
import SignInCust from '../components/screens/SignInCust'
import SignInMech from '../components/screens/SignInMech'
import SplashScreen from '../components/screens/splash' 
import CustTabsWrapper from './CustTabsWrapper'
import BatterySpecifications from '../components/screens/BatterySpecifications'
import CarImages from '../components/screens/CarImages'
import CarDescription from '../components/screens/CarDescription'
import CustLocation from '../components/screens/CustLocation'

const screens = {
    SplashScreen: {
        screen: SplashScreen, 
        navigationOptions: {
            headerShown: false
        }
    },
    PreSignIn: {
        screen: PreSignIn, 
        navigationOptions: {
            headerShown: false
        }
    },
    PreSignUp: {
        screen: PreSignUp, 
        navigationOptions: {
            headerShown: false
        }
    },
    SignUpCust: {
        screen: SignUpCust, 
        navigationOptions: {
            headerShown: false
        }
    }, 
    SignUpMech: {
        screen: SignUpMech, 
        navigationOptions: {
            headerShown: false
        }
    }, 
    SignInCust: {
        screen: SignInCust, 
        navigationOptions: {
            headerShown: false
        }
    }, 
    SignInMech: {
        screen: SignInMech, 
        navigationOptions: {
            headerShown: false
        }
    }, 
    CustTabsWrapper: {
        screen: CustTabsWrapper, 
        navigationOptions: {
            headerShown: false
        }
    },
    BatterySpecifications: {
        screen: BatterySpecifications,
        navigationOptions: {
            headerShown: false
        }
    }, 
    CarImages: {
        screen: CarImages, 
        navigationOptions: {
            headerShown: false
        }
    }, 
    CarDescription: {
        screen: CarDescription, 
        navigationOptions: {
            headerShown: false 
        }
    }, 
    CustLocation: {
        screen: CustLocation, 
        navigationOptions: {
            headerShown: false
        }
    }
}

const stack = createStackNavigator(screens);
const appContainer = createAppContainer(stack);

export default appContainer
