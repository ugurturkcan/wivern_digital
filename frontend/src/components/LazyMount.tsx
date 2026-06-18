'use client';

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

interface LazyMountProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  margin?: string;
}

/**
 * LazyMount defers the rendering of its children until it intersects with the viewport.
 * This is crucial for delaying heavy client-side chunks (like Three.js) until needed.
 */
export default function LazyMount({ 
  children, 
  fallback = <div className="w-full h-full min-h-[480px] bg-[#080808] flex items-center justify-center"><div className="w-8 h-8 border-2 border-yellow-900/40 border-t-yellow-500 rounded-full animate-spin" /></div>,
  margin = '200px' 
}: LazyMountProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: margin as any });

  return (
    <div ref={containerRef} className="w-full h-full">
      {isInView ? children : fallback}
    </div>
  );
}
