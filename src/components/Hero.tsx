export default function Hero() {
  return (
    <section className="md:grid grid-cols-2 lg:gap-x-32 items-center mt-28 md:mt-5 h-screen w-2/3 mx-auto">
      <div className="flex justify-center md:justify-end mb-10 md:mb-0">
        <img src="/hakim.jpeg" alt="" className="w-4/5 mb:2-3/5 rounded-lg" />
      </div>
      <div className="text-lg justify-self-start">
        Hello 👋
        <br />
        <h1 className="text-xl font-semibold">I am Muhammad Hakim</h1>
        <h2 className="mt-5 text-xl">
          Web Application Freelancer | Mobile Application Freelancer |
          Computer Science Student
        </h2>
        <a href="https://www.linkedin.com/in/hakim-nazri/">
          <button className="border border-black p-2 px-4 rounded-md flex gap-x-2 items-center transition-all hover:text-white hover:font-semibold hover:bg-black mt-5">
            Let&apos;s connect!
          </button>
        </a>
      </div>
    </section>
  );
}
