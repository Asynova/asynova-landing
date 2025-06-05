/// <reference types="react-scripts" />

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.json' {
  const value: any;
  export default value;
}

// Extend window object for custom properties
interface Window {
  gtag?: (...args: any[]) => void;
  fs?: {
    readFile: (path: string, options?: { encoding?: string }) => Promise<Uint8Array | string>;
  };
}

// Three.js custom types
declare module '@react-three/fiber' {
  interface ThreeElements {
    orbitControls: any;
    meshDistortMaterial: any;
  }
}

// Custom event types
interface QuantumEvent extends CustomEvent {
  detail: {
    quantum: boolean;
    timestamp: number;
    value?: any;
  };
}

// Global quantum state
interface QuantumState {
  isQuantum: boolean;
  particleCount: number;
  animationSpeed: number;
}

// Component prop types
interface QuantumComponentProps {
  quantum?: boolean;
  intensity?: number;
  particles?: boolean;
}
