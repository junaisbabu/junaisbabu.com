import React from "react";
import { Card, CardContent } from "../ui/card";
import WorkCard from "./WorkCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function Skills() {
  return (
    <Card className="h-fit max-h-full overflow-y-scroll hide-scrollbar">
      <CardContent className="space-y-4 p-6 h-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm text-zinc-100">
              Web Development
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h1 className="text-sm font-normal text-zinc-400 mb-2">
                    Front-end
                  </h1>
                  <ul className="text-xs space-y-2 list-disc ml-4">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next JS</li>
                    <li>Redux</li>
                    <li>React Query</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-sm font-normal text-zinc-400 mb-2">
                    Back-end
                  </h1>
                  <ul className="text-xs space-y-2 list-disc ml-4">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>PostgreSQL</li>
                    <li>Firebase</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm text-zinc-100">
              Mobile App Development
            </AccordionTrigger>
            <AccordionContent>
              <ul className="text-xs space-y-2 list-disc ml-4">
                <li>React Native</li>
                <li>Capacitor.js</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-sm text-zinc-100">
              UI / UX
            </AccordionTrigger>
            <AccordionContent>
              <ul className="text-xs space-y-2 list-disc ml-4">
                <li>Figma</li>
                <li>Adobe Photoshop</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-sm text-zinc-100">
              Other
            </AccordionTrigger>
            <AccordionContent>
              <ul className="text-xs space-y-2 list-disc ml-4">
                <li>Git</li>
                <li>Testing</li>
                <li>Data Structures & Algorithm</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

export default Skills;
