"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Year the site was built. Used for the prerendered HTML so no `new Date()`
// runs during prerender (Next's Cache Components would flag it).
const buildYear = Number(process.env.NEXT_PUBLIC_BUILD_YEAR) || 2026;

/**
 * Renders the current year. The server HTML shows the build year, and the
 * browser switches to the visitor's real year right after hydration, so the
 * footer never goes stale and there is no hydration mismatch.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => buildYear
  );

  return <>{year}</>;
}
