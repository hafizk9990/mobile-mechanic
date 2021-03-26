import React from 'react' 
import { View, Text, StyleSheet, TextInput, Button } from 'react-native' 
import { Formik } from 'formik'
import * as yup from 'yup'

const yupValidationSchema = yup.object({
    email: yup.string().required(),
    phone: yup.string().required()
});

const SignUpForm = () => {
    return(
        <Formik
            initialValues = { {email: '', phone: ''} }
            validationSchema = { yupValidationSchema }
            onSubmit = { (formData, actions) => {
                console.log('Form Data:', formData);
                actions.resetForm();
            }}
            > 
            {
                (formikProps) => {
                    return(
                        <View style = { myStyles.form }> 
                            <TextInput 
                                style = { { textAlign: 'center' } }
                                placeholder = "Enter Your Email"
                                onChangeText = {formikProps.handleChange('email')}
                                value = { formikProps.values.email }
                            />
                            <Text style = { myStyles.formError }> { formikProps.errors.email } </Text>
                            <TextInput 
                                style = { { textAlign: 'center' } }
                                placeholder = "Enter Your Phone"
                                onChangeText = { formikProps.handleChange('phone') }
                                value = { formikProps.values.phone }
                                keyboardType = 'numeric'
                            />
                            <Text style = { myStyles.formError }> { formikProps.errors.phone } </Text>
                            <Button title = "Sign Up" onPress = { formikProps.handleSubmit } />
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
    formError: {
        color: 'red', 
        fontSize: 12,
        textAlign: 'center'
    }
});

export default SignUpForm