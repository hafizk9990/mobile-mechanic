import React from 'react' 
import { Text, View, StyleSheet } from 'react-native' 

const CarDescription = (navigationProps) => {
    let carName = navigationProps.navigation.getParam('carName');
    let carKey = navigationProps.navigation.getParam('carKey');
    console.log(carName, carKey);
    
    return(
        <Text style = { {marginTop: 20} }> Car Description </Text>
        // display big-sized car iamge (rounded and centered) 
        // provide option for adding more images of the car 
        // make a form with car name and car model
        // let them add the model, but you should fill in the name
        // make a description box
        // make a button that says "Proceed"
    );
}

const myStyles = StyleSheet.create({
    0: require('../../assets/car-images/civic.png'), 
    1: require('../../assets/car-images/city.png'),
    2: require('../../assets/car-images/corolla.png'),
    3: require('../../assets/car-images/mehran.png'),
    4: require('../../assets/car-images/alto.png'),
    5: require('../../assets/car-images/vitz.png'),
    6: require('../../assets/car-images/lexus.png'),
    7: require('../../assets/car-images/bmw.png'),
    8: require('../../assets/car-images/bolan.png'),
    9: require('../../assets/car-images/accord.png'), 
    10: require('../../assets/car-images/every.png'),   
    11: require('../../assets/car-images/swift.png'), 
    // Repearing a few cars for now
    12: require('../../assets/car-images/civic.png'), 
    13: require('../../assets/car-images/city.png'),
    14: require('../../assets/car-images/corolla.png'),
    15: require('../../assets/car-images/mehran.png'),
    16: require('../../assets/car-images/alto.png'),
    17: require('../../assets/car-images/vitz.png'),
});

export default CarDescription