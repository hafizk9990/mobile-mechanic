import React from 'react' 
import { Text, View, StyleSheet } from 'react-native' 

const SeeMechanicResponse = ( navigationProps ) => {
    console.log(navigationProps.navigation.getParam('mechanics'));
    
    return(
        <Text style = { {marginTop: 30} }> See Mechanic Responses </Text>
    );
}

export default SeeMechanicResponse
