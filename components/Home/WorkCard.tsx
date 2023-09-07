import React from "react";
import { AvatarDemo } from "../ui/avatar/avatar-demo";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Props {
  title: string;
  company: {
    company_name: string;
    role: string;
    start_date: string;
    end_date: string;
    is_current: boolean;
    exact_period: string;
    logo: string;
  }[];
}

function WorkCard({ title, company }: Props) {
  return (
    <div>
      <h2 className="text-sm text-zinc-500 mb-2">{title}</h2>
      <ul className="space-y-6">
        {company.map(
          ({ company_name, logo, role, is_current, exact_period }) => (
            <li
              key={company_name}
              className="flex md:items-center md:justify-between flex-col md:flex-row gap-1 md:gap-6"
            >
              <div className="inline-flex gap-4 items-start flex-1">
                <div className="border-4 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition-colors dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <AvatarDemo
                    className="w-10 h-10"
                    image={logo}
                    alt={company_name}
                  />
                </div>
                <div className="inline-flex flex-col gap-1 transition-colors">
                  <span className="text-sm font-semibold dark:text-zinc-100 text-zinc-800">
                    {company_name}
                  </span>
                  <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">
                    {role}
                  </span>
                </div>
              </div>
              <p className="text-xs font-normal self-end md:self-auto text-zinc-500 dark:text-zinc-400 inline-flex flex-row gap-2">
                {is_current ? (
                  <>
                    <span>{exact_period}</span> <span>—</span>
                    <span>Present</span>
                  </>
                ) : (
                  exact_period
                )}
              </p>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default WorkCard;
