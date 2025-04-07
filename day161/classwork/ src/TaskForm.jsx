import { useState, useEffect } from "react";

export default function TaskForm({ onAdd, onUpdate, editingTask }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
  });

  useEffect(() => {
    if (editingTask) {
      setForm(editingTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    if (editingTask) {
      onUpdate(form);
    } else {
      onAdd(form);
    }

    setForm({ title: "", description: "", dueDate: "", priority: "Medium" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        name="title"
        placeholder="სათაური"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="აღწერა"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-4">
        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {editingTask ? "განახლება" : "დამატება"}
      </button>
    </form>
  );
}
