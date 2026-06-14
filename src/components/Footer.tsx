export default function Footer() {
  return (
    <footer className="bg-navy border-t-4 border-navy py-8 px-4">
      <div className="brutal-container flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-display font-bold text-white text-lg">
          Hakim Nazri
        </p>
        <p className="font-body text-cream">
          Made with{" "}
          <span className="text-terracotta font-bold inline-block">♥</span> by
          Hakim &copy; {new Date().getFullYear()}
        </p>
        <a
          href="#"
          className="font-display font-semibold text-mustard hover:text-white transition-colors duration-200"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
