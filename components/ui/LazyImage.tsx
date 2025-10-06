"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type LazyImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  className?: string;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  quality?: number;
  onClick?: () => void;
};

export default function LazyImage(props: LazyImageProps) {
  const {
    src,
    alt,
    priority = false,
    loading,
    className,
    sizes,
    fill = false,
    width,
    height,
    placeholder,
    blurDataURL,
    quality,
    onClick,
  } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(priority);

  useEffect(() => {
    if (priority) return; // render immediately for priority images
    const node = containerRef.current;
    if (!node) return;

    let observer: IntersectionObserver | null = null;
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry && entry.isIntersecting) {
            setIsVisible(true);
            if (observer) observer.disconnect();
          }
        },
        { root: null, rootMargin: "200px", threshold: 0.01 }
      );
      observer.observe(node);
    } else {
      // Fallback: if no IntersectionObserver, render immediately
      setIsVisible(true);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [priority]);

  return (
    <div ref={containerRef} className={className} onClick={onClick}>
      {isVisible ? (
        <Image
          src={src}
          alt={alt}
          priority={priority}
          loading={priority ? "eager" : loading || "lazy"}
          sizes={
            sizes ||
            "(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          quality={priority ? undefined : (quality ?? 70)}
          {...(fill
            ? { fill: true }
            : { width: width as number, height: height as number })}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={className?.includes("object-") ? className : undefined}
        />
      ) : null}
    </div>
  );
}


