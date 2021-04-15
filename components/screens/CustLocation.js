


import React, {useState, useEffect} from 'react' 
import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native' 
import MapView from 'react-native-maps';
//import Geolocation from '@react-native-community/geolocation';

var windowHeight = Dimensions.get('window').height;
var windowWidth = Dimensions.get('window').width;


const CustLocation = (navigationProps) => {
    // console.log(navigationProps.navigation.getParam('carName'));
    // console.log(navigationProps.navigation.getParam('carKey'));
    // console.log(navigationProps.navigation.getParam('carModel'));
    // console.log(navigationProps.navigation.getParam('carNumber'));
    // console.log(navigationProps.navigation.getParam('carRequirements'));
    const [currentLocation,setCurrentLocation] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    })

    useEffect(() => {
        getCurrentPosition()
      }, [])

    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)
      
            var initialRegion = {
              latitude: lat,
              longitude: long,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }
      
            setCurrentLocation(initialRegion)
          },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000});
    }

    

      console.log(currentLocation)


    return(
        <View>
            <View style = { styles.heading1 }>
                <Text style = { styles.title1 }> Customer Locaion </Text>
            </View>
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude:currentLocation.latitude,
                        longitude:currentLocation.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,}}
                >
                <MapView.Marker draggable
                    coordinate={currentLocation}
                    title="My Location"
                    description="Hold it to drag"
                    onDragEnd={(e) => setCurrentLocation(e.nativeEvent.coordinate)}
                />
                </MapView>
            </View>
            <View style = {styles.heading4}>
                <TouchableOpacity
                    style={styles.loginScreenButton}
                    onPress={ () => getCurrentPosition() }
                    // This is only a temporary fix. We are not adding objects to cart,
                    // rather we are directing the user to our next use case, i.e., adding 
                    // their car images, their location and so on and so forth. 
                    // The rest will be implemented later
                    underlayColor='#fff'>
                    <Text style={styles.loginText}> Reset </Text>
                </TouchableOpacity>
            </View>
        </View>
        

    );
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 510,
      width: 360,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop:130,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    heading1: {
        height: 70,
        paddingTop: 0.05*windowHeight,
        flexDirection: 'row',
        borderBottomWidth:2,
        borderRadius: 20,
        borderColor:'#35b8b6'
    },
    title1: {
        marginLeft: windowWidth * 0.02,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 25,
    },
    heading4: {
        paddingTop: 0.02*windowHeight,
        marginLeft: windowWidth * 0.05,
        marginRight: windowWidth * 0.05,

    },
    
    loginScreenButton:{
        marginRight:40,
        marginLeft:40,
       marginBottom:20,
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
  }
   });


export default CustLocation