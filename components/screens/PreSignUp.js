import React from 'react' 
import { View, StyleSheet, Text, Button } from 'react-native' 

const PreSignUp = (navigationProps) => {
    return(
        <React.Fragment> 
            <View style = { myStyles.mobMech }> 
                <Text> MobileMechanic </Text>
            </View>
            <View style = { myStyles.signUp }> 
                <Text> Sign Up </Text>
            </View>
            <View> 
                <Button
                    title = "Customer"
                    onPress = { () => navigationProps.navigation.navigate('SignUpCust') }
                />
                <Button 
                    title = 'Mechanic' 
                    onPress = { () => navigationProps.navigation.navigate('SignUpMech') }
                />
            </View>
            <Text> 
                Already Have an Account? <Text style = { {color: 'blue'} } onPress = { () => navigationProps.navigation.navigate('PreSignIn') }> SIGN IN </Text>
            </Text>
        </React.Fragment>
    );
}

const myStyles = StyleSheet.create({
    mobMech: {
        marginTop: 30
    }, 
    signUp: {

    }
});

export default PreSignUp