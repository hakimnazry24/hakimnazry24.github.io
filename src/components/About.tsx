const ABOUT_IMAGES = [
  { src: "/image2.jpeg", alt: "Hakim image 2" },
  { src: "/image1.JPG", alt: "Hakim image 1" },
  { src: "/image3.jpeg", alt: "Hakim image 3" },
];

export default function About() {
  return (
    <section className="brutal-section bg-cream" id="about">
      <div className="brutal-container px-6">
        <h2 className="brutal-section-title">
          About
          <span className="block w-16 h-1 bg-terracotta mx-auto mt-3" />
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="brutal-card p-8 md:p-10 mb-12">
            <p className="text-lg md:text-xl leading-relaxed font-body text-navy">
              Hey there! I&apos;m Muhammad Hakim, hailing from the beautiful
              city of Melaka. Currently, you can find me diving into the world
              of computer science at the International Islamic University
              Malaysia. When I&apos;m not buried in code, you&apos;ll catch me
              gaming, binge-watching anime, or smashing shuttlecocks on the
              badminton court. Not only that, I am also passionate in music. I
              can play guitar, drum, percussion and even the Malaysian
              traditional music instrument, the Gamelan. Reach me out and
              let&apos;s connect :D
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
            {ABOUT_IMAGES.map(({ src, alt }, index) => (
              <div
                key={src}
                className="relative"
                style={{
                  transform: index === 1 ? "translateY(20px)" : "translateY(0)",
                }}
              >
                <div className="absolute -bottom-3 -right-3 w-full h-full bg-navy rounded-[4px]" />
                <img
                  src={src}
                  alt={alt}
                  className="relative w-full md:w-56 h-56 object-cover border-4 border-navy rounded-[4px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
