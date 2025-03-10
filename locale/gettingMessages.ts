"use client"; // Required for client-side hooks

import { usePathname } from "next/navigation";

export default function currentPath() {
  const pathname = usePathname();
  console.log(`pathnameFunction: `, pathname);
  return pathname;
}

