import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native' 
import SignUpForm from '../screenSnippets/SignUpCustForm'

const SignUp = (navigationProps) => {
    return(
        <React.Fragment>
            <View style = { myStyles.pageTop }>
                <Text> MobileMechanic </Text>
                <Text> Sign Up </Text>
            </View>
            <SignUpForm />
            <Text>
                <Text> By continuing, you agree to our </Text> 
                <Text style = { myStyles.urlLinking }
                    onPress = { () => Linking.openURL('http://www.uzair-reviews.com/MobileMechanic/privacy-policy.html') }>
                    PRIVACY POLICY
                </Text>
                <Text> and </Text>
                <Text style = { myStyles.urlLinking }
                    onPress = { () => {Linking.openURL('http://www.uzair-reviews.com/MobileMechanic/terms-of-service.html')} }>
                    TERMS OF SERVICE
                </Text> 
            </Text>
            <View style = { myStyles.pageBottom }> 
                <Text> Already Have an Account? <Text style = { {color: 'blue'} } onPress = { () => navigationProps.navigation.navigate('PreSignIn') }> SIGN IN </Text> </Text>
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

export default SignUp
