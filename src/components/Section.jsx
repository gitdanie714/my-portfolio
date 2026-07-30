import React, { useEffect, useRef, useState } from "react";

export default function Section({ id, eyebrow, title, children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`reveal scroll-mt-28 py-16 sm:py-24 ${visible ? "is-visible" : ""} ${className}`}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>}
      {title && <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{title}</h2>}
      {children}
    </section>
  );
}
