export type AppPhase = "loading" | "curtain" | "ready";

export interface NavLink { label: string; href: string; }
export interface SysInfoItem { key: string; val: string; }
export interface KvRow { k: string; v: string; highlight?: boolean; }
export interface Stat { val: string; label: string; }
export interface Skill { name: string; level: number; }
export interface SkillGroup { dir: string; label: string; skills: Skill[]; }

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  hash: string;
  tag: string;
  tagColor: string;
  dotColor: string;
  shadowColor: string;
  bullets: string[];
  tech: string[];
}

export interface Project {
  path: string;
  title: string;
  description: string;
  tags: string[];
  statusDot: string;
  accentBorder: string;
  accentText: string;
  features: string[];
}

export interface Certification {
  path: string;
  title: string;
  issuer: string;
  badge: string;
  badgeColor: string;
  dotColor: string;
  borderColor: string;
  description: string;
  meta: { k: string; v: string }[];
}

export interface ContactItem {
  cmd: string;
  label: string;
  value: string;
  href: string;
  ping: string;
  status: string;
}
