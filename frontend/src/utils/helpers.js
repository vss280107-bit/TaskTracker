export const formatDate = (date) => {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const isOverdue = (dueDate, status) => {
  if (!dueDate || status === "Completed") return false;
  return new Date(dueDate) < new Date();
};

export const getStatusBadgeClass = (status) => {
  switch (status) {
    case "Pending": return "badge-status-pending";
    case "In Progress": return "badge-status-inprogress";
    case "Completed": return "badge-status-completed";
    default: return "";
  }
};

export const getPriorityBadgeClass = (priority) => {
  switch (priority) {
    case "Low": return "badge-priority-low";
    case "Medium": return "badge-priority-medium";
    case "High": return "badge-priority-high";
    default: return "";
  }
};

export const todayString = () => new Date().toISOString().split("T")[0];
