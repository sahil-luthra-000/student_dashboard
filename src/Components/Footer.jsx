import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ToastContainer } from "react-toastify";

const Footer = () => {
  return (
    <div className="bg-black pt-9">
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          {/* Logo Section */}
          <div className="mb-4 md:w-[316px]">
            <h1 className="text-white font-extrabold">
              <span className="text-rose-600">YOUR</span>LOGO
            </h1>
            <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              fugit non. Incidunt dolorum adipisci, tempore asperiores nemo odio
              facere officiis enim animi placeat eaque nesciunt alias beatae id,
              at dicta.
            </p>
            <div className="mt-[18px] flex gap-4">
              {[
                {
                  icon: <FaFacebook size={36} />,
                  link: "https://www.facebook.com",
                  color: "#1877F2",
                  alt: "Facebook",
                },
                {
                  icon: <FaLinkedin size={36} />,
                  link: "https://www.linkedin.com",
                  color: "#0077B5",
                  alt: "LinkedIn",
                },
                {
                  icon: <FaInstagram size={36} />,
                  link: "https://www.instagram.com",
                  color: "#C1275F",
                  alt: "Instagram",
                },
                {
                  icon: <FaTwitter size={36} />,
                  link: "https://www.twitter.com",
                  color: "#1da1f2",
                  alt: "Twitter",
                },
                {
                  icon: <FaYoutube size={36} />,
                  link: "https://www.youtube.com",
                  color: "#ee0f0f",
                  alt: "YouTube",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  className={`hover:scale-110`}
                  style={
                    social.color.startsWith("#")
                      ? { color: social.color }
                      : undefined
                  }
                  target="_blank"
                  href={social.link}
                  rel="noopener noreferrer"
                  aria-label={social.alt}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:w-[316px]">
            {[
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.8472 14.8554L16.4306..." fill="white" />
                  </svg>
                ),
                title: "+91 1800123444",
                subtitle: "Support Number",
                link: "tel:+911800123444",
              },
              {
                icon: (
                  <svg
                    width="20"
                    height="15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 0H1C0.801088 0 0.610322 0.079..."
                      fill="white"
                    />
                  </svg>
                ),
                title: "help@lorem.com",
                subtitle: "Support Email",
                link: "mailto:help@lorem.com",
              },
              {
                icon: (
                  <svg
                    width="18"
                    height="21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 4.5C8.25832 4.5 7.5333 4.719..." fill="white" />
                  </svg>
                ),
                title: "help@lorem.com",
                subtitle: "Support Location",
                link: "#",
              },
            ].map(({ icon, title, subtitle, link }, index) => (
              <div key={index} className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  {icon}
                </div>
                <div className="ml-[18px]">
                  <a
                    href={link}
                    className="font-Inter text-[14px] font-medium text-white"
                  >
                    {title}
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-white">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
