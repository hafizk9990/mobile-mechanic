import React from 'react';
import './components/screenSnippets/FirebaseInit'
import StackNavigator from './routes/StackWrapper'
import TabNavigator from './routes/CustTabsWrapper'
import CustLocation from './components/screens/CustLocation'
const App = () => {
    return (
        <StackNavigator />
        //<CustLocation />
        // <TabNavigator /> 
    );
}
export default App

// Remember, you should always return stackNavigator from here.
