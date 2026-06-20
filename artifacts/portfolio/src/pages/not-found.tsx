import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <div className="text-8xl md:text-9xl font-display font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-white/40 text-sm md:text-base mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:brightness-110 hover:scale-[1.03] active:scale-95 transition-all duration-200 text-sm"
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>
      </div>
    </div>
  );
}
