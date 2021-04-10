import React from 'react'
import { View, Text, StyleSheet, Linking,Dimensions } from 'react-native' 
import SignInCustForm from '../screenSnippets/SignInCustForm'
//import { SearchBar } from 'react-native-elements';
//import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

var windowHeight = Dimensions.get('window').height;
var windowWidth = Dimensions.get('window').width;

const SignInCust = (navigationProps) => {
    return(
        <React.Fragment style={myStyles.all}>
            <View style = { myStyles.pageTop }>
                <Text style = { myStyles.title  } > MobileMechanic </Text>
                <Text style = { myStyles.signin  } > Sign In </Text>
                <Text style = { myStyles.useyouraccount  } > Use your account </Text>
            </View>
            <SignInCustForm 
                navigateTo = { navigationProps.navigation.navigate }
            />
            <View style = { myStyles.termsofservice }> 
                <Text>By continuing, you agree to accept our <Text style = { {color: "#35b8b6"} } onPress = { () => navigationProps.navigation.navigate('PreSignUp') }> PRIVACY POLICY   & TERMS OF SERVICE  </Text> </Text>
            </View>
            <View style = { myStyles.pageBottom }> 
                <Text> Do not Have an Account? <Text style = { {color:"#35b8b6"} } onPress = { () => navigationProps.navigation.navigate('PreSignUp') }> SIGN UP </Text> </Text>
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
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: windowHeight * 0.008,
        textAlign: 'center'
    }, 
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: windowHeight * 0.01,
        textAlign: 'center',
        padding: 30
    },
    
    signin: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        padding: 3
    },
    useyouraccount: {
        fontSize: 9,
        
        textAlign: 'center',
    },
    termsofservice: {
        fontSize: 4,
        padding: 10,
        textAlign: 'center',
        marginLeft: 25,
        marginRight: 25,
    },
    pageBottom: {
        fontSize: 4,
        padding: 60,
        textAlign: 'center',
        marginRight: 15,
        marginBottom: 25,

    }, 
    urlLinking: {
        backgroundColor : "#26B9B6",
        color: "#26B9B6",
        fontSize: 12
    }, 
});

export default SignInCust
