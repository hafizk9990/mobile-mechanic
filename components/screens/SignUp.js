import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native' 
import SignUpForm from '../screenSnippets/SignUpForm'

const SignUp = () => {
    return(
        <React.Fragment>
            <View style = { myStyles.header }> 
                <Text> Step 1 of 3 </Text>
            </View>
            <View style = { myStyles.pageTop }>
                <Text> MobileMechanic </Text>
                <Text> Sign Up </Text>
            </View>
            <SignUpForm />
            <Text>
                <Text> By continuing, you agree to our </Text> 
                <Text style = { myStyles.linking }
                    onPress = { () => Linking.openURL('http://www.uzair-reviews.com/MobileMechanic/privacy-policy.html') }>
                    PRIVACY POLICY
                </Text>
                <Text> and </Text>
                <Text style = { myStyles.linking }
                    onPress = { () => {Linking.openURL('http://www.uzair-reviews.com/MobileMechanic/terms-of-service.html')} }>
                    TERMS OF SERVICE
                </Text> 
            </Text>
            <View style = { myStyles.pageBottom }> 
                <Text> Already Have an Account? SIGN IN </Text>
            </View>
        </React.Fragment>
    );
}

const myStyles = StyleSheet.create({
    header: {
        marginTop: 20
    },
    pageTop: {
        
    }, 
    pageBottom: {

    }, 
    linking: {
        color: 'blue',
        fontSize: 12
    }, 
});

export default SignUp
