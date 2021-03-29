import React from 'react' 
import { View, StyleSheet, Text, Button } from 'react-native' 

const PreSignUp = (navigationProps) => {
    return(
        <React.Fragment> 
            <View style = { myStyles.mobMech }> 
                <Text> MobileMechanic </Text>
            </View>
            <View style = { myStyles.signUp }> 
                <Text> Sign In </Text>
            </View>
            <View> 
                <Button
                    title = "Customer"
                    onPress = { () => navigationProps.navigation.navigate('SignInCust') }
                />
                <Button 
                    title = 'Mechanic' 
                    onPress = { () => navigationProps.navigation.navigate('SignInMech') }
                />
            </View>
            <Text> 
                Do Not Have an Account? <Text style = { {color: 'blue'} } onPress = { () => navigationProps.navigation.navigate('PreSignUp') }> SIGN UP </Text>
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
