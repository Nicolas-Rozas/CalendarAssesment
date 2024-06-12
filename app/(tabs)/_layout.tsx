import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CalendarIcon } from "react-native-heroicons/outline";
import Calendar from "./index";

export default function TabLayout() {
  const Tab = createBottomTabNavigator();

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
        component={Calendar}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color }) => <CalendarIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
