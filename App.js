import React from 'react';
import './components/screenSnippets/FirebaseInit'
import StackNavigator from './routes/ScreensAndStacksWrapper'
import ServicesCust from './components/screens/ServicesCust'

const App = () => {
    return (
        <ServicesCust />
    );
}

export default App

// Remember, you should always return stackNavigator from here
