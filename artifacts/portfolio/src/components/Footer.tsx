export function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t border-white/5 bg-black/40 text-center">
      <div className="container px-5 mx-auto">
        <p className="text-white/40 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Shaikh Zaid Rahman &nbsp;&middot;&nbsp; All systems operational.
        </p>
      </div>
    </footer>
  );
}
