"use client";

import AboutMe from "./about-me";
import Experieces from "./experieces";
import ThemeSwitch from "./theme-switch";
import Projects from "./projects";
import ContactMe from "./contact-me";
import CardBox from "./ui/card-box";
import { contact, project, skills, work } from "./icons/svg";
import Skills from "./skills";
import Footer from "./footer";

function Home() {
  return (
    <div className="bg-[#FAFAFA] dark:bg-black transition-colors min-h-screen max-h-full">
      <div className="max-w-[1216px] relative bg-white dark:bg-[#18181B] transition-colors mx-auto h-full w-full ring-1 ring-zinc-100 dark:ring-zinc-300/20">
        <main className="mx-auto w-11/12 sm:w-10/12 h-full py-6 flex flex-col gap-10">
          <div className="w-full flex justify-end">
            <ThemeSwitch />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] place-items-center gap-8">
            <section className="flex flex-col items-center md:items-start gap-24 md:gap-28 my-8">
              <AboutMe />
              <CardBox
                className="hidden lg:block"
                icon={contact}
                title="Contact Me"
                description="Get in Touch with Me!"
              >
                <ContactMe />
              </CardBox>
            </section>
            <section className="mx-auto lg:ml-auto lg:mr-0">
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
                <CardBox
                  className="block lg:hidden"
                  icon={contact}
                  title="Contact Me"
                  description="Get in Touch with Me!"
                >
                  <ContactMe />
                </CardBox>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
