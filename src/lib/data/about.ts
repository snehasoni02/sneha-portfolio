import type { KvRow, Stat } from "@/lib/types";

export const KV_ROWS: KvRow[] = [
  { k: "Name      ", v: "Sneha Soni" },
  { k: "Role      ", v: "AI Software Engineer" },
  { k: "Company   ", v: "Nagent.AI" },
  { k: "Location  ", v: "Bengaluru (Remote)" },
  { k: "Education ", v: "B.E. Electronics · MITS (2022–2026) · CGPA 7.2" },
  { k: "Status    ", v: "● Open to Opportunities", highlight: true },
];

export const STATS: Stat[] = [
  { val: "6mo+", label: "AI Platform Experience" },
  { val: "5+",   label: "LLMs Evaluated" },
  { val: "5",    label: "HackerRank Certifications" },
];
