"use client";

import { useState, useEffect, useRef, useMemo } from "react";

interface TypingTextProps {
  text: string | string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeTyping?: number;
  delayBeforeDeleting?: number;
  loop?: boolean;
  cursor?: boolean;
  cursorStyle?: string;
  onComplete?: () => void;
}

export default function TypingText({
  text,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBeforeTyping = 500,
  delayBeforeDeleting = 2000,
  loop = true,
  cursor = true,
  cursorStyle = "|",
  onComplete,
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  // Convert single string to array for consistent handling using useMemo
  const textArray = useMemo(() => {
    return Array.isArray(text) ? text : [text];
  }, [text]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentTextElement = textRef.current;
    
    if (currentTextElement) {
      observer.observe(currentTextElement);
    }

    return () => {
      if (currentTextElement) {
        observer.unobserve(currentTextElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: NodeJS.Timeout;

    const currentText = textArray[textIndex];

    if (isTyping && !isDeleting) {
      if (displayText.length < currentText.length) {
        // Still typing
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing
        setIsTyping(false);
        timeout = setTimeout(() => {
          if (loop || textIndex < textArray.length - 1) {
            setIsDeleting(true);
          } else if (onComplete) {
            onComplete();
          }
        }, delayBeforeDeleting);
      }
    } else if (isDeleting) {
      if (displayText.length > 0) {
        // Still deleting
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting
        setIsDeleting(false);

        // Move to next text or loop back to first
        const nextIndex = (textIndex + 1) % textArray.length;
        setTextIndex(nextIndex);

        // Delay before typing next text
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, delayBeforeTyping);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isTyping,
    isDeleting,
    textIndex,
    textArray,
    typingSpeed,
    deletingSpeed,
    delayBeforeTyping,
    delayBeforeDeleting,
    loop,
    onComplete,
    isVisible,
  ]);

  return (
    <div ref={textRef} className={`inline-block ${className}`}>
      <span>{displayText}</span>
      {cursor && isVisible && (
        <span className="animate-pulse">{cursorStyle}</span>
      )}
    </div>
  );
}
