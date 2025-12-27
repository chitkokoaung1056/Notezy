import { useNote } from "@/hooks/useNote";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Platform, Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Note = () => {
  const { notes, deleteNote, updateNote } = useNote();
  const { id } = useLocalSearchParams();
  const note = notes.find((note) => note.id === Number(id));
  if (!note) return null;

  const { title, description, createdAt } = note;

  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  useEffect(() => {
    console.log(note)
  }, [])

  useEffect(() => {
    updateNote(note.id, {
      ...note,
      description: descriptionInput,
      title: titleInput,
    });
  }, [titleInput, descriptionInput]);

  return (
    <KeyboardAwareScrollView
      className="flex-1 bg-blue-50 px-6 "
      enableOnAndroid
      keyboardOpeningTime={0}
      extraScrollHeight={Platform.OS === "android" ? 260 : 100}
      keyboardShouldPersistTaps="never"
      showsVerticalScrollIndicator={false}>
      <View className="flex-1 mb-28">
        <TextInput
          multiline
          value={titleInput}
          onChangeText={setTitleInput}
          placeholder="Title"
          className="text-2xl font-semibold mb-2 text-gray-900"
          placeholderTextColor="#9CA3AF"
        />

        <Text className="text-sm text-gray-500 mb-3 ms-1">
          {createdAt.toDateString()} {createdAt.toLocaleTimeString()}
        </Text>

        <TextInput
          value={descriptionInput}
          multiline
          onChangeText={setDescriptionInput}
          className="flex-1 text-base text-gray-800 "
          textAlignVertical="top"
          placeholder="Write your note..."
          placeholderTextColor="#9CA3AF"
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Note;
