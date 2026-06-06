export default function CV() {
  return (
    <section className="my-10" id="cv">
      <h1 className="text-center text-2xl font-semibold mb-10">
        My Curriculum Vitae
      </h1>
      <div className="flex justify-center">
        <a
          href="https://docs.google.com/document/d/15nPIdC54qiW93hx-s2XMFt39EBuN4C9P0L_LhZIMskg/export?format=pdf"
          download
          className="underline active:text-blue-700"
        >
          Download Here
        </a>
      </div>
      <iframe
        src="https://docs.google.com/document/d/15nPIdC54qiW93hx-s2XMFt39EBuN4C9P0L_LhZIMskg/preview"
        className="w-full md:w-2/3 mx-auto h-screen"
      />
    </section>
  );
}
