"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "emailjs-com";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { cn } from "@/lib/cn";

type FormState = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "sent" | "error";

const Contact: React.FC = () => {
  const [data, setData] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      )
      .then(() => {
        setStatus("sent");
        setData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="relative snap-section">
      <div className="container-x w-full">
        <SectionHeader
          index="05"
          eyebrow="Contact"
          title="Let's build something "
          accent="worth shipping."
          description="I'm currently exploring frontend roles. The fastest way to reach me is email."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <RevealGroup stagger={0.1} className="lg:col-span-5 space-y-6">
            <RevealItem>
            <a
              href="mailto:justinlfern@gmail.com"
              className="group surface rounded-2xl p-6 flex items-start gap-4 hover:border-accent/40 transition-[border-color,background-color]"
            >
              <div className="grid place-items-center h-11 w-11 rounded-lg bg-accent/10 border border-accent/30 text-accent-soft flex-shrink-0">
                <Mail size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="eyebrow mb-1">Email</div>
                <div className="text-white font-medium tracking-tight truncate">
                  justinlfern@gmail.com
                </div>
                <div className="text-xs text-chalk-400 mt-1">Replies within 24h</div>
              </div>
              <ArrowUpRight size={16} className="text-chalk-400 group-hover:text-white group-hover:-rotate-12 transition-[color,transform] flex-shrink-0" />
            </a>
            </RevealItem>

            <RevealItem className="grid grid-cols-2 gap-3">
              <SocialCard
                href="https://www.linkedin.com/in/justin-f-7a4727122/"
                label="LinkedIn"
                handle="justin-f"
                icon={<Linkedin size={16} />}
              />
              <SocialCard
                href="https://github.com/Justinlf55"
                label="GitHub"
                handle="Justinlf55"
                icon={<Github size={16} />}
              />
            </RevealItem>
          </RevealGroup>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="surface rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  name="name"
                  value={data.name}
                  onChange={onChange}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={onChange}
                />
              </div>
              <TextArea
                label="Message"
                name="message"
                value={data.message}
                onChange={onChange}
              />

              <div className="flex items-center justify-between gap-4 pt-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-chalk-500">
                  {status === "sent"
                    ? "✓ message sent"
                    : status === "error"
                    ? "× failed — try email"
                    : "encrypted via EmailJS"}
                </span>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                  <Send size={14} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const fieldBase =
  "w-full bg-ink-900/60 border border-line rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-chalk-500 focus:border-accent/60 focus:bg-ink-900 transition-colors outline-none";

const Field: React.FC<{
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, name, value, type = "text", onChange }) => (
  <label className="block">
    <span className="block eyebrow mb-2">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className={fieldBase}
      placeholder={type === "email" ? "you@company.com" : "Jane Doe"}
    />
  </label>
);

const TextArea: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ label, name, value, onChange }) => (
  <label className="block">
    <span className="block eyebrow mb-2">{label}</span>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required
      rows={6}
      className={cn(fieldBase, "resize-none")}
      placeholder="Tell me about the role or project…"
    />
  </label>
);

const SocialCard: React.FC<{
  href: string;
  label: string;
  handle: string;
  icon: React.ReactNode;
}> = ({ href, label, handle, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="surface rounded-xl p-4 flex items-center gap-3 hover:border-accent/40 hover:bg-white/[0.04] transition-all group"
  >
    <span className="grid place-items-center h-8 w-8 rounded-md border border-line text-chalk-300 group-hover:text-white group-hover:border-accent/50 transition-colors">
      {icon}
    </span>
    <span className="min-w-0 flex-1">
      <span className="block eyebrow">{label}</span>
      <span className="block text-sm text-white truncate">{handle}</span>
    </span>
  </a>
);

export default Contact;
