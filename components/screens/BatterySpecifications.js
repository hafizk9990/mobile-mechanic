import React, {useState} from 'react' 
import { ScrollView, Button, CheckBox, View, Text, Dimensions, StyleSheet, TextInput, SafeAreaView, Alert } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'

var windowHeight = Dimensions.get('window').height;
var windowWidth = Dimensions.get('window').width;

const BatterySpecifications = (navigationProps) => {

    const [batteryState, setbatteryState] = useState([{k:'Gel Battery', v: false}, {k:'Calcium Battery', v: false}, {k:'AGM Battery', v: false}, {k:'Deep Cycle Battery', v: false}, {k:'Not Sure', v: false}]);
    const [num, setnum] = useState(5);
    const [description, setdescription] = useState(" ")

    const pressHandler = (i) => {
        setbatteryState( (prevbatteryState) => {
            var newState = {k:prevbatteryState[i].k, v: !prevbatteryState[i].v}
            var newbatteryState = [...prevbatteryState.slice(0,i), newState, ...prevbatteryState.slice(i+1, num)]
            return  newbatteryState;
        });
      };


    var battery = [];
    for(let i = 0; i < batteryState.length; i++){

		battery.push(
			<View key = {i} style = {mystyles.heading3}>
                    <Text style = { mystyles.title2 }>{batteryState[i].k}</Text>
                    <CheckBox
                    value= {batteryState[i].v}
                    onValueChange={(key) => pressHandler(i)}
                    />
			</View>
		)
	}



    

    return(
        
        <ScrollView behavior="padding"> 
            <View style={mystyles.heading} >
                <Text style = {mystyles.title}>Services</Text>
            </View >
            <View style = {mystyles.view1} behavior="padding">
                <View style = { mystyles.heading1 }>
                    <Text style = { mystyles.title1 }> Specifications </Text>
                    <MaterialCommunityIcons style = { mystyles.icon } name = "location-exit" size = { 30 } color = "gray" onPress = { () => navigationProps.navigation.goBack() }/>
                </View>
                <View style = {mystyles.heading2}>
                    {battery}
                    <View style = {mystyles.description}>
                        <Text style = { mystyles.title2 }>Description</Text>
                        
                    </View>
                    <View style = {mystyles.heading3}>
                        <SafeAreaView>
                        <TextInput
                            multiline={true}
                            numberOfLines={2}
                            onChangeText={(text) => setdescription(text)}
                            value={description}
                            style={mystyles.input}
                            
                        />
                        </SafeAreaView>
                        
                    </View>
                    <View style = {mystyles.heading4}>
                    <Button
                        onPress={()=> Alert.alert('Shopping cart is not implemented' )}
                        title="Add to cart"
                        color="#841584"
                    />
                        
                    </View>
                    

                    
                </View>
            </View>
        </ScrollView>
    );
}
export default BatterySpecifications

const mystyles = StyleSheet.create( {
    heading: {
        height:70,
        paddingTop: 0.05*windowHeight,
        backgroundColor: 'white',
        borderBottomWidth:2,
        borderRadius: 20,
    },
    title: {
        textAlign: 'center',
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
    view1: {
        marginLeft: 0.1*windowWidth,
        marginTop: 0.08*windowHeight,
        marginRight: 0.1*windowWidth,
        marginBottom: 0.01*windowHeight,
        backgroundColor: '#ffe',

    },
    heading1: {
        height: 70,
        paddingTop: 0.05*windowHeight,
        flexDirection: 'row',
        borderBottomWidth:2,
        borderRadius: 20,
        borderColor:'#111'
    },
    title1: {
        color: 'black',
        fontSize: 25,
    },
    icon: {
        left: windowWidth * 0.20,
        transform: [{rotateY: '180deg'}],
        
    },
    heading2: {
        paddingTop: 0.01*windowHeight,
    },
    title2: {
        color: 'black',
        fontSize: 20,
        marginLeft: windowWidth * 0.05,
    },
    heading3: {
        paddingTop: 0.02*windowHeight,
        borderBottomWidth:1,
        borderRadius: 20,
        borderColor:'#fee',
        flexDirection: 'row',
    },
    input: {
        height: 50,
        width: 0.7*windowWidth,
        margin: 1,
        borderWidth: 2,
        marginLeft: windowWidth * 0.05,
        textAlignVertical: 'top',

    },
    descrption: {
        paddingTop: 0.02*windowHeight,
    },
    heading4: {
        paddingTop: 0.02*windowHeight,
        marginLeft: windowWidth * 0.05,
        marginRight: windowWidth * 0.05,

    },

})
