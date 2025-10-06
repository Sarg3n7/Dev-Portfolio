import { useEffect, useState } from "react";

/**
 * Preloader
 * - Shows your /public/loader.gif above a 0→100% progress bar.
 * - Progress animates over a fixed minimum duration (default 3800ms).
 * - Calls onDone() when complete.
 */
const Preloader = ({ onDone, minDurationMs = 3800 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / minDurationMs, 1);
      const eased = easeOutCubic(t);
      const pct = Math.round(eased * 100);

      setProgress(pct);

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // tiny pause for polish before we unmount
        setTimeout(() => onDone?.(), 220);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [minDurationMs, onDone]);

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-[hsl(var(--background))]">
      {/* 🔁 Make the content block at least 70vw wide, up to 1000px */}
      <div className="w-[min(1000px,92vw)] min-w-[70vw] text-center"> {/* 🔁 */}
        {/* Bigger GIF (responsive) */}
        <img
          src="/gifs/MJ.gif"
          alt="Loading"
          className="mx-auto mb-6 h-44 md:h-60 w-auto object-contain"
        />
        {/* 🔁 Thicker bar and full width of the widened container */}
        <div className="w-full h-4 md:h-5 rounded-full bg-[hsl(var(--muted))] overflow-hidden"> {/* 🔁 */}
          <div
            className="h-full bg-[hsl(var(--primary))] transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">
          Loading {progress}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;
