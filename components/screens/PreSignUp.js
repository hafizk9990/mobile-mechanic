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
                    onPress = { () => navigationProps.navigation.navigate('FullCustomerStack') }
                />
                <Button 
                    title = 'Mechanic' 
                    onPress = { () => navigationProps.navigation.navigate('FullMechanicStack') }
                />
            </View>
            <Text> Already Have an Account? Sign In </Text>
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
