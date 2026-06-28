import { useState, useMemo } from "react";

export const useFilteredTasks = (tasks) => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const filtered = useMemo(() => {
    let result = [...tasks];

    // Search
    if (search.trim()) {
      result = result.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Status filter
    if (filterStatus !== "All") {
      result = result.filter((t) => t.status === filterStatus);
    }

    // Priority filter
    if (filterPriority !== "All") {
      result = result.filter((t) => t.priority === filterPriority);
    }

    // Sort
    const priorityOrder = { High: 0, Medium: 1, Low: 2 };
    switch (sortBy) {
      case "Newest":
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "Oldest":
        result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case "Due Date":
        result.sort((a, b) => {
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        });
        break;
      case "Alphabetical":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Priority":
        result.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        break;
    }

    return result;
  }, [tasks, search, filterStatus, filterPriority, sortBy]);

  return {
    search, setSearch,
    filterStatus, setFilterStatus,
    filterPriority, setFilterPriority,
    sortBy, setSortBy,
    filtered,
  };
};
