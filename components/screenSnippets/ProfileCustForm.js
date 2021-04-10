import React from 'react' 
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native' 
import { Formik, Field } from 'formik'
import * as yup from 'yup' 

// In this screen, you should use the user-provided email to check if they exist or not ... 
// If they do, you should append their details (along with their image) to their document
// in Firebase ... 

const schema = yup.object({
    firstName: yup.string().required('First name is required'), 
    lastName: yup.string().required('Last name is required'), 
    age: yup.number().required().positive().integer(),
    creditCard: yup.string().required('Credit card number is required').length(16), 
    email: yup.string().email().required('Email address is required')
});

const ProfileCustForm = () => {
    return(
        <ScrollView> 
            <Formik 
                initialValues = { {firstName: '', lastName: '', age: '', email: '', creditCard: ''} }
                validationSchema = { schema }
                onSubmit = { (submittedData, control) => {
                    console.log(submittedData);
                    control.resetForm();
                }}
            > 
            {
                (formikProps) => {
                    return(
                        <View>
                            <TextInput 
                                style = { {textAlign: 'center'} }
                                placeholder = 'Your First Name'
                                onChangeText = { formikProps.handleChange('firstName') }
                                value = { formikProps.values.firstName }
                            />
                            <Text style = { myStyles.errors }> { formikProps.touched.firstName && formikProps.errors.firstName } </Text>
                            
                            <TextInput 
                                style = { {textAlign: 'center'} }
                                placeholder = 'Your Last Name'
                                onChangeText = { formikProps.handleChange('lastName') }
                                value = { formikProps.values.lastName }
                            />
                            <Text style = { myStyles.errors }> { formikProps.touched.lastName && formikProps.errors.lastName } </Text>

                            <TextInput 
                                style = { {textAlign: 'center'} }
                                placeholder = 'Your Age'
                                onChangeText = { formikProps.handleChange('age') }
                                value = { formikProps.values.age }
                            />
                            <Text style = { myStyles.errors }> { formikProps.touched.age && formikProps.errors.age } </Text>

                            <TextInput 
                                style = { {textAlign: 'center'} }
                                placeholder = 'Re-enter Your Email'
                                onChangeText = { formikProps.handleChange('email') }
                                value = { formikProps.values.email }
                            />
                            <Text style = { myStyles.errors }> { formikProps.touched.email && formikProps.errors.email } </Text>
                            
                            <TextInput 
                                style = { {textAlign: 'center'} }
                                placeholder = 'Enter Credit Card Number'
                                onChangeText = { formikProps.handleChange('creditCard') }
                                value = { formikProps.values.creditCard }
                            />
                            <Text style = { myStyles.errors }> { formikProps.touched.creditCard && formikProps.errors.creditCard } </Text>
                                
                            <Button title = 'Update Profile' onPress = { formikProps.handleSubmit  } />
                        </View>
                    );
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