import { formatDate, isOverdue, getStatusBadgeClass, getPriorityBadgeClass } from "../utils/helpers";

export default function TaskCard({ task, onEdit, onDelete }) {
  const overdue = isOverdue(task.dueDate, task.status);

  return (
    <div className="card p-4 group flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h3 className={`text-sm font-semibold leading-snug flex-1 ${task.status === "Completed" ? "line-through text-muted" : "text-white"}`}>
          {task.title}
        </h3>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => onEdit(task)}
            className="btn-ghost p-1.5"
            aria-label="Edit task"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="p-1.5 rounded-lg text-muted hover:text-danger hover:bg-danger/10 transition-all duration-150"
            aria-label="Delete task"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Description */}
      {task.description && (
        <p className="text-xs text-muted leading-relaxed line-clamp-2">{task.description}</p>
      )}

      {/* Badges */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className={getStatusBadgeClass(task.status)}>{task.status}</span>
        <span className={getPriorityBadgeClass(task.priority)}>{task.priority}</span>
      </div>

      {/* Due Date */}
      {task.dueDate && (
        <div className={`flex items-center gap-1.5 text-xs ${overdue ? "text-danger" : "text-muted"}`}>
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{overdue ? "Overdue · " : ""}{formatDate(task.dueDate)}</span>
        </div>
      )}

      {/* Mobile actions */}
      <div className="flex gap-2 sm:hidden border-t border-border pt-3 mt-1">
        <button onClick={() => onEdit(task)} className="btn-ghost flex-1 justify-center text-xs">
          Edit
        </button>
        <button onClick={() => onDelete(task._id)} className="btn-danger flex-1 justify-center text-xs">
          Delete
        </button>
      </div>
    </div>
  );
}
