import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Account_Page from "./Screens/account";
import Inbox_Page from "./Screens/inbox";
import Home from "./Screens/home";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return <Home />;
};

const InboxScreen = () => {
  return <Inbox_Page />;
};

const AccountScreen = () => {
  return <Account_Page />;
};
