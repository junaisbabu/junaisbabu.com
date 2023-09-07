import React, { useEffect } from "react";
import AboutMe from "./AboutMe";
import Experieces from "./Experieces";
import ContactMe from "./ContactMe";
import { Toggle } from "../ui/toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { skills, work } from "../icons/svg";
import Skills from "./Skills";
import Projects from "./Projects";
import ThemeSwitch from "./ThemeSwitch";

function Home() {
  return (
    <main className="bg-[#FAFAFA] dark:bg-black transition-colors h-full">
      <div className="max-w-[1216px] relative bg-white dark:bg-[#18181B] transition-colors mx-auto h-full">
        <div className="mx-auto w-11/12 sm:w-10/12 h-full py-6 flex flex-col">
          <div className="w-full flex justify-end">
            <ThemeSwitch />
          </div>
          <div className="w-full flex-1 flex flex-col justify-center gap-24 md:gap-28 my-8">
            <AboutMe />
            <div className="grid grid-cols-1 lg:grid-cols-[462px_416px] place-content-between gap-8">
              <Tabs defaultValue="experience" className="w-full">
                <TabsList className="grid h-fit text-zinc-800 dark:text-zinc-100 w-full grid-cols-2">
                  <TabsTrigger
                    value="experience"
                    className="inline-flex gap-4 justify-center items-center"
                  >
                    {work} Experience
                  </TabsTrigger>
                  {/* <TabsTrigger
                  value="skill"
                  className="inline-flex gap-4 justify-center items-center"
                >
                  {skills} Skill
                </TabsTrigger> */}
                  <TabsTrigger
                    value="project"
                    className="inline-flex gap-4 justify-center items-center"
                  >
                    {skills} Project
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="experience" className="md:h-[344px]">
                  <Experieces />
                </TabsContent>
                {/* <TabsContent value="skills" className="md:h-[344px]">
                <Skills />
              </TabsContent> */}
                <TabsContent value="project" className="md:h-[344px]">
                  <Projects />
                </TabsContent>
              </Tabs>
              <ContactMe />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
