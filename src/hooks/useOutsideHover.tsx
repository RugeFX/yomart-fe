import { useEffect, useRef } from "react";

const useOutsideHover = (callback: () => void) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleHoverOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mouseover", handleHoverOutside);

    return () => {
      document.removeEventListener("mouseout", handleHoverOutside);
    };
  }, [callback]);

  return ref;
};

export default useOutsideHover;
