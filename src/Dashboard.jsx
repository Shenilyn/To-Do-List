import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  CheckCircle2,
  List,
  Calendar,
  LayoutDashboard,
  KanbanSquare,
  LogOut,
} from "lucide-react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskDate, setTaskDate] = useState(
    new Date().toISOString().split("T")[0]
  ); // default today
  const [taskCategory, setTaskCategory] = useState("School");
  const [activeView, setActiveView] = useState("List");
  const navigate = useNavigate();

  const categories = ["School", "Work", "Personal"];

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask,
        completed: false,
        date: taskDate,
        category: taskCategory,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 min-h-screen p-6 border-r border-gray-200 flex flex-col justify-between">
        <div>
          <div className="mb-8">
            <h1 className="text-gray-800 text-xl font-semibold flex items-center gap-2">
              <List className="w-6 h-6" />
              My Task
            </h1>
          </div>

          {/* Views Navigation */}
          <nav className="space-y-2">
            <button
              onClick={() => setActiveView("Board")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left ${
                activeView === "Board"
                  ? "bg-pink-300 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              <KanbanSquare className="w-5 h-5" />
              Board
            </button>
            <button
              onClick={() => setActiveView("List")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left ${
                activeView === "List"
                  ? "bg-pink-300 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              <List className="w-5 h-5" />
              List
            </button>
            <button
              onClick={() => setActiveView("Calendar")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left ${
                activeView === "Calendar"
                  ? "bg-pink-300 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              <Calendar className="w-5 h-5" />
              Calendar
            </button>
            <button
              onClick={() => setActiveView("Dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left ${
                activeView === "Dashboard"
                  ? "bg-pink-300 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </button>
          </nav>
        </div>

        {/* Exit Button */}
        <div className="pt-6 border-t border-gray-200">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-red-500 hover:bg-red-50 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Exit
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-gray-800 text-2xl font-bold">{activeView} View</h2>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Only show Add Task in List View */}
        {activeView === "List" && (
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg border border-gray-200">
            <div className="flex gap-4 items-center flex-wrap">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task..."
                className="flex-1 px-4 py-3 rounded-xl bg-gray-100 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === "Enter" && addTask()}
              />
              <input
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="px-4 py-3 rounded-xl bg-gray-100 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <select
                value={taskCategory}
                onChange={(e) => setTaskCategory(e.target.value)}
                className="px-4 py-3 rounded-xl bg-gray-100 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <button
                onClick={addTask}
                className="px-6 py-3 bg-green-300 hover:bg-green-600 text-black rounded-xl flex items-center gap-2 transition-all"
              >
                <Plus className="w-5 h-5" />
                Add Task
              </button>
            </div>
          </div>
        )}

        {/* View Rendering */}
        {activeView === "Board" && (
          <div className="grid grid-cols-4 gap-6">
            {[...new Set(tasks.map((t) => t.date))].map((date) => (
              <div
                key={date}
                className="bg-gray-50 rounded-xl p-4 border border-gray-200"
              >
                <h3 className="text-gray-800 font-semibold mb-4">{date}</h3>
                <div className="space-y-3">
                  {tasks
                    .filter((t) => t.date === date)
                    .map((task) => (
                      <div
                        key={task.id}
                        className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
                          task.completed
                            ? "bg-gray-100 text-gray-500 line-through"
                            : "bg-white text-gray-800 shadow"
                        }`}
                      >
                        <button
                          onClick={() => toggleTask(task.id)}
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            task.completed
                              ? "bg-green-500 border-green-500"
                              : "border-gray-300"
                          }`}
                        >
                          {task.completed && (
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          )}
                        </button>
                        <div className="flex-1">
                          {task.text}
                          <span className="ml-2 text-xs text-gray-500">
                            [{task.category}]
                          </span>
                        </div>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="text-red-400 hover:text-red-600 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeView === "List" && (
          <div className="space-y-3">
            {tasks.length === 0 ? (
              <p className="text-gray-400">No tasks available.</p>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        task.completed
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300"
                      }`}
                    >
                      {task.completed && (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      )}
                    </button>
                    <span
                      className={`${
                        task.completed ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {task.date} | {task.category}
                  </span>
                </div>
              ))
            )}
          </div>
        )}

        {activeView === "Calendar" && (
          <div className="grid grid-cols-7 gap-4 border rounded-xl p-4">
            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              const dateStr = `2025-08-${String(day).padStart(2, "0")}`;
              const dayTasks = tasks.filter((t) => t.date === dateStr);

              return (
                <div
                  key={day}
                  className="h-24 border rounded-lg p-2 flex flex-col text-sm"
                >
                  <span className="font-semibold">{day}</span>
                  {dayTasks.map((t) => (
                    <span
                      key={t.id}
                      className="text-xs bg-pink-200 rounded px-1 mt-1 truncate"
                    >
                      {t.text} ({t.category})
                    </span>
                  ))}
                </div>
              );
            })}
          </div>
        )}

        {activeView === "Dashboard" && (
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blue-200 rounded-xl p-6">
              <div className="text-4xl font-bold">{totalTasks}</div>
              <div>Total Tasks</div>
            </div>
            <div className="bg-green-200 rounded-xl p-6">
              <div className="text-4xl font-bold">{completedTasks}</div>
              <div>Completed</div>
            </div>
            <div className="bg-red-200 rounded-xl p-6">
              <div className="text-4xl font-bold">{pendingTasks}</div>
              <div>Pending</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
