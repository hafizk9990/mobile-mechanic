import React from 'react' 
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native' 
import firebase from '../screenSnippets/FirebaseInit'
import { Formik } from 'formik'
import * as yup from 'yup'

const Payments = (navigationProps) => {
    let userEmail = navigationProps.navigation.getParam('userEmail');
    let acceptedCNIC = navigationProps.navigation.getParam('cnic');
    let array = navigationProps.navigation.getParam('array');
    let charges = navigationProps.navigation.getParam('charges');
    let userWallet = navigationProps.navigation.getParam('wallet');
    let place = `You Owe Rs. ${ charges }`;
    let mechanicWallet = '';

    firebase.database().ref(`mobileMechanic/Mechanics/${ acceptedCNIC }/wallet`).once('value', (data) => {
        mechanicWallet = parseInt(JSON.stringify(data));
    });

    const yupValidationSchema = yup.object({
        money: yup.number().required('You Must Pay the Mechanic') 
    });

    const paymentMethod = (moneyPaid) => {
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let today = date + '-' + month + '-' + year;
        let random = Math.floor((Math.random() * 1000000000) + 1);
        
        firebase.database().ref(`mobileMechanic/Clients/${ userEmail }`).update({ // update client's wallet
            wallet: parseInt(JSON.stringify(userWallet)) - charges
        }).then( () => {
            firebase.database().ref(`mobileMechanic/Mechanics/${ acceptedCNIC }`).update({ // update mechanic's wallet as well
                wallet: mechanicWallet + charges
            }).then( () => {
                firebase.database().ref(`mobileMechanic/mechanicTransactions/${ acceptedCNIC }/${ userEmail }`).update({  // update mechanic's transactions
                    [random]: {
                        totalPayment: charges,
                        date: today
                    }
                }).then( () => {
                    firebase.database().ref(`mobileMechanic/userTransactions/${ userEmail }/${ acceptedCNIC }`).update({ // update user's transactions as well
                        [random]: {
                            totalPayment: charges,
                            date: today
                        }
                    }).then( () => {
                        Alert.alert(
                            'Transaction Successful',
                            `You Paid ${ moneyPaid } rupees`,
                            [ 
                                { 
                                    text: "OK", 
                                    onPress: () => navigationProps.navigation.navigate('RatingReviews', {cnic: acceptedCNIC})
                                }
                            ],
                        );
                    }).catch( (error) => {
                        console.log('Could not update users transactions ...', error);
                        Alert.alert(
                            'Transaction Failed',
                            `Please try again`,
                            [ 
                                { 
                                    text: "OK",
                                }
                            ],
                        );
                    });
                }).catch( (error) => {
                    console.log('Could not update mechanics transactions ...', error);
                });
            }).catch( (error) => {
                console.log('Could not update mechanics wallet ...', error);
            });
        }).catch( (error) => {
            console.log('Could not update users wallet ... ', error);
        });
    }

    array.map( (mechanicCNIC) => {
        if (mechanicCNIC != acceptedCNIC) {
            return(
                firebase.database().ref(`mobileMechanic/mechanicResponse/${ userEmail }/${ mechanicCNIC }`).update({ bidAcceptance: -1 })
            );
        }
        else {
            // firebase.database().ref(`mobileMechanic/userRequests/${ userEmail }`).remove(); ////////////////////////////////////////////////////////////////////////////////////////////////////////////// re do this!!!!
            return(
                firebase.database().ref(`mobileMechanic/mechanicResponse/${ userEmail }/${ acceptedCNIC }`).update({
                    bidAcceptance: 1
                })
            );
        }
    });

    return(
        <React.Fragment> 
        <Text style = { {marginTop: 30} }> Payments </Text>
        <Text style = { {marginBottom: 30, marginTop: 30, textAlign: 'center'} }> The Mechanic is Done Working ... !! </Text>
        <Text style = { {marginBottom: 30} }> { `Total Charges: ${ charges }`} </Text>
            <Formik 
                initialValues = { {money: ''} }
                validationSchema = { yupValidationSchema }
                onSubmit = { (formData, actions) => {
                    console.log('Form Data:', formData);
                    let money = formData.money;
                    actions.resetForm();

                    if (parseInt(money) < parseInt(charges)) {
                        Alert.alert(
                            'Warning! Under Payment',
                            `You need to pay at least ${ charges } rupees. Please pay the exact amount of money from your wallet. We don't accept under payments. Thank you!`,
                            [ { text: "OK" } ],
                        );
                    }
                    else if (parseInt(money) > parseInt(charges)) {
                        let over = money - charges;
                        Alert.alert(
                            'Warning! Over Payment',
                            `You are over paying by ${ over } rupees. Please pay the exact amount of money from your wallet. We don't accept over payments. Thank you!`,
                            [ 
                                { 
                                    text: "OK", 
                                }
                            ],
                        );
                    }
                    else if (parseInt(money) == parseInt(charges)) {
                        paymentMethod(money);
                    }
                    else {
                        console.log('Something went wrong ...');
                    }
                }}
            >
                {
                    (formikProps) => {
                        return(
                            <View style = { myStyles.form }> 
                                <TextInput 
                                    style = { myStyles.inputField }
                                    placeholder = { place }
                                    onChangeText = { formikProps.handleChange('money') }
                                    value = { formikProps.values.money }
                                />
                                <Text style = { myStyles.formError }> { formikProps.touched.money && formikProps.errors.money } </Text>

                                <TouchableOpacity
                                        style = { myStyles.loginScreenButton }
                                        onPress = { formikProps.handleSubmit }
                                        underlayColor = '#fff'>
                                        <Text style = { myStyles.loginText }> Pay! </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }
                }
            </Formik>
        </React.Fragment>
    );
}

const myStyles = StyleSheet.create({
    form: {
        textAlign: 'center', 
    },
    inputField: {
        padding: 6,
        textAlign: 'center'
    },
    continueButton: {
        backgroundColor:"red",
    },
    loginScreenButton:{
        marginRight:40,
        marginLeft:40,
       marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:"#35b8b6",
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        position: 'relative'
      },
  loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
   button: {
      backgroundColor: '#00aeef',
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 15       
   },
    formError: {
        color: 'red', 
        fontSize: 12,
        textAlign: 'center'
    }
});

export default Payments
