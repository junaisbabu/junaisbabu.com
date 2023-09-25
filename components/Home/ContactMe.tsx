"use client";

import React, { useState } from "react";
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
import emailjs from "@emailjs/browser";
import { useToast } from "../ui/toast/use-toast";

function ContactMe() {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setIsSending(true);
    const response = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
      e.target,
      process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
    );

    if (response.status === 200) {
      toast({
        status: "success",
        title: "Success",
        description: "Successfully Submitted",
      });
      e.target.reset();
      setIsSending(false);
    } else {
      toast({
        status: "error",
        title: "Error",
        description: "Something went wrong",
      });
    }
  };

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
        <form onSubmit={sendEmail}>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Name"
              className="bg-transparent rounded-md"
              name="from_name"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-transparent rounded-md"
              name="from_email"
              required
            />
            <Textarea
              placeholder="Message..."
              className="bg-transparent rounded-md resize-none"
              name="message"
              required
            />
            <Button className="w-full" type="submit">
              {isSending ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactMe;
