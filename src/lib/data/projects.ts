import type { Project } from "@/lib/types";

export const PROJECTS: Project[] = [
  {
    path: "~/projects/employee-management-system",
    title: "Employee Management System",
    description:
      "Full-featured CRUD application for employee data management, built with Java applying OOP principles and SOLID design patterns for clean, maintainable architecture.",
    tags: ["Java", "OOP", "SOLID Principles"],
    statusDot: "bg-rose-500",
    accentBorder: "hover:border-rose-600/20",
    accentText: "text-rose-400",
    features: ["crud", "oop", "solid", "exception-handling"],
  },
];
