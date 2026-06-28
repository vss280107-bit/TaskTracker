export default function Loader({ size = "md", text }) {
  const sizes = { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-10 h-10" };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${sizes[size]} border-2 border-surface-4 border-t-accent rounded-full animate-spin`}
      />
      {text && <p className="text-sm text-muted">{text}</p>}
    </div>
  );
}
