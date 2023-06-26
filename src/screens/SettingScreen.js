import React from "react";
import {MaterialIcons} from "@expo/vector-icons";
import {Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import {useStore} from "../store";

const {width: screenWidth} = Dimensions.get("window");

export default function Settings({navigation}) {
  const role = useStore((state) => state.role);
  const updateIsLogged = useStore((state) => state.updateIsLogged);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Edit Account */}
        <View style={[styles.section, {marginBottom: 16}]}>
          <TouchableOpacity
            style={styles.btnWrapper}
            onPress={() => navigation.navigate("ProfileUpdateScreen")}
          >
            <MaterialIcons name="person" size={24} color="black"/>
            <Text style={styles.btnTitle}>Profile</Text>
          </TouchableOpacity>
          {role === "trainer" && (
            <TouchableOpacity
              style={styles.btnWrapper}
              onPress={() => navigation.navigate("TrainerLocationScreen")}
            >
              <MaterialIcons name="location-pin" size={24} color="black"/>
              <Text style={styles.btnTitle}>Location</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[styles.btnWrapper, {borderBottomWidth: 0}]}
            onPress={() => navigation.navigate("IntSpecScreen")}
          >
            <MaterialIcons name="dns" size={24} color="black"/>
            <Text style={styles.btnTitle}>Category</Text>
          </TouchableOpacity>
        </View>
        {/* Others */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.btnWrapper}
            onPress={() => navigation.navigate("Feedback")}
          >
            <MaterialIcons name="help" size={24} color="black"/>
            <Text style={styles.btnTitle}>Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnWrapper, {borderBottomWidth: 0}]}
            onPress={() => {
              updateIsLogged(false);
              navigation.navigate("LoginScreen");
            }}
          >
            <MaterialIcons name="outbond" size={24} color="black"/>
            <Text style={styles.btnTitle}>Log out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  scrollView: {
    alignItems: "center",
    marginTop: 30,
    width: screenWidth,
  },
  section: {
    alignItems: "center",
    backgroundColor: "#fcfcfc",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.75)",
    shadowOpacity: 0.35,
    shadowOffset: {width: 3, height: 4},
    shadowRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  btnWrapper: {
    width: 350,
    height: 50,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    backgroundColor: "#ffffff",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 2,
  },
  btnTitle: {
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 10,
  },
});