export default function Hero() {
  return (
    <section className="min-h-screen flex items-center brutal-section pt-24">
      <div className="brutal-container w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center px-6">
        {/* Image */}
        <div className="flex justify-center md:justify-end order-1">
          <div className="relative">
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-navy rounded-[4px]" />
            <img
              src="/hakim.jpeg"
              alt="Hakim Nazri"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-navy rounded-[4px]"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2">
          <p className="text-xl md:text-2xl font-display font-medium text-navy mb-2">
            Hello 👋
          </p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-navy leading-tight mb-4">
            I'm <span className="text-terracotta">Muhammad Hakim</span>
          </h1>
          <div className="w-20 h-1 bg-terracotta mb-6" />
          <h2 className="text-lg md:text-xl font-display text-navy mb-8 leading-relaxed">
            Web Application Freelancer | Mobile Application Freelancer |
            Computer Science Student
          </h2>
          <a
            href="https://www.linkedin.com/in/hakim-nazri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="brutal-btn text-lg flex items-center gap-3">
              Let's connect!
              <span className="text-xl">→</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
