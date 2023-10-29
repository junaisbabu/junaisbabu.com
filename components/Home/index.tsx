"use client";

import React, { useEffect } from "react";
import AboutMe from "./AboutMe";
import Experieces from "./Experieces";
import ThemeSwitch from "./ThemeSwitch";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import CardBox from "../ui/card-box";
import { contact, project, skills, work } from "../icons/svg";
import { AvatarDemo } from "../ui/avatar/avatar-demo";
import Skills from "./Skills";

function Home() {
  return (
    <main className="bg-[#FAFAFA] dark:bg-black transition-colors min-h-screen max-h-full">
      <div className="max-w-[1216px] relative bg-white dark:bg-[#18181B] transition-colors mx-auto h-full">
        <div className="mx-auto w-11/12 sm:w-10/12 h-full py-6 flex flex-col">
          <div className="w-full flex justify-end mb-6">
            <ThemeSwitch />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="flex flex-col gap-24 md:gap-28 my-8">
              <AboutMe />
              <CardBox
                icon={contact}
                title="Contact Me"
                description="Feel free to contact me!"
              >
                <ContactMe />
              </CardBox>
            </section>
            <section>
              <div className="max-w-[450px] space-y-6 ml-auto">
                <CardBox icon={work} title="Experience">
                  <Experieces />
                </CardBox>
                <CardBox icon={skills} title="Skills">
                  <Skills />
                </CardBox>
                <CardBox icon={project} title="Projects">
                  <Projects />
                </CardBox>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
