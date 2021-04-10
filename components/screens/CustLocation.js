import React from 'react' 
import { Text } from 'react-native' 

const CustLocation = (navigationProps) => {
    console.log(navigationProps.navigation.getParam('carName'));
    console.log(navigationProps.navigation.getParam('carKey'));
    console.log(navigationProps.navigation.getParam('carModel'));
    console.log(navigationProps.navigation.getParam('carNumber'));
    console.log(navigationProps.navigation.getParam('carRequirements'));
    return(
        <Text style = { {marginTop: 30} }> Customer Location </Text>
    );
}

export default CustLocation