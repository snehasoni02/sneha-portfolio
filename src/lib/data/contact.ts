import type { ContactItem } from "@/lib/types";

export const CONTACT_ITEMS: ContactItem[] = [
  {
    cmd: "mailto snehasoni0204@gmail.com",
    label: "email",
    value: "snehasoni0204@gmail.com",
    href: "mailto:snehasoni0204@gmail.com",
    ping: "2ms",
    status: "200 OK",
  },
  {
    cmd: "call +91-9993939270",
    label: "phone",
    value: "+91 9993939270",
    href: "tel:+919993939270",
    ping: "0ms",
    status: "200 OK",
  },
  {
    cmd: "open linkedin/sneha-soni-73720625b",
    label: "linkedin",
    value: "sneha-soni-73720625b",
    href: "https://linkedin.com/in/sneha-soni-73720625b",
    ping: "12ms",
    status: "200 OK",
  },
];
