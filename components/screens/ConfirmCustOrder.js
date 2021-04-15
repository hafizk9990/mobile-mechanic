import React, { useState } from 'react' 
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native' 
import firebase from '../screenSnippets/FirebaseInit'

var windowHeight = Dimensions.get('window').height;
var windowWidth = Dimensions.get('window').width;

const ConfirmCustOrder = ( navigationProps ) => {
    let locationObject = (navigationProps.navigation.getParam('locationObject'));
    let carName = (navigationProps.navigation.getParam('carName'));
    let carImageKey = (navigationProps.navigation.getParam('carImageKey')); // required by mechanic
    let carModel = (navigationProps.navigation.getParam('carModel'));
    let carNumber = (navigationProps.navigation.getParam('carNumber'));
    let carDescriptionNote = (navigationProps.navigation.getParam('carDescriptionNote'));
    let userEmail = (navigationProps.navigation.getParam('userEmail')); // required by mechanic
    userEmail = userEmail.replace(/\./g, ',');

    const [msg, updateMsg] = useState('');
    const [color, updateColor] = useState('red');

    // const dummy = () => {
    //     console.log('Dummy called ...');
    // }
    // setInterval(dummy);

    const orderConfirmationHandler = () => {
        firebase.database().ref(`mobileMechanic/userRequests/${ userEmail }`).set({
            customerLocation: locationObject,
            customerCarName: carName, 
            customerCarImageKey: carImageKey, 
            customerCarModel: carModel, 
            customerCarNumber: carNumber, 
            customerCarDescription: carDescriptionNote, 
            mechanicCNIC: ['dummyCNIC']
        }).then( () => { 
            updateMsg('Please Wait. We are Finding You a Mechanic ...');
            
            Alert.alert(
                'Finding Mechanics',
                "Congratulations! Your order has been placed successfully. Please wait while we connect you to the mechanics near by .... ",
                [
                    { text: "OK" }
                ],
            );
        })
        .catch( () => { 
            Alert.alert(
                'Ooops!',
                'Some unknown error occurred. Could not place order. Please try again ...',
                [
                    { text: "OK" }
                ],
            );
        });
    }

    return(
        <React.Fragment> 
            <Text style = { {marginTop: 30} }> Confirm Your Order ... </Text>
            <View> 
                <Text> Location: { locationObject.longitude } and { locationObject.latitude } </Text>
                <Text> Car: { carName } </Text>
                <Text> Model: { carModel } </Text>
                <Text> Number Plate: { carNumber } </Text>
                <Text> Car Description: { carDescriptionNote } </Text>
            </View>
            <View style = { styles.heading4 }>
                <TouchableOpacity
                    style = { styles.loginScreenButton }
                    onPress = { orderConfirmationHandler }
                    underlayColor = '#fff'>
                    <Text style = { styles.loginText }> Confirm Order </Text>
                </TouchableOpacity>
            </View>
            <Text style = { {textAlign: 'center', color: color} }> { msg } </Text>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    heading4: {
        paddingTop: 0.02*windowHeight,
        marginLeft: windowWidth * 0.01,
        marginRight: windowWidth * 0.01,
        width: windowWidth
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
        position: 'relative'
    }, 
    loginText: {
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    }
});

export default ConfirmCustOrder
