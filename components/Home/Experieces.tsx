import React from "react";
import WorkCard from "./WorkCard";
import { internships, works } from "@/data/experiences";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { work } from "../icons/svg";

function Experieces() {
  return (
    <Card className="h-fit max-h-full overflow-y-scroll hide-scrollbar">
      <CardContent className="space-y-4 p-6 h-full">
        <WorkCard title="Work" company={works} />
        <WorkCard title="Internship" company={internships} />
      </CardContent>
    </Card>
  );
}

export default Experieces;
