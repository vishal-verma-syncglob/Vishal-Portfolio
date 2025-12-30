import { useEffect, useState } from "react";

export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState(ids[0]); // default = About

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0.01,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
};
