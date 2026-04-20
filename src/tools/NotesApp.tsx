import React, { useState, useEffect } from "react";
import { Plus, Trash2, Save, FileText, Edit2 } from "lucide-react";

interface Note {
  id: string;
  title: string;
  content: string;
  updatedAt: number;
}

export default function NotesApp() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem("smarttools_notes");
    return saved ? JSON.parse(saved) : [];
  });
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("smarttools_notes", JSON.stringify(notes));
  }, [notes]);

  const activeNote = notes.find(n => n.id === activeNoteId);

  const addNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "Untitled Note",
      content: "",
      updatedAt: Date.now()
    };
    setNotes([newNote, ...notes]);
    setActiveNoteId(newNote.id);
  };

  const updateNote = (id: string, updates: Partial<Note>) => {
    setNotes(notes.map(n => n.id === id ? { ...n, ...updates, updatedAt: Date.now() } : n));
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(n => n.id !== id));
    if (activeNoteId === id) setActiveNoteId(null);
  };

  return (
    <div className="flex flex-col h-[500px] border dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-800 p-2 flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 px-2">Local Notes</h3>
        <button
          onClick={addNote}
          className="p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/3 border-r dark:border-gray-800 overflow-y-auto bg-white dark:bg-gray-800">
          {notes.length === 0 ? (
            <div className="p-4 text-center text-xs text-gray-400 mt-10">No notes yet</div>
          ) : (
            notes.map(note => (
              <div
                key={note.id}
                className={`group relative flex items-center w-full transition-colors ${activeNoteId === note.id ? 'bg-blue-50 dark:bg-blue-900/20 shadow-[inset_2px_0_0_0_#2563eb]' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}
              >
                <button
                  onClick={() => setActiveNoteId(note.id)}
                  className="flex-1 text-left p-4 pr-10"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className={`w-3 h-3 ${activeNoteId === note.id ? 'text-blue-500' : 'text-gray-400'}`} />
                    <span className="text-sm font-bold truncate">{note.title || "Untitled"}</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{note.content || "Empty content..."}</p>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveNoteId(note.id);
                    // Focus logic handled by the editor input automatically
                  }}
                  className="absolute right-3 p-1.5 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                  title="Rename"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Editor */}
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-800">
          {activeNote ? (
            <>
              <div className="p-4 border-b dark:border-gray-800 flex items-center justify-between gap-4 group/title">
                <div className="flex items-center gap-2 flex-1">
                  <Edit2 className="w-4 h-4 text-gray-400 group-hover/title:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    value={activeNote.title}
                    onChange={(e) => updateNote(activeNote.id, { title: e.target.value })}
                    className="bg-transparent font-bold text-lg outline-none flex-1 focus:text-blue-600 dark:focus:text-blue-400 transition-colors"
                    placeholder="Note Title"
                  />
                </div>
                <button
                  onClick={() => deleteNote(activeNote.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <textarea
                value={activeNote.content}
                onChange={(e) => updateNote(activeNote.id, { content: e.target.value })}
                className="flex-1 p-6 bg-transparent outline-none resize-none text-sm leading-relaxed"
                placeholder="Start writing..."
              />
              <div className="p-2 bg-gray-50 dark:bg-gray-900 text-[10px] text-gray-500 flex justify-between uppercase tracking-tighter">
                <span>Last updated: {new Date(activeNote.updatedAt).toLocaleTimeString()}</span>
                <span className="flex items-center gap-1"><Save className="w-3 h-3" /> Auto-saved</span>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8 text-center">
              <FileText className="w-12 h-12 mb-4 opacity-10" />
              <p className="text-sm font-medium">Select a note to edit or create a new one</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
