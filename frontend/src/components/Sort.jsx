const SORT_OPTIONS = ["Newest", "Oldest", "Due Date", "Alphabetical", "Priority"];

export default function Sort({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-4 h-4 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 4h13M3 8h9M3 12h5m10 4l-4-4 4-4" />
      </svg>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input py-1.5 text-xs w-auto pr-8 cursor-pointer"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
