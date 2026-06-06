interface ExperienceEntry {
  title: string;
  organization: string;
  description: string;
  period: string;
}

const EXPERIENCES: ExperienceEntry[] = [
  {
    title: "Programming Tutor",
    organization: "International Islamic University Malaysia",
    description:
      "Responsible for preparing modules and training for Element of Programming students for first year Computer Science students",
    period: "November 2024 - Current",
  },
  {
    title: "Freelancer",
    organization: "QuantumLeap Technologies",
    description:
      "Building web application for various clients to meet their business requirements",
    period: "July 2024 - Current",
  },
  {
    title: "Computer Science Intern",
    organization: "Startlah Innovation PLT",
    description:
      "Building web application to manage company customer relationship",
    period: "July 2024 - Current",
  },
];

export default function Experience() {
  return (
    <section className="my-20 mx-5 md:mx-0" id="experience">
      <h1 className="text-center text-2xl font-semibold mb-5">Experiences</h1>
      <div className="lg:w-3/5 mx-auto flex flex-col gap-y-14">
        {EXPERIENCES.map(({ title, organization, description, period }) => (
          <div
            key={title}
            className="flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{title}</h2>
              <h3 className="text-lg">{organization}</h3>
              <p className="lg:w-2/3 mt-5">{description}</p>
            </div>
            <h4 className="hidden md:block">{period}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
