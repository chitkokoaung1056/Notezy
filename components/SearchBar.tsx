import useSearchBar from "@/hooks/useSearchBar";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React, { useState } from "react";
import { Platform, TextInput, View } from "react-native";

const SearchBar = () => {
  const { searchBarValue, updateSearchBarValue } = useSearchBar()

  const [focused, setFocused] = useState(false);

  const resetSearchValue = () => {
    updateSearchBarValue("");
  };

  return (
    <View
      className={`bg-white fixed -top-2 left-0 right-0 z-10 rounded-xl border-2 flex-row items-center px-4 py-0 ${
        focused ? "border-blue-500" : "border-transparent"
      }`}
      style={
        Platform.OS === "android"
          ? { elevation: 2 }
          : {
              shadowColor: "#000",
              shadowOpacity: 0.15,
              shadowRadius: 6,
              shadowOffset: { width: 0, height: 3 },
            }
      }>
      <EvilIcons name="search" size={26} color="black" />
      <TextInput
        placeholder="Search notes..."
        onFocus={() => setFocused(true)}
        onChangeText={(searchBarValue) => updateSearchBarValue(searchBarValue)}
        value={searchBarValue}
        onBlur={() => setFocused(false)}
        className="mx-2 flex-1 text-base "
      />
      {searchBarValue.length > 0 && (
        <AntDesign
          name="close"
          size={16}
          color="black"
          onPress={resetSearchValue}
        />
      )}
    </View>
  );
};

export default SearchBar;
