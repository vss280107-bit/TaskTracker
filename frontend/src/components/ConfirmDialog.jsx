import Loader from "./Loader";

export default function ConfirmDialog({ onConfirm, onCancel, loading }) {
  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onCancel()}>
      <div className="modal-box max-w-sm">
        <div className="p-5 text-center">
          <div className="w-12 h-12 rounded-full bg-danger/10 border border-danger/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <h3 className="text-base font-semibold mb-1">Delete this task?</h3>
          <p className="text-sm text-muted mb-5">This action cannot be undone.</p>
          <div className="flex gap-2">
            <button onClick={onCancel} disabled={loading} className="btn-secondary flex-1 justify-center">
              Cancel
            </button>
            <button onClick={onConfirm} disabled={loading} className="flex-1 bg-danger hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-50">
              {loading ? <Loader size="sm" /> : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
