import { useEffect, useRef, useState } from "react";

// export function useRevealContents(threshold, onIntersect, disableOnIntersect) {
export function useRevealContents(threshold, disableOnIntersect) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // onIntersect();
            setIsVisible(true);

            if (disableOnIntersect) {
              observer.unobserve(target);
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [disableOnIntersect, threshold]);

  return { targetRef, isVisible };
}
