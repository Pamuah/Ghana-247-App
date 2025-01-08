import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Use "react-native-vector-icons/Ionicons" for non-Expo
import Account_Page from "../Screens/account";
import Inbox_Page from "../Screens/inbox";
import Home from "../Screens/home";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Inbox") {
            iconName = focused ? "mail" : "mail-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person" : "person-outline";
          }

          console.log("Icon name:", iconName); // Debug log

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#eec440", // Fixed trailing space
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#27292B" },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Inbox" component={Inbox_Page} />
      <Tab.Screen name="Account" component={Account_Page} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
