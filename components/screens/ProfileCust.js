import React from 'react' 
import { View, Text, Dimensions, Image } from 'react-native'
import ProfileCustForm from '../screenSnippets/ProfileCustForm'
import { FontAwesome5 } from '@expo/vector-icons'; 

let image = require('../../assets/john-doe-girl..jpg');
var windowHeight = Dimensions.get('window').height;
var windowWidth = Dimensions.get('window').width;

const ProfileCust = (tabsNavigationProps) => {
    let obtainedEmail = tabsNavigationProps.navigation.dangerouslyGetParent().getParam('userEmail');
    console.log(obtainedEmail);
    return(
        <React.Fragment> 
            <Text style = { {marginTop: windowHeight * 0.05, textAlign: 'center'} }> Customer Profile </Text>
            <View style = { {alignSelf: 'center', flexDirection: 'row'} }> 
                <Image 
                    style = { {width: windowWidth * 0.5, height: windowHeight * 0.27, borderRadius: 100, marginBottom: windowHeight * 0.05, marginTop: windowHeight * 0.05} } 
                    source = {image}
                />
                
                <FontAwesome5 
                    style = { {marginTop: windowHeight * 0.27, marginLeft: windowWidth * -0.12} } 
                    name = "plus-circle" 
                    size = { 28 } 
                    color = "black"
                    onPress = { () => console.log('You Pressed the Plus Icon ...') }
                />
            </View>
            <Text> userEmail (debugging print, remove later): { obtainedEmail } </Text>
            <ProfileCustForm />
        </React.Fragment>
    );
}

export default ProfileCust
