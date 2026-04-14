import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);

    const handleChange = (e) => {
      setMatches(e.matches);
    };

    // initial state
    setMatches(media.matches);

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
