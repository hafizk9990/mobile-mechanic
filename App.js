import React from 'react';
import './components/screenSnippets/FirebaseInit'
import StackNavigator from './routes/StackWrapper'
import ServicesCust from './components/screens/ServicesCust'

const App = () => {
    return (
        <StackNavigator />
    );
}

export default App

// Remember, you should always return stackNavigator from here
