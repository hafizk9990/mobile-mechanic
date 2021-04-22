import React from 'react' 
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native' 
import firebase from '../screenSnippets/FirebaseInit'
// var wallet;

const SeeMechanicResponse = ( navigationProps ) => {
    let displayArray = [];
    let responsesArray = navigationProps.navigation.getParam('mechanics');
    let userEmail = navigationProps.navigation.getParam('userEmailToPass');
    let wallet = navigationProps.navigation.getParam('wallet');
    userEmail = userEmail.replace(/\./g, ',');
    console.log('Wallet in see response file: ', wallet);
    
    const displayData = (dataResponse, dataProfile) => {
        if (dataResponse && dataProfile) {
            let name = dataProfile.firstName + ' ' + dataProfile.lastName;
            let cnic = dataProfile.cnic;
            let charges = dataResponse.charges;

            displayArray.push({
                mechanicName: name, 
                mechanicCNIC: cnic, 
                mechanicCharges: charges
            });
        }
    }

    responsesArray.map( (data, index) => {
        let responseData = '';
        let profileData = '';

        // get their demand like this

        firebase.database().ref(`mobileMechanic/mechanicResponse/${ userEmail }/${ data }`).on('value', (dataResponse) => {
            let firebaseDataString = JSON.stringify(dataResponse);
            dataResponse = JSON.parse(firebaseDataString);
            responseData = dataResponse;
            
            // get their profile data like this

            firebase.database().ref(`mobileMechanic/Mechanics/${ data }`).on('value', (dataProfile) => {
                let firebaseDataString = JSON.stringify(dataProfile);
                dataProfile = JSON.parse(firebaseDataString);
                profileData = dataProfile;
                
                displayData(responseData, profileData);
            });
        })
    })

    return(
        <React.Fragment> 
            <Text style = { {marginTop: 30, textAlign: 'center'} }> See Mechanic Responses </Text>
            <ScrollView> 
                {
                    displayArray.map( (dataObject, index) => {
                        console.log('Type of wallet: ', typeof(wallet));
                        console.log('Wallet: ', JSON.stringify(wallet));
                        if (parseInt(JSON.stringify(wallet)) >= dataObject.mechanicCharges) {
                            return(
                                <React.Fragment>
                                    <View style = { {borderBottomColor: 'gray', borderBottomWidth: 1} } key = {index}>
                                        <View style = { {flexDirection: 'row'} }>
                                            <Text> { dataObject.mechanicName } { dataObject.mechanicCharges } </Text>  
                                        </View>
                                        <View style = { {flexDirection: 'row'} }>
                                            <TouchableOpacity onPress = { () => navigationProps.navigation.navigate('Payments', {userEmail: userEmail, cnic: dataObject.mechanicCNIC, array: responsesArray, charges: dataObject.mechanicCharges, wallet: wallet}) }>
                                                <Text style = { {color: 'green'} }> Accept </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </React.Fragment>
                            );
                        }
                        else {
                            console.log('Money Issues. You dont have enough', dataObject.mechanicCharges, ' vs ', wallet);
                            let toReturn = `Bid too expensive!. Balance: ${ parseInt(JSON.stringify(wallet)) } Rs`;
                            return(
                                <React.Fragment>
                                    <View style = { {borderBottomColor: 'gray', borderBottomWidth: 1} } key = {index}>
                                        <View style = { {flexDirection: 'row'} }>
                                            <Text> { dataObject.mechanicName } { dataObject.mechanicCharges } </Text>  
                                        </View>
                                        <View style = { {flexDirection: 'row'} }>
                                             <Text style = { { color: 'red'} }> { toReturn } </Text>
                                         </View>
                                    </View>
                                </React.Fragment>
                            );
                        }
                    })
                }
            </ScrollView>
        </React.Fragment>
    );
}

export default SeeMechanicResponse
