import React from "react";
import { View, StyleSheet, Image, Text, StatusBar } from "react-native";

export default function Home() {
  return (
    <View style={styles.maincontainer}>
      <StatusBar
        animated={true}
        backgroundColor="#27292B"
        barStyle={"light-content"}
        showHideTransition={"fade"}
      />
      <View style={styles.headContainer}>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image
            source={require("../assets/COA_V7.png")}
            style={{ width: 170, height: 130 }}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              marginTop: 16,
            }}
          >
            Ghana 247
          </Text>
        </View>
      </View>
      <View style={{ margin: 16 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "600",
            color: "#424242",
            marginTop: 14,
          }}
        >
          Services 247
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.serviceContainer}>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#424242" }}>
            PAYMENT
          </Text>
          <View style={styles.innerContainer}></View>
        </View>

        <View style={styles.serviceContainer}>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#424242" }}>
            E-SERVICE
          </Text>
          <View style={styles.innerContainer}></View>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.serviceContainer}>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#424242" }}>
            E-GOV
          </Text>
          <View style={styles.innerContainer}></View>
        </View>

        <View style={styles.serviceContainer}>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#424242" }}>
            CALL-CENTER
          </Text>
          <View style={styles.innerContainer}></View>
        </View>
      </View>
      <View style={{ margin: 16, marginTop: 30 }}>
        <Text style={{ fontSize: 22, fontWeight: "600", color: "#424242" }}>
          Emergency Services
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.emergContainer}>
          <Text style={{ fontSize: 12, fontWeight: "normal", color: "white" }}>
            Police
          </Text>
        </View>
        <View style={styles.emergContainer}>
          <Text style={{ fontSize: 12, fontWeight: "normal", color: "white" }}>
            Fire Service
          </Text>
        </View>
        <View style={styles.emergContainer}>
          <Text style={{ fontSize: 12, fontWeight: "normal", color: "white" }}>
            Ambulance
          </Text>
        </View>
        <View style={styles.emergContainer}>
          <Text style={{ fontSize: 12, fontWeight: "normal", color: "white" }}>
            Terrorism
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    justifyContent: "flex-start",
  },
  headContainer: {
    padding: 16,
    backgroundColor: "#27292B",
    width: "100%",
    height: "33%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  serviceContainer: {
    marginLeft: 16,
    marginTop: 20,
    backgroundColor: "#eec440",
    width: "45%",
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  innerContainer: {
    height: "60%",
    width: "95%",
    alignItems: "center",
    padding: 6,
    backgroundColor: "#dcdcdc",
    borderRadius: 10,
    marginTop: 16,
  },
  emergContainer: {
    marginLeft: 16,
    backgroundColor: "#27292B",
    width: "20%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
});
