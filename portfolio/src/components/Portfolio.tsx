'use client';
import React, { useState, useEffect, ReactNode } from 'react';
import { Moon, Sun, Github, Linkedin } from 'lucide-react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <div className="pl-4 border-l-2 border-gray-200 space-y-4">{children}</div>
  </div>
);

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode =
      localStorage.getItem('darkMode') === 'true' ||
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: darkMode ? '#000000' : '#ffffff',
        color: darkMode ? '#ffffff' : '#000000',
      }}
    >
      <div className="max-w-2xl mx-auto p-6 font-sans space-y-8">
        <div className="flex justify-between items-center mb-8">
          <a
            href="https://github.com/owenz0523"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
            style={{ color: darkMode ? '#a0aec0' : '#4a5568' }}
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/owenzhang052"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
            style={{ color: darkMode ? '#a0aec0' : '#4a5568' }}
          >
            <Linkedin size={24} />
          </a>
          <button
            onClick={toggleDarkMode}
            style={{ color: darkMode ? '#a0aec0' : '#4a5568' }}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <Section title="Intro">
          <p>Hi, I&apos;m Owen.</p>
          <p>Software Engineering Student at the University of Waterloo.</p>
          <p>
            Incoming Software Engineering Intern at{' '}
            <a
              href="https://www.martinrea.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-300 dark:bg-green-600 px-1 rounded text-black"
            >
              Shopify
            </a>
            .
          </p>
        </Section>

        <Section title="Experience">
          <p>
            Previously, I have worked at{' '}
            <a
              href="https://www.martinrea.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-300 dark:bg-blue-600 px-1 rounded text-black"
            >
              Martinrea International
            </a>
            {' '}and{' '}
            <a
              href="https://www.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-300 dark:bg-blue-600 px-1 rounded text-black"
            >
              Apple
            </a>
            .
          </p>
          <p>
            Currently working with{' '}
            <a
              href="https://watstreet.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-300 dark:bg-yellow-600 px-1 rounded text-black"
            >
              WatStreet
            </a>
             {' '}and{' '}
            <a
              href="https://pillthought.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-300 dark:bg-yellow-600 px-1 rounded text-black"
            >
              PillThought Technologies
            </a>
            .
          </p>
        </Section>

        <Section title="Other Things">
            <p>Top 5 in North America at{' '}
              <a
                href="https://www.citadel.com/careers/students/terminal/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-300 dark:bg-red-600 px-1 rounded text-black"
              >
              Citadel Summer Terminal 2024
              </a>
              .
              </p>
            <p>Built{' '} 
              <a
                href="https://devpost.com/software/pharmfill"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-300 dark:bg-red-600 px-1 rounded text-black"
              >
              Pharmfill
              </a>
              , winning &quot;Best Use of Redis&quot; at DeltaHacks.
            </p>
            <p>Built{' '}
              <a
                href="https://devpost.com/software/beakons"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-300 dark:bg-red-600 px-1 rounded text-black"
              >
              Beacons
              </a>
              , winning &quot;Best Use of MongoDB&quot; at DeerHacks.
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
