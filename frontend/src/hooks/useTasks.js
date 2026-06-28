import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getTasks();
      setTasks(res.data.data);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = async (data) => {
    try {
      setActionLoading(true);
      const res = await createTask(data);
      setTasks((prev) => [res.data.data, ...prev]);
      toast.success("Task added successfully!");
      return true;
    } catch (err) {
      toast.error(err.message);
      return false;
    } finally {
      setActionLoading(false);
    }
  };

  const editTask = async (id, data) => {
    try {
      setActionLoading(true);
      const res = await updateTask(id, data);
      setTasks((prev) => prev.map((t) => (t._id === id ? res.data.data : t)));
      toast.success("Task updated successfully!");
      return true;
    } catch (err) {
      toast.error(err.message);
      return false;
    } finally {
      setActionLoading(false);
    }
  };

  const removeTask = async (id) => {
    try {
      setActionLoading(true);
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
      toast.success("Task deleted successfully!");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setActionLoading(false);
    }
  };

  return { tasks, loading, actionLoading, error, addTask, editTask, removeTask, refetch: fetchTasks };
};
