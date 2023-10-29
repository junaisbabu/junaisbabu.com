import React from "react";
import WorkCard from "./WorkCard";
import { internships, works } from "@/data/experiences";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { skills, work } from "../icons/svg";

function Experieces() {
  return (
    <div className="space-y-4">
      <WorkCard title="Work" company={works} />
      <WorkCard title="Internship" company={internships} />
    </div>
  );
}

export default Experieces;
