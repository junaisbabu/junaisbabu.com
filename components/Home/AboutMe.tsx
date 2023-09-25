import React from "react";
import { AvatarDemo } from "../ui/avatar/avatar-demo";
import { github, linkedin, twitter, whatsApp } from "../icons/svg";
import Link from "next/link";

function AboutMe() {
  return (
    <div className="space-y-6">
      <AvatarDemo
        className="w-16 h-16"
        image="/assets/junais.jpg"
        alt="Junais Babu"
      />
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Hey there.
      </h1>
      <p className="text-base font-normal text-zinc-400 dark:text-zinc-400">
        I’m{" "}
        <strong className="dark:text-zinc-300 text-zinc-500 font-medium">
          Junais Babu.
        </strong>{" "}
        I like building stuff, mostly software. I live in Ooty, India.
      </p>
      <ul className="inline-flex items-center gap-6">
        <li>
          <Link href="https://wa.me/+919385403668?text=Hello">{whatsApp}</Link>
        </li>
        <li>
          <Link href="https://github.com/junaisbabu">{github}</Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/junaisbabu/">{linkedin}</Link>
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
