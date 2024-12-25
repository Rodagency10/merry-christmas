import React from 'react';

interface ParallaxLayerProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function ParallaxLayer({ className = '', style = {}, children }: ParallaxLayerProps) {
  return (
    <div className={`fixed ${className}`} style={style}>
      {children}
    </div>
  );
}