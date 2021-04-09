import React from 'react';
import './components/screenSnippets/FirebaseInit'
import StackNavigator from './routes/StackWrapper'
import TabNavigator from './routes/CustTabsWrapper'

const App = () => {
    return (
      <StackNavigator />
        //<TabNavigator /> 
    );
}
export default App

// Remember, you should always return stackNavigator from here.
