import { notes as customNotes } from "@/db/notes";
import { NoteContextType } from "@/types/NoteContextType";
import { NoteType } from "@/types/NoteType";
import React, { createContext, useState } from "react";

export const NoteContext = createContext<NoteContextType | null>(null);

const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<NoteType[]>(customNotes);

  const deleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const addNote = (note: NoteType) => {
    setNotes((prevNotes) => [note, ...prevNotes]);
  };

  const updateNote = (id: number, note: NoteType) => {
    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.id === id ? { ...n, ...note } : n))
    );
  };

  return (
    <NoteContext value={{ notes, deleteNote, addNote, updateNote }}>
      {children}
    </NoteContext>
  );
};

export default NoteProvider;
