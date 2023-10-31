import React from "react";
import WorkCard from "./WorkCard";
import { internships, works } from "@/data/experiences";

function Experieces() {
  return (
    <div className="space-y-6">
      <WorkCard title="Work" company={works} />
      <WorkCard title="Internship" company={internships} />
    </div>
  );
}

export default Experieces;
