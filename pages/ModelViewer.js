import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Box, Center } from '@chakra-ui/react'

//generamos el Suelo con los parametros del width y sus poligonos
function generateFloor(w, d) {
  //geometria del plano
  var geo = new THREE.CircleGeometry(w, d)
  //materiales
  var mat = new THREE.MeshBasicMaterial({
    color: 0x669999,
    side: THREE.DoubleSide
  })
  //implementamos la geometria y el material
  var mesh = new THREE.Mesh(geo, mat)

  return mesh
}

const ModelViewer = () => {
  const containerRef = useRef()
  // const modelRotation = useRef(new THREE.Euler(0, 0, 0))
  const scene = new THREE.Scene()

  useEffect(() => {
    window.addEventListener('resize', onWindowResize, false)
    //--------------------------SetUP---------------------------
    //La altura y la anchura del canvas donde se alojara la escena
    const container = containerRef.current
    const widthC = container.clientWidth
    const heightC = container.clientHeight
    //Esta variable nos permite renderizar todo el contenido
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    //Con esto inicializamos la camara
    const camera = new THREE.PerspectiveCamera(50, widthC / heightC, 0.1, 1000)
    //generamos una orbita para la camara
    const orbit = new OrbitControls(camera, renderer.domElement)

    //Este nos permite cargar el modelo GLB
    const loader = new GLTFLoader()
    //Generamos la luz ambiente
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    //Generamos el Suelo
    const floor = generateFloor(3, 50)
    //lo posicionamos en el espacio
    floor.rotation.x = Math.PI / 2
    floor.position.y = -0.8

    function onWindowResize() {
      let container2 = containerRef.current
      renderer.setSize(container2.clientWidth, container2.clientHeight)
    }

    //posicionamos la camara en el espacio
    camera.position.set(4, 2, 3.5)

    renderer.setSize(widthC, heightC)
    renderer.setClearColor(0x000000, 1)

    if (!container.hasChildNodes()) {
      container.appendChild(renderer.domElement)
    }
    //iniciaos la configuracion
    scene.add(floor)
    orbit.update()
    scene.add(ambientLight)

    //------------------------Modelo------------------------
    let model
    //cargamos el modelo 3D del Modelo
    loader.load('/3DModels/bmw_m3_e46.glb', gltf => {
      model = gltf.scene

      // Obtiene el centro del modelo
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())

      // Ajusta la posición del modelo para que esté en el centro de la escena
      model.position.sub(center)
      //lo añadimos en la escena
      scene.add(model)
    })

    //----------------------Animaciones-------------------------
    const animate = () => {
      //Informa al navegador que quieres realizar una animación y
      // solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación.
      requestAnimationFrame(animate)

      // Hace que el modelo gire alrededor de su eje central
      //Modelo
      if (model) {
        model.rotation.y += 0.005
      }
      //suleo
      if (floor) {
        floor.rotation.z -= 0.005
      }
      //lo renderizamos
      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return (
    <Center>
      <Box
        bg={'white'}
        ref={containerRef}
        w={'calc(100% - 100px)'}
        h={'calc(10vh - 90vh)'}
        minH={'calc(90vh - 10vh)'}
      />
    </Center>
  )
}

export default ModelViewer
