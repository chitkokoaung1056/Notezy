import NoteProvider from "@/contexts/NoteContext";
import { SearchBarValueProvider } from "@/contexts/SearchBarValueContext";
import "@expo/metro-runtime";
import { Stack } from "expo-router";
import React from "react";
import "../global.css";

const _layout = () => {
  return (
    <NoteProvider>
      <SearchBarValueProvider>
        <Stack
          initialRouteName="(tabs)"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              minWidth: "100%",
              minHeight: "100%",
            },
          }}
        />
      </SearchBarValueProvider>
    </NoteProvider>
  );
};

export default _layout;
