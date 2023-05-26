import { Box, Button, Link, Text } from '@chakra-ui/react'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function ModelViewer() {
  return (
    <Box w={'100%'}>
      <Link
        id="hola"
        href="intent://arvr.google.com/scene-viewer/1.0?mode=ar_preferred&disable_occlusion=true&file=http%3A%2F%2F172.17.40.175%3A3000%2F3DModels%2Ftoyota_gt_apex_trueno_ae86_stock_jdm.glb#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=http%3A%2F%2F172.17.40.175%3A3000%2FModelViewer%23model-viewer-no-ar-fallback;end;"
        isExternal
      >
        asdasdasd
      </Link>
      <model-viewer
        style={{ height: '500px', width: '100%' }}
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="/3DModels/m3_white.glb"
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        auto-rotate
        poster="poster.webp"
        shadow-intensity="1"
        exposure="1"
        environment-image="/3DModels/spruit_sunrise_1k_HDR.hdr"
      ></model-viewer>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js"
      />
    </Box>
  )
}
