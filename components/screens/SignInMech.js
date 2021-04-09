import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native' 
import SignInCustForm from '../screenSnippets/SignInCustForm'

const SignInCust = (navigationProps) => {
    return(
        <React.Fragment>
            <View style = { myStyles.pageTop }>
                <Text> MobileMechanic </Text>
                <Text> Sign In </Text>
            </View>
            <SignInCustForm 
                navigateTo = { navigationProps.navigation.navigate }
            />
            <View style = { myStyles.pageBottom }> 
                <Text> Do not Have an Account? <Text style = { {color: 'blue'} } onPress = { () => navigationProps.navigation.navigate('PreSignUp') }> SIGN UP </Text> </Text>
            </View>
        </React.Fragment>
    );
}

const myStyles = StyleSheet.create({
    pageTop: {
        marginTop: 20    
    }, 
    pageBottom: {

    }, 
    urlLinking: {
        color: 'blue',
        fontSize: 12
    }, 
});

export default SignInCust
