import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { link } from "../icons/svg";

function Projects() {
  return (
    <Card className="h-fit max-h-full overflow-y-scroll hide-scrollbar">
      <CardContent className="space-y-4 p-6 h-full">
        <div className="flex justify-center items-center flex-wrap gap-8 text-sm dark:text-zinc-100 text-zinc-800">
          <Link
            href="https://socijet.vercel.app/"
            className="flex items-center gap-1"
          >
            <span className="hover:underline underline-offset-4">SociJet</span>
            {link}
          </Link>
          <Link
            href="https://netflix-junais.vercel.app/"
            className="flex items-center gap-1"
          >
            <span className="hover:underline underline-offset-4">
              Netflix Clone
            </span>
            {link}
          </Link>
          <Link
            href="https://flappy-bird-junais.vercel.app/"
            className="flex items-center gap-1"
          >
            <span className="hover:underline underline-offset-4">
              Flappy Bird
            </span>
            {link}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default Projects;
