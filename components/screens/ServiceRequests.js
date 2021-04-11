import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { FontAwesome, Ionicons, Entypo, Feather } from "@expo/vector-icons";
import firebase from "../../components/screenSnippets/FirebaseInit";
import { SearchBar } from "react-native-elements";
import BoxContainer from "../../components/screenSnippets/BoxContainer";

var windowHeight = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;

const SettingsCust = (tabsNavigationProps) => {
  let name = "Ford Mustang, 2017";
  let image = require("../../assets/icons/car-cleaning.png");
  let image1 = require("../../assets/icons/airbrush.png");
  let image2 = require("../../assets/icons/radiator.png");
  let image3 = require("../../assets/icons/brakes.png");
  let image4 = require("../../assets/icons/bookmard.png");
  let obtainedEmail = tabsNavigationProps.navigation
    .dangerouslyGetParent()
    .getParam("userEmail");
  console.log(obtainedEmail);
  obtainedEmail = obtainedEmail.replace(/\./g, ",");

  const handleTextChange = () => {
    console.log(`You wrote something in the input text field ...`);
  };

  const pressHandler = () => {
    tabsNavigationProps.navigation.navigate("ProfileMech");
  };
  return (
    <ScrollView behavior="padding">
      <SafeAreaView style={{ flex: 1 }}>
        <View style={myStyles.pageTop}>
          <Text style={myStyles.title}> Service Requests </Text>
        </View>
        <View style={myStyles.container}>
          <SearchBar
            style={myStyles.containerinner}
            round
            searchIcon={{ size: 24 }}
            onChangeText={handleTextChange}
            placeholder="  Search Requests..."
          />
        </View>

        <View
          style={{
            marginTop: windowHeight * 0.03,
            marginBottom: windowHeight * 0.03,
          }}
        >
          <TouchableOpacity onPress={() => pressHandler()}>
            <BoxContainer style={myStyles.container1}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ marginBottom: windowHeight * 0.06 }}
                  source={image}
                />
                <Text
                  style={{
                    paddingLeft: windowHeight * 0.01,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  {" "}
                  {name}{" "}
                </Text>
                <Text
                  style={{
                    alignItems: "flex-end",
                    color: "#35b8b6",
                    paddingLeft: windowHeight * 0.01,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {" "}
                  Pending{" "}
                </Text>
              </View>
              <Image
                style={{
                  left: 90,
                  position: "absolute",
                  width: 25,
                  height: 25,
                }}
                source={image1}
              />
              <Image
                style={{
                  left: 125,
                  position: "absolute",
                  width: 25,
                  height: 25,
                }}
                source={image2}
              />
              <Image
                style={{
                  left: 160,
                  position: "absolute",
                  width: 25,
                  height: 25,
                }}
                source={image3}
              />
              <Image
                style={{
                  right: 45,
                  position: "absolute",
                  width: 25,
                  height: 25,
                }}
                source={image4}
              />
            </BoxContainer>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: windowHeight * 0.02,
            marginBottom: windowHeight * 0.02,
          }}
        >
          <BoxContainer style={myStyles.container1}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ marginBottom: windowHeight * 0.06 }}
                source={image}
              />
              <Text
                style={{
                  paddingLeft: windowHeight * 0.01,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                {" "}
                {name}{" "}
              </Text>
              <Text
                style={{
                  alignItems: "flex-end",
                  color: "#35b8b6",
                  paddingLeft: windowHeight * 0.01,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {" "}
                Pending{" "}
              </Text>
            </View>
            <Image
              style={{ left: 90, position: "absolute", width: 25, height: 25 }}
              source={image1}
            />
            <Image
              style={{ left: 125, position: "absolute", width: 25, height: 25 }}
              source={image2}
            />
            <Image
              style={{ left: 160, position: "absolute", width: 25, height: 25 }}
              source={image3}
            />
            <Image
              style={{ right: 45, position: "absolute", width: 25, height: 25 }}
              source={image4}
            />
          </BoxContainer>
        </View>

        <View
          style={{
            marginTop: windowHeight * 0.02,
            marginBottom: windowHeight * 0.02,
          }}
        >
          <BoxContainer style={myStyles.container1}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ marginBottom: windowHeight * 0.06 }}
                source={image}
              />
              <Text
                style={{
                  paddingLeft: windowHeight * 0.01,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                {" "}
                {name}{" "}
              </Text>
              <Text
                style={{
                  alignItems: "flex-end",
                  color: "#35b8b6",
                  paddingLeft: windowHeight * 0.01,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {" "}
                Pending{" "}
              </Text>
            </View>
            <Image
              style={{ left: 90, position: "absolute", width: 25, height: 25 }}
              source={image1}
            />
            <Image
              style={{ left: 125, position: "absolute", width: 25, height: 25 }}
              source={image2}
            />
            <Image
              style={{ left: 160, position: "absolute", width: 25, height: 25 }}
              source={image3}
            />
            <Image
              style={{ right: 45, position: "absolute", width: 25, height: 25 }}
              source={image4}
            />
          </BoxContainer>
        </View>

        <View
          style={{
            marginTop: windowHeight * 0.02,
            marginBottom: windowHeight * 0.02,
          }}
        >
          <BoxContainer style={myStyles.container1}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ marginBottom: windowHeight * 0.06 }}
                source={image}
              />
              <Text
                style={{
                  paddingLeft: windowHeight * 0.01,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                {" "}
                {name}{" "}
              </Text>
              <Text
                style={{
                  alignItems: "flex-end",
                  color: "#35b8b6",
                  paddingLeft: windowHeight * 0.01,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {" "}
                Pending{" "}
              </Text>
            </View>
            <Image
              style={{ left: 90, position: "absolute", width: 25, height: 25 }}
              source={image1}
            />
            <Image
              style={{ left: 125, position: "absolute", width: 25, height: 25 }}
              source={image2}
            />
            <Image
              style={{ left: 160, position: "absolute", width: 25, height: 25 }}
              source={image3}
            />
            <Image
              style={{ right: 45, position: "absolute", width: 25, height: 25 }}
              source={image4}
            />
          </BoxContainer>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const myStyles = StyleSheet.create({
  pageTop: {
    marginTop: windowHeight * 0.01,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: windowHeight * 0.05,
    textAlign: "center",
  },

  signin: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    padding: 3,
  },
  useyouraccount: {
    fontSize: 9,

    textAlign: "center",
  },
  termsofservice: {
    fontSize: 4,
    padding: 10,
    textAlign: "center",
    marginLeft: 25,
    marginRight: 25,
  },
  pageBottom: {
    fontSize: 4,
    padding: 60,
    textAlign: "center",
    marginRight: 15,
    marginBottom: 25,
  },
  container: {
    paddingTop: 10,
  },
  containerinner: {
    backgroundColor: "white",
    color: "white",
    borderRadius: 10,
  },

  container1: {
    paddingLeft: windowWidth * 0.03,
    paddingTop: windowWidth * 0.07,
    backgroundColor: "white",
    height: 90,
  },

  button: {
    width: 80,
    height: 40,
    color: "white",
    backgroundColor: "white",
  },
});

export default SettingsCust;
