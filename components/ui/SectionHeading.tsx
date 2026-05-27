import AnimateOnScroll from "./AnimateOnScroll";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", centered && "text-center", className)}>
      {eyebrow && (
        <AnimateOnScroll>
          <p
            className={cn(
              "font-sans text-xs tracking-[0.28em] uppercase",
              light ? "text-gold-light" : "text-gold"
            )}
          >
            {eyebrow}
          </p>
        </AnimateOnScroll>
      )}
      <AnimateOnScroll delay={0.08}>
        <h2
          className={cn(
            "font-serif text-4xl md:text-5xl font-light leading-tight",
            light ? "text-ivory" : "text-charcoal"
          )}
        >
          {title}
        </h2>
      </AnimateOnScroll>
      {subtitle && (
        <AnimateOnScroll delay={0.16}>
          <p
            className={cn(
              "font-serif text-lg italic font-light",
              light ? "text-ivory/60" : "text-warm-gray"
            )}
          >
            {subtitle}
          </p>
        </AnimateOnScroll>
      )}
    </div>
  );
}
