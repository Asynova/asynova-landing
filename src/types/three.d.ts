/**
 * Three.js and React Three Fiber Type Definitions
 * Ensures proper TypeScript support for all Three.js elements
 */

import { ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';

// Extend the ReactThreeFiber namespace
declare module '@react-three/fiber' {
  interface ThreeElements {
    // Core
    object3D: ReactThreeFiber.Object3DNode<THREE.Object3D, typeof THREE.Object3D>;
    
    // Scenes
    scene: ReactThreeFiber.Object3DNode<THREE.Scene, typeof THREE.Scene>;
    
    // Groups
    group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>;
    
    // Meshes
    mesh: ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
    instancedMesh: ReactThreeFiber.Object3DNode<THREE.InstancedMesh, typeof THREE.InstancedMesh>;
    
    // Lines
    line: ReactThreeFiber.Object3DNode<THREE.Line, typeof THREE.Line>;
    lineLoop: ReactThreeFiber.Object3DNode<THREE.LineLoop, typeof THREE.LineLoop>;
    lineSegments: ReactThreeFiber.Object3DNode<THREE.LineSegments, typeof THREE.LineSegments>;
    
    // Points
    points: ReactThreeFiber.Object3DNode<THREE.Points, typeof THREE.Points>;
    
    // Sprite
    sprite: ReactThreeFiber.Object3DNode<THREE.Sprite, typeof THREE.Sprite>;
    
    // Cameras
    camera: ReactThreeFiber.Object3DNode<THREE.Camera, typeof THREE.Camera>;
    perspectiveCamera: ReactThreeFiber.Object3DNode<THREE.PerspectiveCamera, typeof THREE.PerspectiveCamera>;
    orthographicCamera: ReactThreeFiber.Object3DNode<THREE.OrthographicCamera, typeof THREE.OrthographicCamera>;
    cubeCamera: ReactThreeFiber.Object3DNode<THREE.CubeCamera, typeof THREE.CubeCamera>;
    
    // Lights
    light: ReactThreeFiber.Object3DNode<THREE.Light, typeof THREE.Light>;
    ambientLight: ReactThreeFiber.Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
    directionalLight: ReactThreeFiber.Object3DNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>;
    hemisphereLight: ReactThreeFiber.Object3DNode<THREE.HemisphereLight, typeof THREE.HemisphereLight>;
    pointLight: ReactThreeFiber.Object3DNode<THREE.PointLight, typeof THREE.PointLight>;
    rectAreaLight: ReactThreeFiber.Object3DNode<THREE.RectAreaLight, typeof THREE.RectAreaLight>;
    spotLight: ReactThreeFiber.Object3DNode<THREE.SpotLight, typeof THREE.SpotLight>;
    
    // Geometries
    bufferGeometry: ReactThreeFiber.BufferGeometryNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>;
    boxGeometry: ReactThreeFiber.BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>;
    circleGeometry: ReactThreeFiber.BufferGeometryNode<THREE.CircleGeometry, typeof THREE.CircleGeometry>;
    coneGeometry: ReactThreeFiber.BufferGeometryNode<THREE.ConeGeometry, typeof THREE.ConeGeometry>;
    cylinderGeometry: ReactThreeFiber.BufferGeometryNode<THREE.CylinderGeometry, typeof THREE.CylinderGeometry>;
    dodecahedronGeometry: ReactThreeFiber.BufferGeometryNode<THREE.DodecahedronGeometry, typeof THREE.DodecahedronGeometry>;
    edgesGeometry: ReactThreeFiber.BufferGeometryNode<THREE.EdgesGeometry, typeof THREE.EdgesGeometry>;
    extrudeGeometry: ReactThreeFiber.BufferGeometryNode<THREE.ExtrudeGeometry, typeof THREE.ExtrudeGeometry>;
    icosahedronGeometry: ReactThreeFiber.BufferGeometryNode<THREE.IcosahedronGeometry, typeof THREE.IcosahedronGeometry>;
    latheGeometry: ReactThreeFiber.BufferGeometryNode<THREE.LatheGeometry, typeof THREE.LatheGeometry>;
    octahedronGeometry: ReactThreeFiber.BufferGeometryNode<THREE.OctahedronGeometry, typeof THREE.OctahedronGeometry>;
    parametricGeometry: ReactThreeFiber.BufferGeometryNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>;
    planeGeometry: ReactThreeFiber.BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>;
    polyhedronGeometry: ReactThreeFiber.BufferGeometryNode<THREE.PolyhedronGeometry, typeof THREE.PolyhedronGeometry>;
    ringGeometry: ReactThreeFiber.BufferGeometryNode<THREE.RingGeometry, typeof THREE.RingGeometry>;
    shapeGeometry: ReactThreeFiber.BufferGeometryNode<THREE.ShapeGeometry, typeof THREE.ShapeGeometry>;
    sphereGeometry: ReactThreeFiber.BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>;
    tetrahedronGeometry: ReactThreeFiber.BufferGeometryNode<THREE.TetrahedronGeometry, typeof THREE.TetrahedronGeometry>;
    textGeometry: ReactThreeFiber.BufferGeometryNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>;
    torusGeometry: ReactThreeFiber.BufferGeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>;
    torusKnotGeometry: ReactThreeFiber.BufferGeometryNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>;
    tubeGeometry: ReactThreeFiber.BufferGeometryNode<THREE.TubeGeometry, typeof THREE.TubeGeometry>;
    wireframeGeometry: ReactThreeFiber.BufferGeometryNode<THREE.WireframeGeometry, typeof THREE.WireframeGeometry>;
    
    // Materials
    material: ReactThreeFiber.MaterialNode<THREE.Material, typeof THREE.Material>;
    shadowMaterial: ReactThreeFiber.MaterialNode<THREE.ShadowMaterial, typeof THREE.ShadowMaterial>;
    spriteMaterial: ReactThreeFiber.MaterialNode<THREE.SpriteMaterial, typeof THREE.SpriteMaterial>;
    rawShaderMaterial: ReactThreeFiber.MaterialNode<THREE.RawShaderMaterial, typeof THREE.RawShaderMaterial>;
    shaderMaterial: ReactThreeFiber.MaterialNode<THREE.ShaderMaterial, typeof THREE.ShaderMaterial>;
    pointsMaterial: ReactThreeFiber.MaterialNode<THREE.PointsMaterial, typeof THREE.PointsMaterial>;
    meshPhysicalMaterial: ReactThreeFiber.MaterialNode<THREE.MeshPhysicalMaterial, typeof THREE.MeshPhysicalMaterial>;
    meshStandardMaterial: ReactThreeFiber.MaterialNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>;
    meshPhongMaterial: ReactThreeFiber.MaterialNode<THREE.MeshPhongMaterial, typeof THREE.MeshPhongMaterial>;
    meshToonMaterial: ReactThreeFiber.MaterialNode<THREE.MeshToonMaterial, typeof THREE.MeshToonMaterial>;
    meshNormalMaterial: ReactThreeFiber.MaterialNode<THREE.MeshNormalMaterial, typeof THREE.MeshNormalMaterial>;
    meshLambertMaterial: ReactThreeFiber.MaterialNode<THREE.MeshLambertMaterial, typeof THREE.MeshLambertMaterial>;
    meshDepthMaterial: ReactThreeFiber.MaterialNode<THREE.MeshDepthMaterial, typeof THREE.MeshDepthMaterial>;
    meshDistanceMaterial: ReactThreeFiber.MaterialNode<THREE.MeshDistanceMaterial, typeof THREE.MeshDistanceMaterial>;
    meshBasicMaterial: ReactThreeFiber.MaterialNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>;
    meshMatcapMaterial: ReactThreeFiber.MaterialNode<THREE.MeshMatcapMaterial, typeof THREE.MeshMatcapMaterial>;
    lineDashedMaterial: ReactThreeFiber.MaterialNode<THREE.LineDashedMaterial, typeof THREE.LineDashedMaterial>;
    lineBasicMaterial: ReactThreeFiber.MaterialNode<THREE.LineBasicMaterial, typeof THREE.LineBasicMaterial>;
    
    // Textures
    texture: ReactThreeFiber.TextureNode<THREE.Texture, typeof THREE.Texture>;
    videoTexture: ReactThreeFiber.TextureNode<THREE.VideoTexture, typeof THREE.VideoTexture>;
    dataTexture: ReactThreeFiber.TextureNode<THREE.DataTexture, typeof THREE.DataTexture>;
    dataTexture3D: ReactThreeFiber.TextureNode<THREE.DataTexture3D, typeof THREE.DataTexture3D>;
    compressedTexture: ReactThreeFiber.TextureNode<THREE.CompressedTexture, typeof THREE.CompressedTexture>;
    cubeTexture: ReactThreeFiber.TextureNode<THREE.CubeTexture, typeof THREE.CubeTexture>;
    canvasTexture: ReactThreeFiber.TextureNode<THREE.CanvasTexture, typeof THREE.CanvasTexture>;
    depthTexture: ReactThreeFiber.TextureNode<THREE.DepthTexture, typeof THREE.DepthTexture>;
    
    // Fog
    fog: ReactThreeFiber.FogNode<THREE.Fog, typeof THREE.Fog>;
    fogExp2: ReactThreeFiber.FogExp2Node<THREE.FogExp2, typeof THREE.FogExp2>;
    
    // Helpers
    arrowHelper: ReactThreeFiber.Object3DNode<THREE.ArrowHelper, typeof THREE.ArrowHelper>;
    axesHelper: ReactThreeFiber.Object3DNode<THREE.AxesHelper, typeof THREE.AxesHelper>;
    boxHelper: ReactThreeFiber.Object3DNode<THREE.BoxHelper, typeof THREE.BoxHelper>;
    box3Helper: ReactThreeFiber.Object3DNode<THREE.Box3Helper, typeof THREE.Box3Helper>;
    cameraHelper: ReactThreeFiber.Object3DNode<THREE.CameraHelper, typeof THREE.CameraHelper>;
    directionalLightHelper: ReactThreeFiber.Object3DNode<THREE.DirectionalLightHelper, typeof THREE.DirectionalLightHelper>;
    gridHelper: ReactThreeFiber.Object3DNode<THREE.GridHelper, typeof THREE.GridHelper>;
    polarGridHelper: ReactThreeFiber.Object3DNode<THREE.PolarGridHelper, typeof THREE.PolarGridHelper>;
    hemisphereLightHelper: ReactThreeFiber.Object3DNode<THREE.HemisphereLightHelper, typeof THREE.HemisphereLightHelper>;
    planeHelper: ReactThreeFiber.Object3DNode<THREE.PlaneHelper, typeof THREE.PlaneHelper>;
    pointLightHelper: ReactThreeFiber.Object3DNode<THREE.PointLightHelper, typeof THREE.PointLightHelper>;
    skeletonHelper: ReactThreeFiber.Object3DNode<THREE.SkeletonHelper, typeof THREE.SkeletonHelper>;
    spotLightHelper: ReactThreeFiber.Object3DNode<THREE.SpotLightHelper, typeof THREE.SpotLightHelper>;
    
    // Primitives
    primitive: ReactThreeFiber.PrimitiveNode;
  }
}

// Extend JSX namespace
declare global {
  namespace JSX {
    interface IntrinsicElements extends ReactThreeFiber.ThreeElements {}
  }
}

export {};
