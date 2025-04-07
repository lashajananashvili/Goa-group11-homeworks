export default function TaskItem({ task, onEdit, onDelete, onToggle }) {
    return (
      <div className="p-4 border rounded shadow flex justify-between items-center">
        <div>
          <h3 className={`text-xl font-bold ${task.completed ? "line-through" : ""}`}>
            {task.title}
          </h3>
          <p className="text-sm">{task.description}</p>
          <p className="text-xs text-gray-500">
            Due: {task.dueDate} | Priority: {task.priority}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onToggle(task.id)}
            className="text-sm bg-green-200 px-2 py-1 rounded"
          >
            {task.completed ? "Undo" : "Done"}
          </button>
          <button
            onClick={() => onEdit(task)}
            className="text-sm bg-yellow-200 px-2 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-sm bg-red-200 px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  