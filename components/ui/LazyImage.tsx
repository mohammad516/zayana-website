"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type LazyImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  className?: string; // backward-compat: treated as containerClassName
  containerClassName?: string;
  imgClassName?: string;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  onClick?: () => void;
};

export default function LazyImage(props: LazyImageProps) {
  const {
    src,
    alt,
    priority = false,
    loading,
    className,
    containerClassName,
    imgClassName,
    sizes,
    fill = false,
    width,
    height,
    placeholder,
    blurDataURL,
    onClick,
  } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(priority);

  useEffect(() => {
    if (priority) return; // priority images render immediately
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
        { root: null, rootMargin: "400px", threshold: 0.01 }
      );
      observer.observe(node);
    } else {
      setIsVisible(true);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [priority]);

  const wrapperClasses = containerClassName || className;

  return (
    <div ref={containerRef} className={wrapperClasses} onClick={onClick}>
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
          {...(fill ? { fill: true } : { width: width as number, height: height as number })}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={imgClassName}
        />
      ) : null}
    </div>
  );
}


