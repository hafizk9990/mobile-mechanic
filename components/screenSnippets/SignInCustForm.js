import React from 'react' 
import { View, Text, StyleSheet, TextInput, Button } from 'react-native' 
import { Formik } from 'formik'
import firebase from './FirebaseInit'

const SignInCustForm = (props) => {
    return(
        <Formik 
            initialValues = { {email: '', pass: ''} }
            onSubmit = { (formData, actions) => {
                console.log('Form Data:', formData);
                let userEmail = formData.email;
                userEmail = userEmail.replace(/\./g, ','); 
                let userPassword = formData.pass;
                
                firebase.database().ref(`mobileMechanic/Clients/${ userEmail }`).once('value', (data) => {
                    if (data) {
                        let firebaseDataString = JSON.stringify(data); // JavaScript object to string
                        let firebaseDataJSON = JSON.parse(firebaseDataString); // String to JSON

                        if (firebaseDataJSON && firebaseDataJSON) { // this does not seem to work. If the user enters wrong email address, DB returns null. But here, null is not captured //////////////////////////////////////////////////////////////
                            console.log(`Firebase gave: ${ firebaseDataJSON.password } ${ firebaseDataJSON.phone }`);

                            if (firebaseDataJSON.password === userPassword) {
                                console.log(`Login Successful .... Email and password both match`);
                                props.navigateTo('ServicesCust');
                            } 
                            else {
                                console.log(`Login Failed ... Email matched but password did not`);
                            }
                        }
                        else {
                            console.log(`Login Failed .... DB returned null. Email did not match`);
                        }   
                    }
                    else if (!data) {
                        console.log(`Login Failed ... Wrong email ID`);
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