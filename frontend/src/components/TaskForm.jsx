import { useState, useEffect } from "react";
import { todayString } from "../utils/helpers";
import Loader from "./Loader";

const INITIAL = { title: "", description: "", priority: "Medium", status: "Pending", dueDate: "" };

export default function TaskForm({ onSubmit, onClose, loading, task }) {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (task) {
      setForm({
        title: task.title || "",
        description: task.description || "",
        priority: task.priority || "Medium",
        status: task.status || "Pending",
        dueDate: task.dueDate ? task.dueDate.split("T")[0] : "",
      });
    }
  }, [task]);

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required";
    else if (form.title.trim().length < 3) e.title = "Title must be at least 3 characters";
    if (form.dueDate && form.dueDate < todayString()) e.dueDate = "Due date cannot be in the past";
    return e;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const payload = { ...form, dueDate: form.dueDate || null };
    const ok = await onSubmit(payload);
    if (ok) { setForm(INITIAL); onClose(); }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="text-base font-semibold">{task ? "Edit Task" : "New Task"}</h2>
          <button onClick={onClose} className="btn-ghost p-1.5" aria-label="Close">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {/* Title */}
          <div>
            <label className="label">Title <span className="text-danger">*</span></label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className={`input ${errors.title ? "border-danger focus:border-danger" : ""}`}
              placeholder="e.g. Design landing page"
              maxLength={100}
            />
            {errors.title && <p className="text-danger text-xs mt-1">{errors.title}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="label">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="input resize-none"
              rows={3}
              placeholder="Add some details (optional)..."
              maxLength={500}
            />
          </div>

          {/* Priority + Status */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">Priority</label>
              <select value={form.priority} onChange={(e) => handleChange("priority", e.target.value)} className="input cursor-pointer">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div>
              <label className="label">Status</label>
              <select value={form.status} onChange={(e) => handleChange("status", e.target.value)} className="input cursor-pointer">
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
          </div>

          {/* Due Date */}
          <div>
            <label className="label">Due Date</label>
            <input
              type="date"
              value={form.dueDate}
              min={todayString()}
              onChange={(e) => handleChange("dueDate", e.target.value)}
              className={`input ${errors.dueDate ? "border-danger" : ""}`}
            />
            {errors.dueDate && <p className="text-danger text-xs mt-1">{errors.dueDate}</p>}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-1">
            <button type="button" onClick={onClose} className="btn-secondary flex-1">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="btn-primary flex-1 justify-center">
              {loading ? <Loader size="sm" /> : task ? "Save Changes" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
