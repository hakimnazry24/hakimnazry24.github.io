import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const CONTACT_ITEMS = [
  {
    icon: TfiEmail,
    label: "hakimnazry@gmail.com",
    href: null,
  },
  {
    icon: FaGithub,
    label: "github.com/hakimnazry24",
    href: "www.github.com/hakimnazry24",
  },
  {
    icon: BsTwitterX,
    label: "@hakimnazry_",
    href: "https://twitter.com/hakimnazry_",
  },
  {
    icon: FaLinkedin,
    label: "www.linkedin.com/in/hakim-nazri/",
    href: "www.linkedin.com/in/hakim-nazri/",
  },
];

export default function Contact() {
  return (
    <div className="flex justify-center py-10 text-center" id="contact">
      <div>
        <h1 className="text-5xl font-semibold mb-20">Contact</h1>
        <div className="md:lg:grid grid-cols-4 gap-5">
          {CONTACT_ITEMS.map(({ icon: Icon, label, href }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 mb-5 md:lg:mb-0"
            >
              {href ? (
                <a href={href}>
                  <Icon
                    style={{ fontSize: "5rem" }}
                    className="inline-block"
                  />
                  <p>{label}</p>
                </a>
              ) : (
                <>
                  <Icon style={{ fontSize: "5rem" }} />
                  <p>{label}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
