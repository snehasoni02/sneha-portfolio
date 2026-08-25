import type { SysInfoItem } from "@/lib/types";

export const ROLES = [
  "AI Software Engineer",
  "Full-Stack Developer",
  "Agentic AI Systems Builder",
  "Prompt Engineer",
] as const;

export const SYS_INFO: SysInfoItem[] = [
  { key: "Location  ", val: "Gwalior, India" },
  { key: "Company   ", val: "Nagent.AI" },
  { key: "Role      ", val: "QA Intern · AI Platform" },
  { key: "Stack     ", val: "React · Node.js · AI Agents · RAG" },
  { key: "Status    ", val: "● Open to Opportunities" },
  { key: "Education ", val: "B.E. Electronics · MITS (2022–2026)" },
];
