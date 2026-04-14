import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  const ticking = useRef(false);
  const rafId = useRef(null);

  const threshold = useMemo(() => (isMobile ? 600 : 300), [isMobile]);

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    if (!ticking.current) {
      rafId.current = requestAnimationFrame(() => {
        setVisible(window.scrollY > threshold);
        ticking.current = false;
      });

      ticking.current = true;
    }
  }, [threshold]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-md flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95 transition-shadow ${
            isMobile
              ? "bottom-20 right-4"
              : "bottom-6 right-6 hover:shadow-lg hover:scale-110"
          }`}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
