import React from "react";
import AboutMe from "./AboutMe";
import Experieces from "./Experieces";
import ContactMe from "./ContactMe";
import { Toggle } from "../ui/toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { skills, work } from "../icons/svg";
import Skills from "./Skills";

function Home() {
  return (
    <div className="max-w-[1216px] relative bg-[#18181B] mx-auto h-full">
      <div className="mx-auto w-10/12 h-full py-6 flex flex-col">
        {/* <div className="w-full flex justify-end">
          <Toggle>Toggle</Toggle>
        </div> */}
        <div className="w-full flex-1 flex flex-col justify-center gap-24 md:gap-28 my-8">
          <AboutMe />
          <div className="grid grid-cols-1 lg:grid-cols-[462px_416px] place-content-between gap-8">
            <Tabs defaultValue="experiences" className="w-full">
              <TabsList className="grid h-fit text-zinc-100 w-full grid-cols-2">
                <TabsTrigger
                  value="experiences"
                  className="inline-flex gap-4 justify-center items-center"
                >
                  {work} Experiences
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="inline-flex gap-4 justify-center items-center"
                >
                  {skills} Skills
                </TabsTrigger>
              </TabsList>
              <TabsContent value="experiences" className="md:h-[344px]">
                <Experieces />
              </TabsContent>
              <TabsContent value="skills" className="md:h-[344px]">
                <Skills />
              </TabsContent>
            </Tabs>
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
