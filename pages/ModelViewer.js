import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { roadTexture } from '/public/textures/sun.jpg'

function generateFloor(w, d) {
  var geo = new THREE.CircleGeometry(w, d)
  var mat = new THREE.MeshBasicMaterial({
    color: 0x669999,
    side: THREE.DoubleSide
  })
  var mesh = new THREE.Mesh(geo, mat)

  return mesh
}

const ModelViewer = () => {
  const containerRef = useRef()
  // const modelRotation = useRef(new THREE.Euler(0, 0, 0))

  useEffect(() => {
    const scene = new THREE.Scene()
    const container = containerRef.current
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    const orbit = new OrbitControls(camera, renderer.domElement)

    camera.position.set(4, 2, 3.5)
    var floor = generateFloor(3, 50)
    floor.rotation.x = Math.PI / 2
    floor.position.y = -0.8
    scene.add(floor)

    orbit.update()

    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x000000, 1)

    if (!container.hasChildNodes()) {
      container.appendChild(renderer.domElement)
    }

    const loader = new GLTFLoader()

    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)

    let model

    loader.load('/3DModels/toyota_gt_apex_trueno_ae86_stock_jdm.glb', gltf => {
      model = gltf.scene

      // Obtiene el centro del modelo
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())

      // Ajusta la posición del modelo para que esté en el centro de la escena
      model.position.sub(center)

      scene.add(model)
    })

    const animate = () => {
      requestAnimationFrame(animate)

      // Hace que el modelo gire alrededor de su eje central
      if (model) {
        model.rotation.y += 0.005
      }
      if (floor) {
        floor.rotation.z -= 0.005
      }

      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return <div ref={containerRef} style={{ width: '800px', height: '500px' }} />
}

export default ModelViewer
