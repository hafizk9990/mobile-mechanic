import React from 'react' 
import { View, Text, Image } from 'react-native'
import { FontAwesome, Ionicons, Entypo, Feather } from '@expo/vector-icons'

const SettingsCust = () => {
    let dummyImage = require('../../assets/john-doe.jpg');
    return(
        <React.Fragment> 
            <View style = { {marginTop: 20, marginBottom: 50, textAlign: 'center', alignItems: 'center'} }> 
            </View>

            <View style = { {flexDirection: 'row', marginBottom: 40} }>
                <Image style = { {width: 70, height: 70, borderRadius: 35, marginLeft: 15} }source = {dummyImage} />
                <Text style = { {marginLeft: 25, fontWeight: 'bold', fontSize: 24} }> John Doe </Text>
                <FontAwesome style = { {marginLeft: 170} } name = "pencil-square-o" size = { 19 } color = "gray" onPress = { () => console.log('Update Profile Clicked') }/>
            </View>
 
            <View style = { {flexDirection: 'row', marginBottom: 40} }>
                <Ionicons style = { {marginLeft: 20} } name = "person" size = { 24 } color = "green" />
                <Text style = { {marginLeft: 10} }> Online Status </Text>
                <FontAwesome style = { {marginLeft: 240} } name = "toggle-off" size = { 30 } color = "gray" />
            </View>

            <View style = { {flexDirection: 'row', marginBottom: 40} }>
                <Ionicons style = { {marginLeft: 20} } name = "notifications" size = { 24 } color = "green" />
                <Text style = { {marginLeft: 10} }> Notifications Alert </Text>
                <FontAwesome style = { {marginLeft: 215} } name = "toggle-on" size = { 30 } color = "green" />
            </View>

            <View style = { {flexDirection: 'row', marginBottom: 40} }> 
                <Entypo style = { {marginLeft: 20} } name = "key" size = { 24 } color = "green" />
                <Text style = { {marginLeft: 10} }> Change Password </Text>
                <Feather style = { {marginLeft: 215} } name = "arrow-right" size = { 24 } color = "gray" />
            </View>

            <View style = { {flexDirection: 'row', marginBottom: 40} }> 
                <Ionicons style = { {marginLeft: 20} } name = "document-text-sharp" size = { 24 } color = "green" />
                <Text style = { {marginLeft: 10} }> Terms of Service </Text>
                <Feather style = { {marginLeft: 220} } name = "arrow-right" size = { 24 } color = "gray" />
            </View>

            <View style = { {flexDirection: 'row', marginBottom: 40} }>
                <Entypo style = { {marginLeft: 20} } name = "log-out" size = { 24 } color = "green" /> 
                <Text style = { {marginLeft: 10} }> Sign Out </Text>
            </View>
        </React.Fragment>
    );
}
export default SettingsCust
