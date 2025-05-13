/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import Loader from "./ui/Loader";

const ContactSchema = z.object({
  name: z.string().min(3, "Name is too short"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const validation = ContactSchema.safeParse(form);

    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;

      const formattedErrors: Record<string, string> = {};

      for (const key in fieldErrors) {
        if (Object.prototype.hasOwnProperty.call(fieldErrors, key)) {
          const messages = fieldErrors[key as keyof typeof fieldErrors];
          if (messages && messages.length > 0) {
            formattedErrors[key] = messages[0];
          }
        }
      }

      setErrors(formattedErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="py-20 px-4 lg:mt-16 max-w-6xl mx-auto mt-8 text-white"
    >
      <h2 className="text-4xl font-bold text-purple-500 font-serif mb-10 md:text-center">
        Get In Touch
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-zinc-600 dark:text-white">
            Feel free to connect with{" "}
            <strong className="text-purple-500 font-bold">Me</strong>
          </h3>
          <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
            <Mail className="text-purple-500" /> abdeali.dahodwala@outlook.com
          </div>
          <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
            <MapPin className="text-purple-500" /> Ahmedabad, India
          </div>
          <div className="flex gap-6 mt-6">
            <a
              href="https://github.com/Abdeali1310"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-[0_0_15px_#3b82f6] bg-zinc-800 p-2 rounded-full transition"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdeali-dahodwala-169083268"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-[0_0_15px_#3b82f6] bg-zinc-800 p-2 rounded-full transition"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-zinc-700 dark:text-white"
        >
          <div className="space-y-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={form.email}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="bg-purple-600 text-white hover:bg-purple-700 transition flex items-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader />
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
