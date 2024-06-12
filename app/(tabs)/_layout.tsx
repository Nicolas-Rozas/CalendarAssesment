// TabLayout.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { CalendarIcon } from "react-native-heroicons/outline";
import Calendar from "./index";
import DetailComponent from "@/components/DetailsComponent";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Función para el Stack Navigator
function CalendarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailComponent}
        options={{
          headerShown: false,
          headerTitle: "Detail",
          headerTitleStyle: {
            color: "#000",
          },
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function TabLayout() {
  return (
    <Tab.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        tabBarActiveTintColor: "#00B47D",
        tabBarInactiveTintColor: "#A1A1A1",
        tabBarStyle: {
          backgroundColor: "#fff",
        },
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTitleStyle: {
          color: "#000",
        },
      }}
    >
      <Tab.Screen
        name="Calendar"
        component={CalendarStack} // Usa el Stack Navigator aquí
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color }) => <CalendarIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
