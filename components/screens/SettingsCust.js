import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { FontAwesome, Ionicons, Entypo, Feather } from '@expo/vector-icons'
import firebase from '../../components/screenSnippets/FirebaseInit'

var windowHeight = Dimensions.get('window').height;
var windowWidth = Dimensions.get('window').width;

const SettingsCust = (tabsNavigationProps) => {
    let name = 'Your Name'; 
    let image = require('../../assets/john-doe.jpg');
    let obtainedEmail = tabsNavigationProps.navigation.dangerouslyGetParent().getParam('userEmail');
    console.log(obtainedEmail);
    obtainedEmail = obtainedEmail.replace(/\./g, ','); 

    // Here, go access the user's document inside Firebase; we pull their name and image
    // If name or image don't exist, use default as John Doe's name and his image

    // firebase.database().ref(`mobileMechanic/Clients/${ obtainedEmail }`).once('value', (data) => {
    //     let firebaseDataString = JSON.stringify(data); // JavaScript object to string
    //     let firebaseDataJSON = JSON.parse(firebaseDataString); // String to JSON

    //     if (firebaseDataJSON) {
    //         console.log(firebaseDataJSON);

    //         if (firebaseDataJSON.firstName) {
    //             name = firebaseDataJSON.firstName;
    //         }
    //         else {
    //             console.log('in name ............');
    //             name = 'Your Name'
    //         }
    //         if (firebaseDataJSON.image) {
    //             image = firebaseDataJSON.image;
    //         }
    //         else {
    //             image = dummyImage;
    //         }
    //     }
    // })

    return(
        <React.Fragment> 
            <View style = { {marginTop: windowHeight * 0.08, flexDirection: 'row', marginBottom: windowHeight * 0.06} }>
                <Image style = { {width: windowWidth * 0.35, height: windowHeight * 0.2, borderRadius: windowWidth * 0.5, marginLeft: windowWidth * 0.05} } source = { image } />
                <Text style = { {marginLeft: windowWidth * 0.05, fontWeight: 'bold', fontSize: 24} }> { name } </Text>
                <FontAwesome style = { {marginLeft: windowWidth * 0.22} } name = "pencil-square-o" size = { 19 } color = "gray" onPress = { () => tabsNavigationProps.navigation.navigate('SignInMech') }/>
            </View>
 
            <View style = { {flexDirection: 'row', marginBottom: windowHeight * 0.05} }>
                <Ionicons style = { {marginLeft: windowWidth * 0.05} } name = "person" size = { 24 } color = "green" />
                <Text style = { {marginLeft: windowWidth * 0.02} }> Online Status </Text>
                <FontAwesome style = { {marginLeft: windowWidth * 0.56} } name = "toggle-off" size = { 30 } color = "gray" />
            </View>

            <View style = { {flexDirection: 'row', marginBottom: windowHeight * 0.05} }>
                <Ionicons style = { {marginLeft: windowWidth * 0.05} } name = "notifications" size = { 24 } color = "green" />
                <Text style = { {marginLeft: windowWidth * 0.02} }> Notifications Alert </Text>
                <FontAwesome style = { {marginLeft: windowWidth * 0.5} } name = "toggle-on" size = { 30 } color = "green" />
            </View>

            <View style = { {flexDirection: 'row', marginBottom: windowHeight * 0.05} }> 
                <Entypo style = { {marginLeft: windowWidth * 0.05} } name = "key" size = { 24 } color = "green" />
                <Text style = { {marginLeft: windowWidth * 0.02} }> Change Password </Text>
                <Feather style = { {marginLeft: windowWidth * 0.5} } name = "arrow-right" size = { 24 } color = "gray" />
            </View>

            <View style = { {flexDirection: 'row', marginBottom: windowHeight * 0.05} }> 
                <Ionicons style = { {marginLeft: windowWidth * 0.05} } name = "document-text-sharp" size = { 24 } color = "green" />
                <Text style = { {marginLeft: windowWidth * 0.02} }> Terms of Service </Text>
                <Feather style = { {marginLeft: windowWidth * 0.51} } name = "arrow-right" size = { 24 } color = "gray" />
            </View>

            <View style = { {flexDirection: 'row', marginBottom: windowHeight * 0.05} }>
                <Entypo style = { {marginLeft: windowWidth * 0.05} } name = "log-out" size = { 24 } color = "green" /> 
                <Text style = { {marginLeft: windowWidth * 0.02} }> Sign Out </Text>
            </View>
        </React.Fragment>
    );
}
export default SettingsCust
