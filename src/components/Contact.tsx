import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const CONTACT_ITEMS = [
  {
    icon: TfiEmail,
    label: "hakimnazry@gmail.com",
    href: "mailto:hakimnazry@gmail.com",
  },
  {
    icon: FaGithub,
    label: "github.com/hakimnazry24",
    href: "https://github.com/hakimnazry24",
  },
  {
    icon: BsTwitterX,
    label: "@hakimnazry_",
    href: "https://twitter.com/hakimnazry_",
  },
  {
    icon: FaLinkedin,
    label: "linkedin.com/in/hakim-nazri/",
    href: "https://linkedin.com/in/hakim-nazri/",
  },
];

export default function Contact() {
  return (
    <section className="brutal-section bg-cream" id="contact">
      <div className="brutal-container px-6">
        <h2 className="brutal-section-title">
          Contact
          <span className="block w-16 h-1 bg-terracotta mx-auto mt-3" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {CONTACT_ITEMS.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              <div className="brutal-card p-6 flex flex-col items-center gap-4 text-center h-full transition-all duration-200 ease-out hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-brutal">
                <div className="bg-mustard border-4 border-navy rounded-[4px] p-4">
                  <Icon className="text-4xl text-navy" />
                </div>
                <p className="font-display font-semibold text-navy text-sm break-all">
                  {label}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
