export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-black/40 text-center">
      <div className="container px-6 mx-auto">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Shaikh Zaid Rahman. <br className="md:hidden"/> All systems operational.
        </p>
      </div>
    </footer>
  );
}
