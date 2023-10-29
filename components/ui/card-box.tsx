import React, { ReactElement } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import Link from "next/link";

function CardBox({
  icon,
  title,
  description,
  children,
}: {
  icon: ReactElement;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="w-[450px] h-fit p-6">
      <CardHeader className="p-0">
        <div className="flex flex-row w-full items-center gap-4">
          <div>{icon}</div>
          <CardTitle className="text-base font-bold text-zinc-800 dark:text-zinc-100">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm text-zinc-500 dark:text-zinc-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 p-6 h-full">{children}</CardContent>
    </Card>
  );
}

export default CardBox;
