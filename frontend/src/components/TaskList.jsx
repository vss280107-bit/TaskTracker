import TaskCard from "./TaskCard";
import Loader from "./Loader";

function EmptyState({ hasFilters }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-surface-2 border border-border flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {hasFilters
            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          }
        </svg>
      </div>
      <h3 className="text-sm font-semibold text-white mb-1">
        {hasFilters ? "No matching tasks" : "No tasks yet"}
      </h3>
      <p className="text-xs text-muted max-w-xs">
        {hasFilters
          ? "Try adjusting your filters or search term."
          : "Create your first task to get started."}
      </p>
    </div>
  );
}

export default function TaskList({ tasks, loading, onEdit, onDelete, hasFilters }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader size="lg" text="Loading tasks..." />
      </div>
    );
  }

  if (!tasks.length) return <EmptyState hasFilters={hasFilters} />;

  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
