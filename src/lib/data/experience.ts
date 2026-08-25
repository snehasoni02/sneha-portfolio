import type { Experience } from "@/lib/types";

export const EXPERIENCES: Experience[] = [
  {
    role: "QA Intern · AI Platform",
    company: "Nagent.AI",
    period: "Feb 2026 – Present",
    location: "Bangalore, India",
    hash: "nagent-ai-2026",
    tag: "current",
    tagColor: "text-rose-400",
    dotColor: "bg-rose-500",
    shadowColor: "shadow-rose-600/40",
    bullets: [
      "Contributed to Convexa AI Platform — enhanced website UI/UX, onboarding flows, and chatbot experiences for enterprise customers.",
      "Built and configured prompt-based and tool-based AI agents for enterprise AI workflows using Composio integrations.",
      "Integrated REST APIs and collaborated with developers to improve AI platform functionality and reliability.",
      "Supported RAG implementation using Pinecone vector DB and optimized AI workflows with Langfuse and New Relic observability.",
      "Evaluated GPT-4, Gemini, Claude Opus, Perplexity, Kling, SeedDance, and ElevenLabs for response quality, latency, and reliability.",
      "Performed prompt engineering, AI guardrail validation, hallucination analysis, and RAG verification across production environments.",
      "Validated REST APIs using Postman, tracked defects in Jira, and executed functional, regression, and release validation cycles.",
    ],
    tech: ["React.js", "Node.js", "Spring Boot", "REST APIs", "Composio", "Pinecone", "Langfuse", "New Relic", "Postman", "Jira"],
  },
  {
    role: "Full Stack Trainee",
    company: "Coding Thinker",
    period: "Jul 2024 – Aug 2025",
    location: "Gwalior, India",
    hash: "coding-thinker-2024",
    tag: "",
    tagColor: "text-orange-400",
    dotColor: "bg-orange-500",
    shadowColor: "shadow-orange-600/40",
    bullets: [
      "Built hands-on proficiency in Java, Data Structures & Algorithms, React.js, Node.js, and MongoDB through practical projects.",
      "Applied OOP principles, REST API design, and clean architecture patterns across full-stack training projects.",
    ],
    tech: ["Java", "DSA", "React.js", "Node.js", "MongoDB"],
  },
];
