import { Formik } from 'formik'
import React from 'react' 
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native' 
import firebase from "../../components/screenSnippets/FirebaseInit";


const RatingReviews = (navigationProps) => {
    //fetch parameters from navigation
    const userId = navigationProps.navigation.getParam('userId')
    const userLabel = navigationProps.navigation.getParam('userLabel')
    const reviewBy = navigationProps.navigation.getParam('reviewBy')
    const nextScreen = navigationProps.navigation.getParam('nextScreen')
    
    const path = `mobileMechanic/${userLabel}/${userId}`
    let userRating = 0
    let numRatedBy = 0
    
    //get existing values from database if any
    firebase.database().ref(`${path}/rating/value`).once('value', (data) => {
        if(data){
            userRating = parseFloat(JSON.stringify(data));
        }
    });
    firebase.database().ref(`${path}/rating/count`).once('value', (data) => {
        if(data){
            numRatedBy = parseInt(JSON.stringify(data));
        }
    });

    const updateDataBase = (rating, review) =>{
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let today = date + '-' + month + '-' + year;
        
        let newRating
        if(userRating > 0){
            newRating = (userRating + parseFloat(rating))/2 //if rating exists in database, average out to get updated value
        } else{
            newRating = rating
        }
        console.log(`newRating ${newRating}`)
        firebase.database().ref(`${path}/rating`).update({
            value: newRating,
            count: numRatedBy + 1   //increment number of ratings
        }).then( () => {
            firebase.database().ref(`${path}/reviews`).push({   //if rating successfuly updated, push review
                date: today,
                text: review,
                by: reviewBy
            }).then( () => {    //if review successfuly pushed, notify user
                Alert.alert(
                    'Thankyou for sharing!',
                    'Your feedback will help others make better choices :)',
                    [ 
                        { 
                            text: "Done", 
                            onPress: () => navigationProps.navigation.navigate(nextScreen)
                        },
                        {
                            text: "Cancel",
                            onPress: () => console.log("cancel alert button")
                        }
                    ]
                )
            }).catch((error) => console.log(error))
        }).catch((error)=>console.log(error))
    }
    return(
        <Formik
        initialValues={{ review: "", rate: "" }}
        onSubmit={(formData, actions) => {
          console.log("Form Data:", formData);
          updateDataBase(formData.rate, formData.review)
        }}
      >
        {(formikProps) => {
          return (
            <View style={myStyles.form}>
              <TextInput
               style = { myStyles.inputField }  //change to star rating
               placeholder = "Enter Your Rating"
               onChangeText = { formikProps.handleChange('rate') }
               value = { formikProps.values.rate }
               keyboardType = 'numeric'
              />
              <TextInput
                multiline
                style={myStyles.inputField}
                placeholder="Enter Your Review"
                onChangeText={formikProps.handleChange("review")}
                value={formikProps.values.review}
              />
              <TouchableOpacity
                style={myStyles.loginScreenButton}
                onPress={formikProps.handleSubmit}
                underlayColor="#fff"
              >
                <Text style={myStyles.loginText}>Post Review</Text>
              </TouchableOpacity>
              {/* add cancel button */}
            </View>
          );
        }}
      </Formik>
    );
}

const myStyles = StyleSheet.create({
    form: {
      textAlign: "center",
    },
    inputField: {
      padding: 6,
      textAlign: "center",
    },
    continueButton: {
      backgroundColor: "red",
    },
    loginScreenButton: {
      marginRight: 40,
      marginLeft: 40,
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "#35b8b6",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#fff",
      position: "relative",
    },
    loginText: {
      color: "#fff",
      textAlign: "center",
      paddingLeft: 10,
      paddingRight: 10,
    },
    button: {
      backgroundColor: "#00aeef",
      borderColor: "red",
      borderWidth: 5,
      borderRadius: 15,
    },
    formError: {
      color: "red",
      fontSize: 12,
      textAlign: "center",
    },
  });
export default RatingReviews
