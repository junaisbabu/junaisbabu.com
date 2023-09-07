import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { contact } from "../icons/svg";

function ContactMe() {
  return (
    <Card className="h-fit rounded-2xl">
      <CardHeader>
        <div className="flex flex-row w-full items-center gap-4">
          <div>{contact}</div>
          <CardTitle className="text-base font-bold text-zinc-800 dark:text-zinc-100">
            Contact Me
          </CardTitle>
        </div>
        <CardDescription className="text-sm text-zinc-500 dark:text-zinc-400">
          Feel free to contact me!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Name"
              className="bg-transparent rounded-md"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-transparent rounded-md"
            />
            <Textarea
              placeholder="Message..."
              className="bg-transparent rounded-md resize-none"
            />
            <Button className="w-full">Send Message</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactMe;
