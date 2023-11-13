"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
import { useToast } from "./ui/toast/use-toast";

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
    <form onSubmit={sendEmail}>
      <div className="space-y-5">
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
        </div>
        <Button className="w-full" type="submit">
          {isSending ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}

export default ContactMe;
