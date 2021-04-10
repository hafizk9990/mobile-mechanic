import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native' 
import SignInCustForm from '../screenSnippets/SignInCustForm'

const SignInCust = (navigationProps) => {
    return(
        <React.Fragment style={myStyles.all}>
            <View style = { myStyles.pageTop }>
                <Text style = { myStyles.h1}> MobileMechanic </Text>
                <Text style = { myStyles.h2}> Sign In </Text>
            </View>
            <SignInCustForm 
                navigateTo = { navigationProps.navigation.navigate }
            />
            <View style = { myStyles.pageBottom }> 
                <Text> Do not Have an Account? <Text style = { {color: "#26B9B6"} } onPress = { () => navigationProps.navigation.navigate('PreSignUp') }> SIGN UP </Text> </Text>
            </View>
        </React.Fragment>
    );
}

const myStyles = StyleSheet.create({
    all: {
        backgroundColor: "#F2F2F3"
    },
    h1: {
        marginTop:70,
        fontSize:35,
    },
    h2: {
        marginTop:20,
        fontSize:25,
        fontWeight: 'bold'
    },
    pageTop: {
        marginTop: 20    
    }, 
    pageBottom: {
        margin: "20%",
        marginTop: 10,
        textAlign: "center"
    }, 
    urlLinking: {
        backgroundColor : "#26B9B6",
        color: "#26B9B6",
        fontSize: 12
    }, 
});

export default SignInCust
