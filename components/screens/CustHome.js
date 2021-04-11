import React from 'react' 
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native' 
import { AntDesign } from '@expo/vector-icons'
import db from '../screenSnippets/ServicesDatabase'

var windowWidth = Dimensions.get('window').width; 
var windowHeight = Dimensions.get('window').height;

const CustHome = (navigationProps) => {
    const handleTextChange = () => {
        console.log(`You wrote something in the input text field ...`);
    }

    const pressHandler = (itemKey, itemName) => {
        console.log(`Item touched ${itemKey} ${itemName}`)
        navigationProps.navigation.navigate('BatterySpecifications');
        
    }

    return(
        <React.Fragment> 
            <View style = { {marginTop: windowWidth * 0.075} }> 
            <Text style = { {marginTop: '12%', marginBottom: 20, fontSize: 30, textAlign: 'center'}}> Select Services </Text>
            </View>
            {
                // <Text> The user is: {navigationProps.navigation.getParam('userEmail')} </Text>
            }
            <View style = { {flexDirection: 'row'} }>
                {
                    // <TextInput
                    // style = { {textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center'} }
                    // placeholder = 'Search More Services'
                    // onChangeText = { handleTextChange }
                    // />
                    // <AntDesign name = "search1" size = {18} color = "gray" />
                }
                
            </View>
            <View style = { {marginBottom: windowHeight * 0.22, marginLeft: windowWidth * 0.185} }>
                {
                    <FlatList 
                        numColumns = {3}
                        data = { db }
                        renderItem = { ( {item} ) => {
                            return(
                                <View> 
                                    <TouchableOpacity onPress = { () => pressHandler(item.key, item.offering) }> 
                                        <View style = { {marginTop: windowHeight * 0.04, marginBottom: windowHeight * 0.07} }> 
                                            <View style = { {marginRight: windowWidth * 0.1} }> 
                                                <Image style = { {width: windowWidth * 0.14,  height: windowHeight * 0.08} } source = { myStyles[item.key] } />
                                                <Text> { item.offering } </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                
                            );
                        }}
                    />
                }
            </View>
        </React.Fragment>
    );
}

const myStyles = StyleSheet.create({
    0: require('../../assets/icons/oil-change.png'), 
    1: require('../../assets/icons/battery-check.png'),
    2: require('../../assets/icons/automotive.png'),
    3: require('../../assets/icons/car-washing.png'),
    4: require('../../assets/icons/tyre-changing.png'),
    5: require('../../assets/icons/delivery-inspection.png'),
    6: require('../../assets/icons/car-cleaning.png'),
    7: require('../../assets/icons/conditioner-system-repair.png'),
    8: require('../../assets/icons/airbrush.png'),
    9: require('../../assets/icons/radiator.png'), 
    10: require('../../assets/icons/brakes.png'),   
    11: require('../../assets/icons/car-repair.png'),
    12: require('../../assets/icons/service.png') 
});

export default CustHome
