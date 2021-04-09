import React from 'react' 
import { View, Text, StyleSheet, TextInput, Button } from 'react-native' 
import { Formik } from 'formik'
import firebase from './FirebaseInit'
import { NavigationActions } from 'react-navigation'

// const navigation = useNavigation();

const SignInCustForm = (props) => {
    return(
        <Formik 
            initialValues = { {email: '', pass: ''} }
            onSubmit = { (formData, actions) => {
                console.log('Form Data:', formData);
                let userEmail = formData.email;
                userEmail = userEmail.replace(/\./g, ','); 
                let userEmailToPass = userEmail.replace(/\,/g, '.'); 
                let userPassword = formData.pass;
                
                firebase.database().ref(`mobileMechanic/Clients/${ userEmail }`).once('value', (data) => {
                    let firebaseDataString = JSON.stringify(data); // JavaScript object to string
                    let firebaseDataJSON = JSON.parse(firebaseDataString); // String to JSON

                    if (firebaseDataJSON) {
                        if (firebaseDataJSON.password === userPassword) {
                            console.log(`Login Successful .... Email and password both match`);
                            props.navigateTo('CustTabsWrapper', {userEmail: userEmailToPass});
                            // we pass these params to the tabsNavigator and then access in all 3 children
                            // (Home, Settings, Profile)
                        } 
                        else {
                            console.log(`Login Failed ... Email matched but password did not`);
                        }
                    }
                    else {
                        console.log(`Login Failed .... Email did not match. Did not check password to save time`);
                    }
                })
                actions.resetForm();
            }}> 
            {
                (formikProps) => {
                    return(
                        <View style = { myStyles.form }> 
                            <TextInput 
                                style = { myStyles.inputField }
                                placeholder = "Enter Your Email"
                                onChangeText = {formikProps.handleChange('email')}
                                value = { formikProps.values.email }
                            />
                            <TextInput 
                                style = { myStyles.inputField }
                                placeholder = "Enter Your Password"
                                secureTextEntry = {true}
                                onChangeText = { formikProps.handleChange('pass') }
                                value = { formikProps.values.pass }
                            />
                            <Button title = "Continue" onPress = { formikProps.handleSubmit } />
                        </View>
                    );
                }
            }
        </Formik>
    );
}

const myStyles = StyleSheet.create({
    form: {
        textAlign: 'center', 
    },
    inputField: {
        textAlign: 'center'
    },
    formError: {
        color: 'red', 
        fontSize: 12,
        textAlign: 'center'
    }
});

export default SignInCustForm



// props.navigateTo(
                            //     'CustTabsWrapper',
                            //     {}, 
                            //     NavigationActions.navigate({
                            //         routeName: 'Home', // navigate to Home sub-route inside the nested navigator, called CustTabsWrapper on the main navigator, called StackWrapper
                            //         params: {userEmail: userEmailToPass}
                            //     })
                            // );