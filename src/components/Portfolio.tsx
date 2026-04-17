"use client";
import React, { useState, useEffect, ReactNode, CSSProperties } from "react";
import { Moon, Sun, Github, Linkedin } from "lucide-react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mb-8 space-y-4">
    <h2 className="text-base font-semibold mb-2">{title}</h2>
    <div className="pl-4 border-l-4 border-double border-gray-500 space-y-4">
      {children}
    </div>
  </div>
);

interface PreviewLinkProps {
  href: string;
  children: ReactNode;
  darkMode: boolean;
  className?: string;
  style?: CSSProperties;
  previewLabel?: string;
}

const PreviewLink: React.FC<PreviewLinkProps> = ({
  href,
  children,
  darkMode,
  className,
  style,
  previewLabel,
}) => (
  <span className="relative inline-flex group">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {children}
    </a>
    <span
      className="pointer-events-none absolute left-0 top-full z-10 mt-2 w-max max-w-sm rounded-md px-2 py-1 text-xs shadow-lg opacity-0 transform scale-95 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100"
      style={{
        backgroundColor: darkMode ? "#1a202c" : "#f7fafc",
        border: `1px solid ${darkMode ? "#4a5568" : "#cbd5e0"}`,
        color: darkMode ? "#e2e8f0" : "#2d3748",
      }}
    >
      <span className="block">{previewLabel ?? href}</span>
      <span className="block text-[11px] opacity-80">Opens in a new tab</span>
    </span>
  </span>
);

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode =
      localStorage.getItem("darkMode") === "true" ||
      (!("darkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: darkMode ? "#000000" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="max-w-2xl mx-auto p-6 font-sans space-y-8">
        <div className="flex justify-between items-center mb-8">
          <PreviewLink
            href="https://github.com/owenz0523"
            darkMode={darkMode}
            className="text-gray-500 hover:text-gray-700"
            style={{ color: darkMode ? "#a0aec0" : "#4a5568" }}
            previewLabel="github.com/owenz0523"
          >
            <Github size={24} />
          </PreviewLink>
          <PreviewLink
            href="https://www.linkedin.com/in/owenzhang052"
            darkMode={darkMode}
            className="text-gray-500 hover:text-gray-700"
            style={{ color: darkMode ? "#a0aec0" : "#4a5568" }}
            previewLabel="linkedin.com/in/owenzhang052"
          >
            <Linkedin size={24} />
          </PreviewLink>
          <button
            onClick={toggleDarkMode}
            style={{ color: darkMode ? "#a0aec0" : "#4a5568" }}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <div className="mb-8 w-1/2 mx-auto">
          <div className="h-20 overflow-hidden rounded-lg">
            <img
              src={darkMode ? "/dark.jpg" : "/light.jpg"}
              alt="Portfolio"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <Section title="Intro">
          <p>Hi, I&apos;m Owen.</p>
          <p>Software Engineering Student at the University of Waterloo.</p>
          <p>
            Incoming Software Engineering Intern at{" "}
            <PreviewLink
              href="https://www.databricks.com/"
              darkMode={darkMode}
              className="bg-red-200 dark:bg-red-500 px-1 rounded text-black"
              previewLabel="databricks.com"
            >
              DataBricks
            </PreviewLink>
            .
          </p>
          <p>Open to 2027 opportunities.</p>
        </Section>

        <Section title="Experience">
          <p>
            Previously, I have worked at{" "}
            <PreviewLink
              href="https://www.capitalone.com/"
              darkMode={darkMode}
              className="bg-blue-200 dark:bg-blue-500 px-1 rounded text-black"
              previewLabel="capitalone.com"
            >
              Capital One
            </PreviewLink>{" "}
            ,{" "}
            <PreviewLink
              href="https://www.shopify.com/"
              darkMode={darkMode}
              className="bg-green-200 dark:bg-green-500 px-1 rounded text-black"
              previewLabel="shopify.com"
            >
              Shopify
            </PreviewLink>{" "}
            and{" "}
            <PreviewLink
              href="https://www.martinrea.com/"
              darkMode={darkMode}
              className="bg-gray-200 dark:bg-gray-500 px-1 rounded text-black"
              previewLabel="martinrea.com"
            >
              Martinrea International
            </PreviewLink>
            .
          </p>
        </Section>

        <Section title="Other Things">
          <p>
            Top 5 in North America at{" "}
            <PreviewLink
              href="https://www.citadel.com/careers/students/terminal/"
              darkMode={darkMode}
              className="bg-pink-200 dark:bg-pink-500 px-1 rounded text-black"
              previewLabel="citadel.com/careers/students/terminal"
            >
              Citadel Summer Terminal 2024
            </PreviewLink>
            .
          </p>
          <p>
            Built{" "}
            <PreviewLink
              href="https://devpost.com/software/pharmfill"
              darkMode={darkMode}
              className="bg-pink-200 dark:bg-pink-500 px-1 rounded text-black"
              previewLabel="devpost.com/software/pharmfill"
            >
              Pharmfill
            </PreviewLink>
            , winner at DeltaHacks.
          </p>
          <p>
            Built{" "}
            <PreviewLink
              href="https://devpost.com/software/beakons"
              darkMode={darkMode}
              className="bg-pink-200 dark:bg-pink-500 px-1 rounded text-black"
              previewLabel="devpost.com/software/beakons"
            >
              Beacons
            </PreviewLink>
            , winner at DeerHacks.
          </p>
        </Section>

        <Section title="Emails">
          <p>o23zhang@uwaterloo.ca</p>
          <p>owen.z.0523@gmail.com</p>
        </Section>
      </div>
    </div>
  );
};

export default Portfolio;
