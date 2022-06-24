import Title from "@/elements/Title";
import React from "react";

const Intro = () => {
  const tools = [
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Wordpress",
    "Mongo DB",
    "TypeScript",
  ];

  return (
    <>
      <Title name="My Skills" />
      <p className="subtitle-5 description">
        Since web technologies always move at a rapid pace, I&rsquo;m always
        eager to learn different technologies and build projects using those
        technologies.
      </p>
      <p className="subtitle-5 description">
        Also, if the project that I&rsquo;m working for the company needs
        different tools, I&rsquo;m willing to learn those things. When working
        with teams, I tailor my approach to your needs. One tool does not work
        for everybody, and I always aim to achieve the best results for who
        I&rsquo;m currently working with.
      </p>
      <p className="subtitle-5 description">
        Here&rsquo;s just a few of the Technologies / Tools I&rsquo;ve worked
        with in the past:-
      </p>
      <ul>
        {tools.map(tool => (
          <li key={tool} className="smallText-1">
            {tool}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Intro;
