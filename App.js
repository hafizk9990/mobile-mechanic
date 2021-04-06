import React from 'react';
import './components/screenSnippets/FirebaseInit'
import StackNavigator from './routes/StackWrapper'
import SettingsCust from './components/screens/SettingsCust'

const App = () => {
    return (
        <StackNavigator />
        // <SettingsCust /> 
    );
}

export default App

// Remember, you should always return stackNavigator from here
