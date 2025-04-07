export default function Dashboard({ tasks }) {
    const completed = tasks.filter((t) => t.completed).length;
    const pending = tasks.filter((t) => !t.completed).length;
  
    return (
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Completed</h3>
          <p className="text-2xl">{completed}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Pending</h3>
          <p className="text-2xl">{pending}</p>
        </div>
      </div>
    );
  }
  