import React from 'react' 
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native' 
import firebase from '../screenSnippets/FirebaseInit'

const SeeMechanicResponse = ( navigationProps ) => {
    let displayArray = [];
    let responsesArray = navigationProps.navigation.getParam('mechanics');
    let userEmail = navigationProps.navigation.getParam('userEmailToPass');
    let wallet = navigationProps.navigation.getParam('wallet');
    userEmail = userEmail.replace(/\./g, ',');

    const displayData = (dataResponse, dataProfile) => {
        if (dataResponse && dataProfile) {
            let name = dataProfile.firstName + ' ' + dataProfile.lastName;
            let rating = dataProfile.rating;
            let cnic = dataProfile.cnic;
            let charges = dataResponse.charges;
            let comments = dataResponse.mechanicComments;

            displayArray.push({
                mechanicName: name, 
                mechanicCNIC: cnic, 
                mechanicCharges: charges,
                rating: rating,
                comments: comments
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
            <Text style = { {marginTop: 50, marginBottom: 20, textAlign: 'center', fontSize: 25} }> Available Mechanics </Text>
            <ScrollView> 
                {
                    displayArray.map( (dataObject, index) => {
                        console.log('Type of wallet: ', typeof(wallet));
                        console.log('Wallet: ', JSON.stringify(wallet));
                        if (parseInt(JSON.stringify(wallet)) >= dataObject.mechanicCharges) {
                            return(
                                <React.Fragment>
                                    <View style = { myStyles.item }>
                                        <View key = {index}>
                                            <View>
                                                <Text style = { myStyles.name }> { dataObject.mechanicName } </Text>  
                                                <Text style = { myStyles.chargesDemanded }> { dataObject.mechanicCharges } Rs </Text>
                                                <Text style = { myStyles.rating }> { dataObject.rating } </Text>
                                                <Text style = { myStyles.rating }> { dataObject.comments } </Text>
                                            </View>
                                            <View style = { {flexDirection: 'row'} }>
                                                <View style = { {marginTop: 20, marginLeft: 50} }>
                                                    <TouchableOpacity
                                                        style = { myStyles.loginScreenButton }
                                                        onPress = { () => { 
                                                            Alert.alert(
                                                                'Accept Mechanic?',
                                                                `Are you sure you want to proceed with this mechanic? If you select yes, they will be notified that you have accepted them. Else, no changes will be made`,
                                                                [ 
                                                                    { text: 'No' },
                                                                    { 
                                                                        text: "Yes", 
                                                                        onPress: () =>  navigationProps.navigation.navigate('Payments', {
                                                                            userEmail: userEmail, 
                                                                            cnic: dataObject.mechanicCNIC, 
                                                                            array: responsesArray, 
                                                                            charges: dataObject.mechanicCharges, 
                                                                            wallet: wallet
                                                                        })
                                                                    }
                                                                ],
                                                            );
                                                        }}
                                                        underlayColor = '#fff'>
                                                        <Text style = { myStyles.loginText }> Accept Bid </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
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
                                    <View style = { myStyles.item }>
                                        <View key = {index}>
                                            <View>
                                                <Text style = { myStyles.name }> { dataObject.mechanicName } </Text>  
                                                <Text style = { myStyles.chargesDemanded }> { dataObject.mechanicCharges } Rs </Text>
                                                <Text style = { myStyles.rating }> { dataObject.rating } </Text>
                                                <Text style = { myStyles.rating }> { dataObject.comments } </Text>
                                            </View>
                                            <View style = { {flexDirection: 'row'} }>
                                                <View style = { {marginTop: 20, marginLeft: 50} }>
                                                    <TouchableOpacity
                                                        style = { myStyles.rejectButton }
                                                        onPress = { () => { 
                                                            Alert.alert(
                                                                'Warning! Short on Cash',
                                                                `This mechanic demands ${ dataObject.mechanicCharges } Rs. You only have ${ JSON.stringify(wallet) } Rs in your wallet. Please select another mechanic. Thank you!`,
                                                                [ { text: "OK" } ],
                                                            );
                                                        }}
                                                        underlayColor = '#fff'>
                                                        <Text style = { myStyles.loginText }> Bid Too Expensive </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
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

const myStyles = StyleSheet.create({
    item: {
        paddingLeft: 5,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
        borderColor: '#bbb',
        backgroundColor: '#fff', 
        marginBottom: 20, 
    }, 
    loginScreenButton: {
        marginRight:40,
        marginLeft:40,
        marginBottom:20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:"#35b8b6",
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        position: 'relative', 
        width: Dimensions.get('window').width * 0.5,
    }, 
    loginText: {
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    rejectButton: {
        marginLeft:40,
        marginBottom:20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:"red",
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        position: 'relative',
        alignContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.5,
    }, 
    name: {
        fontSize: 23,
        textAlign: 'center', 
        paddingTop: 5
    },
    chargesDemanded: {
        fontSize: 17,
        textAlign: 'center', 
        paddingTop: 15
    },
    rating: {
        fontSize: 13,
        textAlign: 'center', 
        paddingTop: 15
    }
});
