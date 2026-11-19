"use client";

import { useEffect } from "react";

/**
 * Cleans up URL hashes that don't point to anything on the page,
 * e.g. /#contacteeee or an old bookmark like /#testimonials.
 * The URL goes back to the plain path instead of showing a dead hash.
 */
export function HashGuard() {
  useEffect(() => {
    const check = () => {
      const raw = window.location.hash.slice(1);
      if (!raw) return;

      let id = raw;
      try {
        id = decodeURIComponent(raw);
      } catch {
        // Malformed escape sequence: treat the raw text as the id.
      }

      if (!document.getElementById(id)) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };

    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  return null;
}
