export default function CV() {
  return (
    <section className="brutal-section bg-cream" id="cv">
      <div className="brutal-container px-6">
        <h2 className="brutal-section-title">
          My Curriculum Vitae
          <span className="block w-16 h-1 bg-terracotta mx-auto mt-3" />
        </h2>

        <div className="flex justify-center mb-10">
          <a
            href="https://docs.google.com/document/d/15nPIdC54qiW93hx-s2XMFt39EBuN4C9P0L_LhZIMskg/export?format=pdf"
            download
            className="brutal-btn-secondary text-lg inline-flex items-center gap-3"
          >
            <span>↓</span> Download PDF
          </a>
        </div>

        <div className="brutal-card overflow-hidden max-w-4xl mx-auto">
          <iframe
            src="https://docs.google.com/document/d/15nPIdC54qiW93hx-s2XMFt39EBuN4C9P0L_LhZIMskg/preview"
            className="w-full h-[80vh] md:h-[90vh]"
            title="Curriculum Vitae"
          />
        </div>
      </div>
    </section>
  );
}
