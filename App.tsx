import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/home";

const App = () => {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="HomeScreen"
          component={Home}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
