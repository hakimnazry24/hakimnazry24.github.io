export default function LandingPageIIUMFreelancer() {
  return (
    <>
      <header className="p-6 px-20 flex justify-between  shadow-md">
        <a href="/iium-freelancer" className="block">
          <div className="flex gap-2 items-center">
            <img src="/iium_logo.png" alt="" className="w-10" />
            <h1 className="text-2xl font-semibold text-gray-800">
              IIUM Freelancer
            </h1>
          </div>
        </a>

        <a href="#about">
          <h1 className="text-2xl font-semibold text-gray-800">About</h1>
        </a>
      </header>

      <section className="grid md:lg:grid-cols-2 p-20 md:lg:px-40  justify-items-center bg-gradient-to-tl from-green-400">
        <div className="self-center animate-fade-right">
          <h1 className="md:lg:text-7xl font-roboto font-semibold text-green-700">
            Empower Your
            <br />
            Freelancer
            <br />
            Journey
          </h1>
          <p className="text-lg mt-10">
            Market your services and use services provided by others.
            <br />
            Download the app now.
          </p>
          <button className="mt-5 px-5 py-3 bg-gradient-to-br from-green-500 to-green-200 border-2  border-black font-semibold rounded-lg transition ease-in-out hover:scale-105 duration-200">
            Download Now
          </button>
        </div>
        <div>
          <img src="/phone.png" alt="" className="animate-fade-left" />
        </div>
      </section>
    </>
  );
}
