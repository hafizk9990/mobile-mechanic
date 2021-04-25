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
              <Text style = { myStyles.title  }> Review </Text>
              <Text style = { myStyles.subtitle  }> Rate & Review </Text>

              {/* Star Rating */}
              <TextInput
               style = { myStyles.starRating }  //change to star rating
               placeholder = "Enter Your Rating"
               onChangeText = { formikProps.handleChange('rate') }
               value = { formikProps.values.rate }
               keyboardType = 'numeric'
              />

              {/* reviewBox */}
              <TextInput
                multiline
                style={myStyles.reviewBox}
                placeholder="Please type your review here"
                onChangeText={formikProps.handleChange("review")}
                value={formikProps.values.review}
              />
              <TouchableOpacity
                style={myStyles.postButton}
                onPress={formikProps.handleSubmit}
                underlayColor="#fff"
              >
                <Text style={myStyles.loginText}>Post Review</Text>
              </TouchableOpacity>
              {/* add cancel button */}
              <TouchableOpacity
                style={myStyles.cancelButton}
                onPress={formikProps.handleSubmit}
                underlayColor="#fff"
              >
                <Text style={myStyles.loginText}>Cancel</Text>
              </TouchableOpacity>
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
    starRating: {
      padding: 6,
      textAlign: "center",
      color: "red"
    },
    reviewBox: {
      marginTop: 20,
      height: 120,
      width: '86%',
      margin: 2,
      borderWidth: 1,
      padding: 5,
      textAlignVertical: 'top',
      color: "black",
      borderRadius: 10,
      marginLeft: '7%',
      marginRight: '7%',
      marginBottom: 10
    },
    continueButton: {
      backgroundColor: "red",
    },
    postButton: {
      marginRight: '18%',
      marginLeft: '18%',
      marginTop: 30,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "#35b8b6",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#fff",
      position: "relative",
      borderRadius: 30,
    },
    cancelButton: {
      marginRight: '18%',
      marginLeft: '18%',
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "#7f7f7f",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#fff",
      position: "relative",
      borderRadius: 30,
    },
    loginText: {
      fontSize: 15,
      color: "#fff",
      textAlign: "center",
      paddingLeft: 10,
      paddingRight: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 35,
      marginTop: '12%',
      textAlign: 'center',
      padding: 15
    },
    subtitle: {
      borderTopWidth: 1,
      fontSize: 25,
      marginTop: '4%',
      textAlign: 'left',
      padding: 15
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
