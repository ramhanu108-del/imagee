import React, { useState, useEffect } from "react";
import { Plus, Trash2, Check, Circle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("smarttools_todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("smarttools_todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTodo = { id: Date.now().toString(), text: input.trim(), completed: false };
    setTodos([newTodo, ...todos]);
    setInput("");
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6">
      <form onSubmit={addTodo} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-3 border rounded-xl dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-lg shadow-blue-500/20"
        >
          <Plus className="w-6 h-6" />
        </button>
      </form>

      <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl group transition-all"
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`p-1 rounded-full transition-colors ${todo.completed ? 'text-green-500 bg-green-50 dark:bg-green-900/20' : 'text-gray-300'}`}
              >
                {todo.completed ? <Check className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
              </button>
              <span className={`flex-1 text-sm font-medium transition-all ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700 dark:text-gray-200'}`}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {todos.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            <p className="text-sm">Your to-do list is empty. Add a task to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
