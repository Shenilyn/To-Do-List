import { useState } from 'react';
import { Plus, CheckCircle2, Clock, List, User, Briefcase, Calendar } from 'lucide-react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('Work');

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask,
        completed: false,
        category: selectedCategory,
        date: new Date().toISOString().split('T')[0]
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getFilteredTasks = () => {
    if (activeCategory === 'all') return tasks;
    if (activeCategory === 'completed') return tasks.filter(task => task.completed);
    if (activeCategory === 'work') return tasks.filter(task => task.category === 'Work');
    if (activeCategory === 'personal') return tasks.filter(task => task.category === 'Personal');
    return tasks;
  };

  const filteredTasks = getFilteredTasks();
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 min-h-screen p-6 border-r border-gray-200">
          <div className="mb-8">
            <h1 className="text-gray-800 text-xl font-semibold flex items-center gap-2">
              <List className="w-6 h-6" />
              My Tasks
            </h1>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                activeCategory === 'all'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              <List className="w-5 h-5" />
              All Tasks
            </button>

            <button
              onClick={() => setActiveCategory('completed')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                activeCategory === 'completed'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              <CheckCircle2 className="w-5 h-5" />
              Completed
            </button>

            <button
              onClick={() => setActiveCategory('work')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                activeCategory === 'work'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Work
            </button>

            <button
              onClick={() => setActiveCategory('personal')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                activeCategory === 'personal'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              <User className="w-5 h-5" />
              Personal
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500 rounded-lg">
                  <List className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-gray-800 text-2xl font-bold">All Tasks</h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Add Task Form */}
            <div className="flex gap-4 items-center">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task..."
                className="flex-1 px-4 py-3 rounded-xl bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl bg-gray-100 text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Shopping">Shopping</option>
                <option value="Fitness">Fitness</option>
                <option value="School">School</option>
                <option value="Other">Other</option>
              </select>
              <button
                onClick={addTask}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl flex items-center gap-2 transition-all hover:shadow-lg"
              >
                <Plus className="w-5 h-5" />
                Add Task
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
              <div className="text-4xl font-bold mb-2">{totalTasks}</div>
              <div className="text-white/80">Total Tasks</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl p-6 text-white">
              <div className="text-4xl font-bold mb-2">{completedTasks}</div>
              <div className="text-white/80">Completed</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white">
              <div className="text-4xl font-bold mb-2">{pendingTasks}</div>
              <div className="text-white/80">Pending</div>
            </div>
          </div>

          {/* Tasks List */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            {filteredTasks.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-gray-800 text-xl font-semibold mb-2">
                  {activeCategory === 'completed' ? 'No completed tasks!' : 'No pending tasks!'}
                </h3>
                <p className="text-gray-600">
                  {activeCategory === 'completed' 
                    ? 'Complete some tasks to see them here' 
                    : 'Add a new task above to get started'
                  }
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredTasks.map(task => (
                  <div
                    key={task.id}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                      task.completed
                        ? 'bg-gray-50 text-gray-500'
                        : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        task.completed
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {task.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </button>
                    <div className="flex-1">
                      <div className={`font-medium ${task.completed ? 'line-through' : ''}`}>
                        {task.text}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-4">
                        <span>{task.category}</span>
                        <span>{task.date}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="px-3 py-1 text-red-400 hover:text-red-300 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;