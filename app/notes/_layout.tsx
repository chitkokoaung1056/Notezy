import { useNote } from "@/hooks/useNote";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";

const NotesLayout = () => {
  const { id } = useLocalSearchParams();
  const { notes, updateNote, deleteNote } = useNote();

  const note = notes.find((note) => note.id === Number(id));
  if (!note) return null;

  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    deleteNote(Number(id));
    setModalOpen(false);
    router.dismissAll();
    router.replace("/");
  };

  const handleNotePin = () => {
    updateNote(Number(id), {
      ...note,
      isPinned: !note.isPinned,
    });
  };

  return (
    <>
      <Stack>
        <Stack.Screen
          name="[id]"
          options={{
            headerTitle: "",
            headerStyle: { backgroundColor: "#eff6ff" },
            headerShadowVisible: false,
            contentStyle: { backgroundColor: "#eff6ff" },
            headerRight: () => (
              <View className="flex flex-row items-center px-4">
                <TouchableOpacity className="me-4" onPress={handleNotePin}>
                  <MaterialCommunityIcons
                    name={note.isPinned ? "pin" : "pin-outline"}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setModalOpen(true)}>
                  <FontAwesome name="trash-o" size={24} color="black" />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
      </Stack>

      <Modal
        visible={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        animationType="fade"
        transparent>
        <Pressable
          className="flex-1 bg-black/40 items-center justify-center"
          onPress={() => setModalOpen(false)}>
          <Pressable
            onPress={(e) => e.stopPropagation()}
            className="bg-white rounded-xl p-5 w-72">
            <Text className="text-center font-semibold text-lg">
              Delete this note?
            </Text>

            <View className="flex flex-row items-center justify-between mt-5">
              <Pressable
                className="bg-slate-500 rounded-md px-7 py-3 active:opacity-70"
                onPress={() => setModalOpen(false)}>
                <Text className="text-white font-semibold">Cancel</Text>
              </Pressable>

              <Pressable
                className="bg-red-500 rounded-md px-7 py-3 active:opacity-70"
                onPress={handleDelete}>
                <Text className="text-white font-semibold">Delete</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

export default NotesLayout;
