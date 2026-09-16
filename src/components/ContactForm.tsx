import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Topic = "feedback" | "bug" | "design" | "other";

const TOPICS: { value: Topic; label: string }[] = [
  { value: "feedback", label: "App feedback" },
  { value: "bug", label: "Bug report" },
  { value: "design", label: "Design project" },
  { value: "other", label: "Something else" },
];

type Props = { apps: { slug: string; name: string }[] };

const MAX_BYTES = 5 * 1024 * 1024;

export default function ContactForm({ apps }: Props) {
  const [topic, setTopic] = useState<Topic>("feedback");
  const [app, setApp] = useState(apps[0]?.slug ?? "");
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
  const appName = apps.find((a) => a.slug === app)?.name ?? "Other";
  const subject = `${topicLabel}${aboutApp ? ` — ${appName}` : ""} (spolvero.design)`;

  function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    const f = e.currentTarget;
    const get = (n: string) => (f.elements.namedItem(n) as HTMLInputElement | null);
    const file = get("attachment")?.files?.[0];
    let problem = "";
    if (!get("name")?.value.trim()) problem = "Add your name so we know who to reply to.";
    else if (!get("email")?.value.trim() || !get("email")!.checkValidity()) problem = "Enter an email address like name@example.com.";
    else if (!(f.elements.namedItem("message") as HTMLTextAreaElement).value.trim()) problem = "Write a message before sending.";
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
      className="grid gap-6 rounded-[1.75rem] border bg-card p-6 sm:p-9"
    >
      <fieldset className="grid gap-3">
        <legend className="mb-3 text-sm font-medium">What's this about?</legend>
        <RadioGroup name="topic_key" value={topic} onValueChange={(v) => setTopic(v as Topic)} className="grid grid-cols-2 gap-2">
          {TOPICS.map((t) => (
            <Label
              key={t.value}
              htmlFor={`topic-${t.value}`}
              className="flex h-12 cursor-pointer items-center gap-2.5 rounded-xl border px-3 text-sm font-medium has-data-checked:border-brand has-data-checked:bg-brand-soft"
            >
              <RadioGroupItem id={`topic-${t.value}`} value={t.value} />
              {t.label}
            </Label>
          ))}
        </RadioGroup>
        <input type="hidden" name="topic" value={topicLabel} />
      </fieldset>

      {aboutApp && (
        <div className="grid gap-2">
          <Label htmlFor="app">Which app?</Label>
          <Select value={app} onValueChange={(v) => { if (v) setApp(v); }}>
            <SelectTrigger id="app" className="h-11 w-full rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {apps.map((a) => (
                <SelectItem key={a.slug} value={a.slug}>{a.name}</SelectItem>
              ))}
              <SelectItem value="other">Another app</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="app" value={appName} />
        </div>
      )}

      {topic === "bug" && (
        <div className="grid gap-2">
          <Label htmlFor="device">Phone model and Android version <span className="font-normal text-muted-foreground">(optional)</span></Label>
          <Input id="device" name="device" className="h-11 rounded-xl" placeholder="For example, Samsung Galaxy S24, Android 15" autoComplete="off" />
        </div>
      )}

      {topic === "design" && (
        <div className="grid gap-2">
          <Label htmlFor="budget">Rough budget and timeline <span className="font-normal text-muted-foreground">(optional)</span></Label>
          <Input id="budget" name="budget" className="h-11 rounded-xl" placeholder="For example, $1,500 over 4 weeks" autoComplete="off" />
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" className="h-11 rounded-xl" autoComplete="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" className="h-11 rounded-xl" autoComplete="email" required />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" className="min-h-40 rounded-xl" required />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="attachment">Screenshot or file <span className="font-normal text-muted-foreground">(optional, up to 5 MB)</span></Label>
        <Input id="attachment" name="attachment" type="file" accept="image/*,.pdf" className="h-11 rounded-xl pt-2.5" />
      </div>

      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_next" value="https://spolvero.design/contact/thanks/" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px]" />

      {error && (
        <p ref={errorRef} role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" className="h-12 rounded-full px-7 text-base">Send message</Button>
        <p className="text-sm text-muted-foreground">We only use your email to reply.</p>
      </div>
    </form>
  );
}
