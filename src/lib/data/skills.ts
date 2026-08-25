import type { SkillGroup } from "@/lib/types";

export const SKILL_GROUPS: SkillGroup[] = [
  {
    dir: "languages/",
    label: "Languages",
    skills: [
      { name: "Java",         level: 4 },
      { name: "TypeScript",   level: 4 },
      { name: "JavaScript",   level: 4 },
      { name: "SQL",          level: 3 },
    ],
  },
  {
    dir: "frontend/",
    label: "Frontend",
    skills: [
      { name: "React.js",     level: 4 },
      { name: "HTML5 & CSS3", level: 5 },
      { name: "Bootstrap",    level: 3 },
    ],
  },
  {
    dir: "ai-genai/",
    label: "AI & GenAI",
    skills: [
      { name: "Prompt Engineering",     level: 5 },
      { name: "AI Agents",              level: 4 },
      { name: "RAG Pipelines",          level: 4 },
      { name: "GPT / Claude / Gemini",  level: 4 },
      { name: "Hallucination Analysis", level: 4 },
    ],
  },
  {
    dir: "backend/",
    label: "Backend",
    skills: [
      { name: "Node.js",     level: 3 },
      { name: "Express.js",  level: 3 },
      { name: "Spring Boot", level: 3 },
      { name: "REST APIs",   level: 4 },
      { name: "Composio",    level: 3 },
    ],
  },
  {
    dir: "data-platform/",
    label: "Data & Platform",
    skills: [
      { name: "MySQL",       level: 3 },
      { name: "MongoDB",     level: 3 },
      { name: "Pinecone",    level: 3 },
      { name: "Redis",       level: 2 },
      { name: "GCP",         level: 2 },
      { name: "Docker",      level: 2 },
    ],
  },
  {
    dir: "observability/",
    label: "Tools & Observability",
    skills: [
      { name: "Langfuse",        level: 4 },
      { name: "New Relic",       level: 3 },
      { name: "Postman",         level: 4 },
      { name: "Jira",            level: 4 },
      { name: "Chrome DevTools", level: 4 },
      { name: "Git",             level: 4 },
    ],
  },
];
