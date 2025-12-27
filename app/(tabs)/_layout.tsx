import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { height: 90 },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },

        tabBarStyle: { height: 70 },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 2,
        },
        headerShadowVisible: false,

        tabBarActiveTintColor: "#3b82f6", // blue-600
        tabBarInactiveTintColor: "#94a3b8", // slate-400
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "My Notes",
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
