"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PortfolioItem } from "@/data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  priority?: boolean;
}

export default function PortfolioCard({ item, priority = false }: PortfolioCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      <Link href={`/portfolio/${item.slug}`} className="group block">
        <div className="relative overflow-hidden aspect-[4/5]">
          {item.coverImage ? (
            <Image
              src={item.coverImage}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={priority}
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.placeholderGradient}`}
            >
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 12px,
                    rgba(201,168,108,1) 12px,
                    rgba(201,168,108,1) 13px
                  )`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-[10rem] font-light text-charcoal/8 select-none leading-none">
                  W
                </span>
              </div>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/35 transition-all duration-500" />

          {/* Category tag */}
          <div className="absolute top-4 left-4">
            <span className="font-sans text-[10px] tracking-[0.15em] uppercase bg-ivory/90 backdrop-blur-sm text-charcoal px-3 py-1.5">
              {item.category}
            </span>
          </div>

          {/* Title reveals on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <h3 className="font-serif text-lg text-ivory font-light">{item.title}</h3>
            {item.location && (
              <p className="font-sans text-xs tracking-wider text-ivory/60 mt-0.5">
                {item.location}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
