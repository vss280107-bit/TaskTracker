const STATUS_OPTIONS = ["All", "Pending", "In Progress", "Completed"];
const PRIORITY_OPTIONS = ["All", "Low", "Medium", "High"];

function FilterChips({ label, options, value, onChange }) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <span className="text-xs text-muted font-medium uppercase tracking-wider whitespace-nowrap">{label}:</span>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`text-xs px-2.5 py-1 rounded-full border transition-all duration-150 ${
            value === opt
              ? "bg-accent/20 border-accent/50 text-accent-light font-medium"
              : "bg-surface-2 border-border text-muted hover:border-accent/30 hover:text-white"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function Filter({ filterStatus, setFilterStatus, filterPriority, setFilterPriority }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <FilterChips label="Status" options={STATUS_OPTIONS} value={filterStatus} onChange={setFilterStatus} />
      <FilterChips label="Priority" options={PRIORITY_OPTIONS} value={filterPriority} onChange={setFilterPriority} />
    </div>
  );
}
