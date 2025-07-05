"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export function ContactForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current!);

    try {
      const res = await fetch("https://formspree.io/f/xzzgwgjl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json", // 👈 Required by Formspree to respond with JSON
        },
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        formRef.current?.reset();
      } else {
        toast.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardContent>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 py-6"
          >
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                className="h-40 resize-none"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
