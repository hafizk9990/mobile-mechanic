import React from 'react';
import './components/screenSnippets/FirebaseInit'
import StackNavigator from './routes/StackWrapper'
import TabNavigator from './routes/CustTabsWrapper'
import BatterySpecifications from './components/screens/BatterySpecifications'
const App = () => {
    return (
        <StackNavigator />
        // <BatterySpecifications />
        // <TabNavigator /> 
    );
}
export default App

// Remember, you should always return stackNavigator from here.
