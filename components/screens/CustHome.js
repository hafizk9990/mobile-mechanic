import React from 'react' 
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native' 
import { AntDesign } from '@expo/vector-icons'
import db from '../screenSnippets/ServicesDatabase'

const CustHome = (navigationProps) => {
    const handleTextChange = () => {
        console.log(`You wrote something in the input text field ...`);
    }

    const pressHandler = (itemKey, itemName) => {
        console.log(`Item touched ${itemKey} ${itemName}`)
    }

    return(
        <React.Fragment> 
            <View style = { {marginTop: 20} }> 
                <Text> Services </Text>
            </View>
            <Text> The user is: {navigationProps.navigation.getParam('userEmail')} </Text>
            <View style = { {flexDirection: 'row'} }>
                <TextInput 
                    style = { {} }    
                    placeholder = 'Search More Services'
                    onChangeText = { handleTextChange }
                />
                <AntDesign 
                    name = "search1" 
                    size = {18} 
                    color = "gray" 
                />
            </View>
            <View>
                {
                    <FlatList 
                        data = { db }
                        renderItem = { ( {item} ) => {
                            return(
                                <View> 
                                    <TouchableOpacity onPress = { () => pressHandler(item.key, item.offering) }> 
                                        <View style = { {marginTop: 10, marginBottom: 50} }> 
                                            <View> 
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

});

export default CustHome

