/// <reference types="react" />
/// <reference types="react-dom" />

// Global type declarations for Asynova Landing Page

// Asset modules
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

// React Three Fiber JSX namespace extension
import type { Object3DNode } from '@react-three/fiber';
import type * as THREE from 'three';

declare module '@react-three/fiber' {
  interface ThreeElements {
    // Lights
    ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>
    directionalLight: Object3DNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>
    hemisphereLight: Object3DNode<THREE.HemisphereLight, typeof THREE.HemisphereLight>
    pointLight: Object3DNode<THREE.PointLight, typeof THREE.PointLight>
    rectAreaLight: Object3DNode<THREE.RectAreaLight, typeof THREE.RectAreaLight>
    spotLight: Object3DNode<THREE.SpotLight, typeof THREE.SpotLight>

    // Materials
    meshBasicMaterial: Object3DNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>
    meshLambertMaterial: Object3DNode<THREE.MeshLambertMaterial, typeof THREE.MeshLambertMaterial>
    meshMatcapMaterial: Object3DNode<THREE.MeshMatcapMaterial, typeof THREE.MeshMatcapMaterial>
    meshNormalMaterial: Object3DNode<THREE.MeshNormalMaterial, typeof THREE.MeshNormalMaterial>
    meshPhongMaterial: Object3DNode<THREE.MeshPhongMaterial, typeof THREE.MeshPhongMaterial>
    meshPhysicalMaterial: Object3DNode<THREE.MeshPhysicalMaterial, typeof THREE.MeshPhysicalMaterial>
    meshStandardMaterial: Object3DNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>
    meshToonMaterial: Object3DNode<THREE.MeshToonMaterial, typeof THREE.MeshToonMaterial>
    pointsMaterial: Object3DNode<THREE.PointsMaterial, typeof THREE.PointsMaterial>
    lineBasicMaterial: Object3DNode<THREE.LineBasicMaterial, typeof THREE.LineBasicMaterial>
    lineDashedMaterial: Object3DNode<THREE.LineDashedMaterial, typeof THREE.LineDashedMaterial>
    shaderMaterial: Object3DNode<THREE.ShaderMaterial, typeof THREE.ShaderMaterial>
    shadowMaterial: Object3DNode<THREE.ShadowMaterial, typeof THREE.ShadowMaterial>
    spriteMaterial: Object3DNode<THREE.SpriteMaterial, typeof THREE.SpriteMaterial>

    // Geometries
    boxGeometry: Object3DNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
    capsuleGeometry: Object3DNode<THREE.CapsuleGeometry, typeof THREE.CapsuleGeometry>
    circleGeometry: Object3DNode<THREE.CircleGeometry, typeof THREE.CircleGeometry>
    coneGeometry: Object3DNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>
    cylinderGeometry: Object3DNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>
    dodecahedronGeometry: Object3DNode<THREE.DodecahedronGeometry, typeof THREE.DodecahedronGeometry>
    extrudeGeometry: Object3DNode<THREE.ExtrudeGeometry, typeof THREE.ExtrudeGeometry>
    icosahedronGeometry: Object3DNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>
    latheGeometry: Object3DNode<THREE.LatheGeometry, typeof THREE.LatheGeometry>
    octahedronGeometry: Object3DNode<THREE.OctahedronGeometry, typeof THREE.OctahedronGeometry>
    planeGeometry: Object3DNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>
    polyhedronGeometry: Object3DNode<THREE.PolyhedronGeometry, typeof THREE.PolyhedronGeometry>
    ringGeometry: Object3DNode<THREE.RingGeometry, typeof THREE.RingGeometry>
    shapeGeometry: Object3DNode<THREE.ShapeGeometry, typeof THREE.ShapeGeometry>
    sphereGeometry: Object3DNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>
    tetrahedronGeometry: Object3DNode<THREE.TetrahedronGeometry, typeof THREE.TetrahedronGeometry>
    torusGeometry: Object3DNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>
    torusKnotGeometry: Object3DNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>
    tubeGeometry: Object3DNode<THREE.TubeGeometry, typeof THREE.TubeGeometry>

    // Objects
    mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>
    instancedMesh: Object3DNode<THREE.InstancedMesh, typeof THREE.InstancedMesh>
    line: Object3DNode<THREE.Line, typeof THREE.Line>
    lineLoop: Object3DNode<THREE.LineLoop, typeof THREE.LineLoop>
    lineSegments: Object3DNode<THREE.LineSegments, typeof THREE.LineSegments>
    points: Object3DNode<THREE.Points, typeof THREE.Points>
    sprite: Object3DNode<THREE.Sprite, typeof THREE.Sprite>
    group: Object3DNode<THREE.Group, typeof THREE.Group>

    // Cameras
    perspectiveCamera: Object3DNode<THREE.PerspectiveCamera, typeof THREE.PerspectiveCamera>
    orthographicCamera: Object3DNode<THREE.OrthographicCamera, typeof THREE.OrthographicCamera>

    // Misc
    fog: Object3DNode<THREE.Fog, typeof THREE.Fog>
    fogExp2: Object3DNode<THREE.FogExp2, typeof THREE.FogExp2>
    
    // Helpers (when needed)
    axesHelper: Object3DNode<THREE.AxesHelper, typeof THREE.AxesHelper>
    boxHelper: Object3DNode<THREE.BoxHelper, typeof THREE.BoxHelper>
    box3Helper: Object3DNode<THREE.Box3Helper, typeof THREE.Box3Helper>
    cameraHelper: Object3DNode<THREE.CameraHelper, typeof THREE.CameraHelper>
    directionalLightHelper: Object3DNode<THREE.DirectionalLightHelper, typeof THREE.DirectionalLightHelper>
    gridHelper: Object3DNode<THREE.GridHelper, typeof THREE.GridHelper>
    polarGridHelper: Object3DNode<THREE.PolarGridHelper, typeof THREE.PolarGridHelper>
    hemisphereeLightHelper: Object3DNode<THREE.HemisphereLightHelper, typeof THREE.HemisphereLightHelper>
    pointLightHelper: Object3DNode<THREE.PointLightHelper, typeof THREE.PointLightHelper>
    skeletonHelper: Object3DNode<THREE.SkeletonHelper, typeof THREE.SkeletonHelper>
    spotLightHelper: Object3DNode<THREE.SpotLightHelper, typeof THREE.SpotLightHelper>
    
    // Effects
    effectComposer: Object3DNode<any, any>
    renderPass: Object3DNode<any, any>
    unrealBloomPass: Object3DNode<any, any>
  }
}

// Extend global JSX namespace
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
  
  // Window extensions for performance
  interface Window {
    webkitRequestAnimationFrame?: (callback: FrameRequestCallback) => number;
    mozRequestAnimationFrame?: (callback: FrameRequestCallback) => number;
  }
}

// Three.js event types
export interface ThreeEvent<T> extends Event {
  object: THREE.Object3D;
  eventObject: THREE.Object3D;
  intersections: THREE.Intersection[];
  ray: THREE.Ray;
  camera: THREE.Camera;
  delta: number;
  stopPropagation: () => void;
  nativeEvent: T;
}

export {};
