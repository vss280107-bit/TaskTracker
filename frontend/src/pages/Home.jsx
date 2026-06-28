import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { useFilteredTasks } from "../hooks/useFilteredTasks";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import ConfirmDialog from "../components/ConfirmDialog";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

export default function Home() {
  const { tasks, loading, actionLoading, addTask, editTask, removeTask } = useTasks();
  const {
    search, setSearch,
    filterStatus, setFilterStatus,
    filterPriority, setFilterPriority,
    sortBy, setSortBy,
    filtered,
  } = useFilteredTasks(tasks);

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const hasActiveFilters = search || filterStatus !== "All" || filterPriority !== "All";

  // Stats
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const inProgress = tasks.filter((t) => t.status === "In Progress").length;
  const highPriority = tasks.filter((t) => t.priority === "High" && t.status !== "Completed").length;

  const handleOpenEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingTask(null);
  };

  const handleSubmit = async (data) => {
    if (editingTask) return editTask(editingTask._id, data);
    return addTask(data);
  };

  const handleDeleteConfirm = async () => {
    await removeTask(deleteId);
    setDeleteId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted mt-0.5">Manage and track your tasks</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="btn-primary self-start sm:self-auto"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Task
        </button>
      </div>

      {/* Stats row */}
      {total > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: "Total", value: total, color: "text-white" },
            { label: "Completed", value: completed, color: "text-success" },
            { label: "In Progress", value: inProgress, color: "text-accent-light" },
            { label: "High Priority", value: highPriority, color: "text-danger" },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface-1 border border-border rounded-xl p-3.5">
              <p className="text-xs text-muted mb-1">{stat.label}</p>
              <p className={`text-2xl font-semibold font-mono ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Controls */}
      <div className="bg-surface-1 border border-border rounded-xl p-4 mb-6 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <SearchBar value={search} onChange={setSearch} />
          <Sort value={sortBy} onChange={setSortBy} />
        </div>
        <Filter
          filterStatus={filterStatus} setFilterStatus={setFilterStatus}
          filterPriority={filterPriority} setFilterPriority={setFilterPriority}
        />
        {hasActiveFilters && (
          <div className="flex items-center gap-2 pt-1">
            <span className="text-xs text-muted">
              Showing {filtered.length} of {total} tasks
            </span>
            <button
              onClick={() => { setSearch(""); setFilterStatus("All"); setFilterPriority("All"); }}
              className="text-xs text-accent hover:text-accent-light transition-colors"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Task list */}
      <TaskList
        tasks={filtered}
        loading={loading}
        onEdit={handleOpenEdit}
        onDelete={setDeleteId}
        hasFilters={!!hasActiveFilters}
      />

      {/* Task form modal */}
      {showForm && (
        <TaskForm
          task={editingTask}
          onSubmit={handleSubmit}
          onClose={handleCloseForm}
          loading={actionLoading}
        />
      )}

      {/* Delete confirm dialog */}
      {deleteId && (
        <ConfirmDialog
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteId(null)}
          loading={actionLoading}
        />
      )}
    </div>
  );
}
