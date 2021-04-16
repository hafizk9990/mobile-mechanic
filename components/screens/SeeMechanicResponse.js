import React from 'react' 
import { Text, View, StyleSheet } from 'react-native' 

const SeeMechanicResponse = ( navigationProps ) => {
    console.log(navigationProps.navigation.getParam('mechanics'));

    // In this file, use this CNIC (and all others that will be added in real-time)
    // to see the mechanic and their profile ...

    // Then, if you reject a mechanic, they will be reomoved from this array
    // as well as DB (mobileMechanic/userRequests/userEmail/mechanicCNIC), and their
    // acceptance bit will be set to -1. This will tell them that they
    // have been rejected ...

    // If you accept this mechanic, the bit in the DB will become 1
    // (mobileMechanic/mechanicResponse/CNIC/acceptanceBit). This will notify them
    // if they get accepted ....
    
    return(
        <Text style = { {marginTop: 30} }> See Mechanic Responses </Text>
    );
}

export default SeeMechanicResponse
