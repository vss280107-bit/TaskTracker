export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-muted">
          Built with <span className="text-accent">React</span> + <span className="text-accent">Express</span> + <span className="text-accent">MongoDB</span>
        </p>
        <p className="text-xs text-muted font-mono">TaskFlow v1.0</p>
      </div>
    </footer>
  );
}
