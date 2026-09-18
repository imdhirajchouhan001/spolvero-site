import { useEffect, useRef, useState } from "react";
import type { Key } from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { Label } from "@/components/base/input/label";
import { RadioButton, RadioGroup } from "@/components/base/radio-buttons/radio-buttons";
import { Select } from "@/components/base/select/select";
import { TextArea } from "@/components/base/textarea/textarea";

type Topic = "feedback" | "bug" | "design" | "other";

const TOPICS: { value: Topic; label: string; hint: string }[] = [
  { value: "feedback", label: "App feedback", hint: "Ideas or thoughts on an app" },
  { value: "bug", label: "Bug report", hint: "Something isn't working" },
  { value: "design", label: "Design project", hint: "Hire us for app, web or brand design" },
  { value: "other", label: "Something else", hint: "Anything else" },
];

type Props = { apps: { slug: string; name: string }[] };

const MAX_BYTES = 5 * 1024 * 1024;

export default function ContactForm({ apps }: Props) {
  const [topic, setTopic] = useState<Topic>("feedback");
  const [app, setApp] = useState<string>(apps[0]?.slug ?? "");
  const [error, setError] = useState("");
  const errorRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("topic") as Topic | null;
    if (t && TOPICS.some((x) => x.value === t)) setTopic(t);
    const a = params.get("app");
    if (a && apps.some((x) => x.slug === a)) setApp(a);
  }, [apps]);

  const aboutApp = topic === "feedback" || topic === "bug";
  const topicLabel = TOPICS.find((t) => t.value === topic)!.label;
  const appName = apps.find((a) => a.slug === app)?.name ?? "Another app";
  const subject = `${topicLabel}${aboutApp ? ` — ${appName}` : ""} (spolvero.design)`;
  const appItems = [...apps.map((a) => ({ id: a.slug, label: a.name })), { id: "other", label: "Another app" }];

  function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    const f = e.currentTarget;
    const val = (n: string) => ((f.elements.namedItem(n) as HTMLInputElement | null)?.value ?? "").trim();
    const email = f.elements.namedItem("email") as HTMLInputElement | null;
    const file = (f.elements.namedItem("attachment") as HTMLInputElement | null)?.files?.[0];
    let problem = "";
    if (!val("name")) problem = "Add your name so we know who to reply to.";
    else if (!val("email") || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()))) problem = "Enter an email address like name@example.com.";
    else if (!val("message")) problem = "Write a message before sending.";
    else if (file && file.size > MAX_BYTES) problem = "That file is over 5 MB. Choose a smaller one or leave it out.";
    if (problem) {
      e.preventDefault();
      setError(problem);
      requestAnimationFrame(() => errorRef.current?.scrollIntoView({ block: "center", behavior: "smooth" }));
    }
  }

  return (
    <form
      action="https://formsubmit.co/spolvero.design@gmail.com"
      method="POST"
      encType="multipart/form-data"
      noValidate
      onSubmit={onSubmit}
      className="flex flex-col gap-6"
    >
      <RadioGroup
        aria-label="What's this about?"
        value={topic}
        onChange={(v) => setTopic(v as Topic)}
        className="grid gap-3 sm:grid-cols-2"
      >
        {TOPICS.map((t) => (
          <RadioButton
            key={t.value}
            value={t.value}
            label={t.label}
            hint={t.hint}
            size="md"
            className="rounded-xl p-4 ring-1 ring-secondary ring-inset selected:ring-2 selected:ring-brand"
          />
        ))}
      </RadioGroup>
      <input type="hidden" name="topic" value={topicLabel} />

      {aboutApp && (
        <>
          <Select
            label="Which app?"
            items={appItems}
            selectedKey={app}
            onSelectionChange={(k: Key | null) => { if (k) setApp(String(k)); }}
            size="md"
          >
            {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
          </Select>
          <input type="hidden" name="app" value={appName} />
        </>
      )}

      {topic === "bug" && (
        <Input name="device" label="Phone model and Android version" hint="Optional" placeholder="For example, Samsung Galaxy S24, Android 15" />
      )}

      {topic === "design" && (
        <Input name="budget" label="Rough budget and timeline" hint="Optional" placeholder="For example, $1,500 over 4 weeks" />
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Input name="name" label="Your name" placeholder="Your name" autoComplete="name" isRequired />
        <Input name="email" type="email" label="Email" placeholder="you@example.com" autoComplete="email" isRequired />
      </div>

      <TextArea name="message" label="Message" placeholder="Leave us a message..." rows={6} isRequired />

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="attachment">Screenshot or file</Label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          accept="image/*,.pdf"
          aria-describedby="attachment-hint"
          className="w-full rounded-lg bg-primary px-3.5 py-2.5 text-md text-primary shadow-xs ring-1 ring-primary ring-inset file:mr-3 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-sm file:font-semibold file:text-secondary"
        />
        <p id="attachment-hint" className="text-sm text-tertiary">Optional. Images or PDF, up to 5 MB.</p>
      </div>

      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_next" value="https://spolvero.design/contact/thanks/" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px]" />

      {error && (
        <p ref={errorRef} role="alert" className="rounded-lg bg-error-primary px-4 py-3 text-sm font-semibold text-error-primary ring-1 ring-error_subtle ring-inset">
          {error}
        </p>
      )}

      <Button type="submit" size="xl" color="primary" className="w-full">Send message</Button>
      <p className="-mt-2 text-center text-sm text-tertiary">We only use your email to reply. <a href="/privacy/" className="underline">Website privacy</a></p>
    </form>
  );
}
