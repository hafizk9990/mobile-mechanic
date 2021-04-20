import React from 'react' 
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native' 
import firebase from '../screenSnippets/FirebaseInit'

const SeeMechanicResponse = ( navigationProps ) => {
    let displayArray = [];
    let responsesArray = navigationProps.navigation.getParam('mechanics');
    let userEmail = navigationProps.navigation.getParam('userEmailToPass');
    userEmail = userEmail.replace(/\./g, ',');
    
    const displayData = (dataResponse, dataProfile) => {
        // console.log('In display Data function');
        // console.log(dataResponse);
        // console.log(dataProfile);

        if (dataResponse && dataProfile) {
            // console.log('About to display ...');
            let name = dataProfile.firstName + ' ' + dataProfile.lastName;
            let cnic = dataProfile.cnic;
            let charges = dataResponse.charges;

            displayArray.push({
                mechanicName: name, 
                mechanicCNIC: cnic, 
                mechanicCharges: charges
            });
            // console.log('Display Array: ', displayArray);
            // console.log('CNIC: ', cnic);
        }
        // else {
        //     console.log('Not gonna display ....', dataResponse, dataProfile);
        // }
    }

    responsesArray.map( (data, index) => {
        let responseData = '';
        let profileData = '';

        // console.log('Mapping ...');

        // get their demand like this

        firebase.database().ref(`mobileMechanic/mechanicResponse/${ userEmail }/${ data }`).on('value', (dataResponse) => {
            // console.log(' ', dataResponse);
            let firebaseDataString = JSON.stringify(dataResponse);
            dataResponse = JSON.parse(firebaseDataString);
            responseData = dataResponse;
            // console.log('Response data', responseData);

            // get their profile data like this

            firebase.database().ref(`mobileMechanic/Mechanics/${ data }`).on('value', (dataProfile) => {
                let firebaseDataString = JSON.stringify(dataProfile);
                dataProfile = JSON.parse(firebaseDataString);
                profileData = dataProfile;
                // console.log('Profile Data', profileData);
                
                displayData(responseData, profileData);
            })
        })
    })

    return(
        <React.Fragment> 
            <Text style = { {marginTop: 30, textAlign: 'center'} }> See Mechanic Responses </Text>
            <ScrollView> 
                {
                    displayArray.map( (dataObject, index) => { 
                        // console.log('wow ........');
                        return(
                            <React.Fragment>
                                <View style = { {borderBottomColor: 'gray', borderBottomWidth: 1} } key = {index}>
                                    <View style = { {flexDirection: 'row'} }>
                                        <Text> { dataObject.mechanicName } { dataObject.mechanicCharges } </Text>  
                                    </View>
                                    <View style = { {flexDirection: 'row'} }>
                                        <TouchableOpacity onPress = { () => navigationProps.navigation.navigate('Payments', {userEmail: userEmail, cnic: dataObject.mechanicCNIC, array: responsesArray, charges: dataObject.mechanicCharges}) }>
                                            <Text style = { {color: 'green'} }> Accept </Text>
                                        </TouchableOpacity>
                                        
                                        
                                    </View>
                                </View>
                            </React.Fragment>
                        );
                    })
                }
            </ScrollView>
        </React.Fragment>
    );
}

export default SeeMechanicResponse
