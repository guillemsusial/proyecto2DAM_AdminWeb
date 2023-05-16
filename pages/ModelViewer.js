import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = () => {
  const containerRef = useRef();
  const modelRotation = useRef(new THREE.Euler(0, 0, 0));

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    const loader = new GLTFLoader();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    let model;

    loader.load('/3DModels/toyota_gt_apex_trueno_ae86_stock_jdm.glb', (gltf) => {
      model = gltf.scene;

      // Obtiene el centro del modelo
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());

      // Ajusta la posición del modelo para que esté en el centro de la escena
      model.position.sub(center);

      scene.add(model);
    });

    const animate = () => {
      requestAnimationFrame(animate);

      // Hace que el modelo gire alrededor de su eje central
      if (model) {
        model.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={containerRef} style={{ width: '800px', height: '500px' }} />;
};

export default ModelViewer;
