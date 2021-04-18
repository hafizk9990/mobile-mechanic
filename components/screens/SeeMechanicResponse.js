import React from 'react' 
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native' 
import firebase from '../screenSnippets/FirebaseInit'

const SeeMechanicResponse = ( navigationProps ) => {
    let responsesArray = navigationProps.navigation.getParam('mechanics');
    console.log('Response Array', responsesArray);

    if (responsesArray.length < 1) {
        console.log('Let us go back');
        navigationProps.navigation.navigate('ConfirmCustOrder');
    }

    // Then, if you reject a mechanic, they will be reomoved from this array
    // as well as DB (mobileMechanic/userRequests/userEmail/mechanicCNIC), and their
    // acceptance bit will be set to -1. This will tell them that they
    // have been rejected ...

    // If you accept this mechanic, the bit in the DB will become 1
    // (mobileMechanic/mechanicResponse/CNIC/acceptanceBit). This will notify them
    // if they get accepted ....

    let displayArray = [];

    const displayData = (dataResponse, dataProfile) => {
        if (dataResponse && dataProfile) {
            let name = dataProfile.firstName + ' ' + dataProfile.lastName;
            let charges = dataResponse.charges;

            displayArray.push( name + ' ' + charges );
            console.log('Display Array: ', displayArray);
        }
    }

    // _.observe(responsesArray, 'update', () => {
        responsesArray.map( (data, index) => {
            let responseData = '';
            let profileData = '';
    
            console.log('Mapping ...');
    
            // get their demand like this
            
            firebase.database().ref(`mobileMechanic/mechanicResponse/${ data }`).on('value', (dataResponse) => {
                let firebaseDataString = JSON.stringify(dataResponse);
                dataResponse = JSON.parse(firebaseDataString);
                responseData = dataResponse;
                console.log('Response data', responseData);
        
                // get their profile data like this
                
                firebase.database().ref(`mobileMechanic/Mechanics/${ data }`).on('value', (dataProfile) => {
                    let firebaseDataString = JSON.stringify(dataProfile);
                    dataProfile = JSON.parse(firebaseDataString);
                    profileData = dataProfile;
                    console.log('Profile Data', profileData);
                });
            })
            displayData(responseData, profileData);
        });
    // }

    return(
        <React.Fragment> 
            <Text style = { {marginTop: 30, textAlign: 'center'} }> See Mechanic Responses </Text>
            <ScrollView> 
                {
                    displayArray.map( (data, index) => {
                        return(
                            <TouchableOpacity  onPress = { () => console.log('You pressed the button') }> 
                                <Text> { data } </Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
        </React.Fragment>
    );
}

export default SeeMechanicResponse
