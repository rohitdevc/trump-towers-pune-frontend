"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
    children: React.ReactNode;
    className?: string;
};

export default function ScrollReveal({children, className = ""}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    
    const [animation, setAnimation] = useState<"hidden" | "slide-up" | "visible" | "slide-down">("hidden");
    
    const previousTop = useRef<number | null>(null);
    
    useEffect(() => {
        const element = ref.current;
        
        if (!element) return;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                const currentTop = entry.boundingClientRect.top;
                const previous = previousTop.current;
                
                if (previous === null) {
                    previousTop.current = currentTop;
                    
                    if (entry.isIntersecting) {
                        setAnimation("slide-up");
                    }
                    
                    return;
                }
                
                const scrollingDown = currentTop < previous;
                const scrollingUp = currentTop > previous;
                
                previousTop.current = currentTop;
                
                if (entry.isIntersecting) {
                    setAnimation("slide-up");
                } else {
                    if (scrollingUp) {
                        setAnimation("slide-down");
                    } else if (scrollingDown) {
                        setAnimation("slide-down");
                    }
                }
            },
            {
                root: null,
                rootMargin: "0px 0px -150px 0px",
                threshold: 0,
            }
        );
        
        observer.observe(element);
        
        return () => observer.disconnect();
    }, []);
    
    return (
    <div ref={ref} className={`
        ${className}
        ${animation === "hidden" ? "opacity-0 translate-y-20" : ""}
        ${animation === "slide-up" ? "animate-slide-up" : ""}
        ${animation === "slide-down" ? "animate-slide-down" : ""}
        ${animation === "visible" ? "opacity-100 translate-y-0" : ""}
      `}
    >{children}</div>
    )
}