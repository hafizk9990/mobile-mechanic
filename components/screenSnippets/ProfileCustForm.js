import React, { useState } from 'react' 
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native' 
import { Formik, Field } from 'formik'
import * as yup from 'yup' 
import firebase from '../screenSnippets/FirebaseInit'

const schema = yup.object({
    firstName: yup.string().required('First name is required'), 
    lastName: yup.string().required('Last name is required'), 
    age: yup.number().required().positive().integer(),
    creditCard: yup.string().required('Credit card number is required').length(16), 
    wallet: yup.number().required().positive().integer(),
});

const ProfileCustForm = (props) => {
    let userEmail = props.userEmail;
    let currentBalance = 0;
    userEmail = userEmail.replace(/\./g, ',');

    const [firstNameToShow, setFirstName] = useState('Enter Your First Name');
    const [lastNameToShow, setLastName] = useState('Enter Your Last Name');
    const [ageToShow, setAge] = useState('Enter Your Age');
    const [creditCardToShow, setCreditCard] = useState('Enter Your Credit Card');
    const [walletToShow, setWallet] = useState('Wallet is empty (0 Rs)');

    const getData = () => {
        firebase.database().ref(`mobileMechanic/Clients/${ userEmail }`).once('value', (data) => {
            let firebaseDataString = JSON.stringify(data); // JavaScript object to string
            let firebaseDataJSON = JSON.parse(firebaseDataString); // String to JSON
        
            if (firebaseDataJSON.firstName) {
                console.log('Got data successfully ...');
                setFirstName('FIRST NAME: ' + firebaseDataJSON.firstName);
            }
            if (firebaseDataJSON.lastName) {
                setLastName('LAST NAME: ' + firebaseDataJSON.lastName);
            }
            if (firebaseDataJSON.age) {
                setAge('AGE: ' + firebaseDataJSON.age);
            }
            if (firebaseDataJSON.creditCard) {
                setCreditCard('CREDIT CARD NUMBER: ' + firebaseDataJSON.creditCard);
            }
            if (firebaseDataJSON.wallet) {
                currentBalance = firebaseDataJSON.wallet;
                setWallet('CURRENT BALANCE: Rs ' + firebaseDataJSON.wallet);
            }
        })
    }

    getData();
    
    return(
        <ScrollView> 
            <Formik 
                initialValues = { {firstName: '', lastName: '', age: '', creditCard: '', wallet: ''} }
                validationSchema = { schema }
                onSubmit = { (submittedData, control) => {
                    control.resetForm();

                    let firstName = submittedData.firstName; 
                    let lastName = submittedData.lastName; 
                    let age = submittedData.age;
                    let creditCardNumb = submittedData.creditCard;
                    let walletMoney = submittedData.wallet;

                    firebase.database().ref(`mobileMechanic/Clients/${userEmail}`).update({
                        firstName: firstName, 
                        lastName: lastName, 
                        age: age, 
                        creditCard: creditCardNumb,
                        wallet: parseInt(walletMoney) + parseInt(currentBalance)
                    }).then( () => { 
                        console.log(`Profile updation successful ...`);
                        getData();
                    })
                    .catch( () => { 
                        console.log(`Profile updation failed ...`);
                    });
                }}
            > 
            {
                (formikProps) => {
                    return(
                        <View>
                            <TextInput 
                                style = { {textAlign: 'center'} }
                                placeholder = {firstNameToShow}
                                onChangeText = { formikProps.handleChange('firstName') }
                                value = { formikProps.values.firstName }
                            />
                            <Text style = { myStyles.errors }> { formikProps.touched.firstName && formikProps.errors.firstName } </Text>
                            
                            <TextInput 
                                style = { {textAlign: 'center'} }
                                placeholder = {lastNameToShow}
                                onChangeText = { formikProps.handleChange('lastName') }
                                value = { formikProps.values.lastName }
                            />
                            <Text style = { myStyles.errors }> { formikProps.touched.lastName && formikProps.errors.lastName } </Text>

                            <TextInput 
                                style = { {textAlign: 'center'} }
                                placeholder = {ageToShow}
                                onChangeText = { formikProps.handleChange('age') }
                                value = { formikProps.values.age }
                            />
                            <Text style = { myStyles.errors }> { formikProps.touched.age && formikProps.errors.age } </Text>

                            <TextInput 
                                style = { {textAlign: 'center'} }
                                placeholder = {creditCardToShow}
                                onChangeText = { formikProps.handleChange('creditCard') }
                                value = { formikProps.values.creditCard }
                            />
                            <Text style = { myStyles.errors }> { formikProps.touched.creditCard && formikProps.errors.creditCard } </Text>
                            
                            <TextInput 
                                style = { {textAlign: 'center'} }
                                placeholder = { walletToShow }
                                onChangeText = { formikProps.handleChange('wallet') }
                                value = { formikProps.values.wallet }
                            />
                            <Text style = { myStyles.errors }> { formikProps.touched.wallet && formikProps.errors.wallet } </Text>
                                
                            <Button title = 'Update Profile' onPress = { formikProps.handleSubmit  } />
                        </View>
                    )
                }
            }
            </Formik>
        </ScrollView>
    );
}

const myStyles = StyleSheet.create({
    errors: {
        color: 'red', 
        textAlign: 'center', 
        fontSize: 12
    }
});

export default ProfileCustForm