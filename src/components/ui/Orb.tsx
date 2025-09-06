import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Vec3 } from "ogl";

import '../../styles/Orb.css';

interface OrbProps {
  hue?: number;
  hoverIntensity?: number;
  rotateOnHover?: boolean;
  forceHoverState?: boolean;
}

export function Orb({
  hue = 0,
  hoverIntensity = 0.2,
  rotateOnHover = true,
  forceHoverState = false,
}: OrbProps) {
  const ctnDom = useRef<HTMLDivElement>(null);

  const vert = `precision highp float;
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }`;

  const frag = `precision highp float;
  uniform float iTime;
  uniform vec3 iResolution;
  uniform float hue;
  uniform float hover;
  uniform float rot;
  uniform float hoverIntensity;
  
  varying vec2 vUv;
  
  #define PI 3.14159265359
  
  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }
  
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    return value;
  }
  
  void main() {
    vec2 uv = vUv;
    vec2 center = vec2(0.5);
    vec2 p = uv - center;
    
    // Rotate the coordinates
    float angle = rot;
    mat2 rotMat = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    p = rotMat * p;
    
    // Create orb shape
    float dist = length(p);
    float orb = smoothstep(0.5, 0.3, dist);
    
    // Add noise and animation
    vec2 noiseCoord = p * 3.0 + iTime * 0.5;
    float noiseVal = fbm(noiseCoord);
    
    // Add hover effect
    float hoverEffect = hover * hoverIntensity;
    orb += hoverEffect * smoothstep(0.6, 0.4, dist) * noiseVal;
    
    // Create color based on hue
    vec3 color = hsv2rgb(vec3(hue / 360.0, 0.8, 0.9));
    
    // Add some variation based on noise
    color += noiseVal * 0.2;
    
    // Apply orb mask
    color *= orb;
    
    // Add glow effect
    float glow = smoothstep(0.6, 0.2, dist) * 0.3;
    color += glow * hsv2rgb(vec3((hue + 30.0) / 360.0, 0.6, 0.8));
    
    gl_FragColor = vec4(color, orb);
  }`;

  useEffect(() => {
    const container = ctnDom.current;
    if (!container) {
      console.log('Orb: Container not found');
      return;
    }

    console.log('Orb: Initializing WebGL renderer');
    
    // Check if WebGL is available
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.error('Orb: WebGL not supported in this browser');
      container.innerHTML = '<div style="background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); width: 100%; height: 100%; border-radius: 50%; opacity: 0.3;"></div>';
      return;
    }
    
    try {
      const renderer = new Renderer({ alpha: true, premultipliedAlpha: false });
      const gl = renderer.gl;
      
      if (!gl) {
        console.error('Orb: WebGL context not available');
        return;
      }
      
      console.log('Orb: WebGL context created successfully');
      
      gl.clearColor(0, 0, 0, 0);
      container.appendChild(gl.canvas);

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: vert,
        fragment: frag,
        uniforms: {
          iTime: { value: 0 },
          iResolution: {
            value: new Vec3(
              gl.canvas.width,
              gl.canvas.height,
              gl.canvas.width / gl.canvas.height
            ),
          },
          hue: { value: hue },
          hover: { value: 0 },
          rot: { value: 0 },
          hoverIntensity: { value: hoverIntensity },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });
      console.log('Orb: Mesh and program created successfully');

      function resize() {
        if (!container) return;
        const dpr = window.devicePixelRatio || 1;
        const width = container.clientWidth;
        const height = container.clientHeight;
        console.log('Orb: Resizing to', width, 'x', height);
        renderer.setSize(width * dpr, height * dpr);
        gl.canvas.style.width = width + "px";
        gl.canvas.style.height = height + "px";
        program.uniforms.iResolution.value.set(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
      window.addEventListener("resize", resize);
      resize();

      let targetHover = 0;
      let lastTime = 0;
      let currentRot = 0;
      const rotationSpeed = 0.3;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const width = rect.width;
        const height = rect.height;
        const size = Math.min(width, height);
        const centerX = width / 2;
        const centerY = height / 2;
        const uvX = ((x - centerX) / size) * 2.0;
        const uvY = ((y - centerY) / size) * 2.0;

        if (Math.sqrt(uvX * uvX + uvY * uvY) < 0.8) {
          targetHover = 1;
        } else {
          targetHover = 0;
        }
      };

      const handleMouseLeave = () => {
        targetHover = 0;
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      let rafId: number;
      let frameCount = 0;
      const update = (t: number) => {
        rafId = requestAnimationFrame(update);
        frameCount++;
        if (frameCount % 60 === 0) {
          console.log('Orb: Rendering frame', frameCount, 'at time', t);
        }
        
        const dt = (t - lastTime) * 0.001;
        lastTime = t;
        program.uniforms.iTime.value = t * 0.001;
        program.uniforms.hue.value = hue;
        program.uniforms.hoverIntensity.value = hoverIntensity;

        const effectiveHover = forceHoverState ? 1 : targetHover;
        program.uniforms.hover.value +=
          (effectiveHover - program.uniforms.hover.value) * 0.1;

        if (rotateOnHover && effectiveHover > 0.5) {
          currentRot += dt * rotationSpeed;
        }
        program.uniforms.rot.value = currentRot;

        renderer.render({ scene: mesh });
      };
      rafId = requestAnimationFrame(update);
      console.log('Orb: Animation loop started');

      return () => {
        console.log('Orb: Cleaning up');
        cancelAnimationFrame(rafId);
        window.removeEventListener("resize", resize);
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
        if (gl.canvas && container.contains(gl.canvas)) {
          container.removeChild(gl.canvas);
        }
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    } catch (error) {
      console.error('Orb: Error initializing WebGL:', error);
      // Fallback to CSS-based orb
      container.innerHTML = '<div style="background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); width: 100%; height: 100%; border-radius: 50%; opacity: 0.3; animation: pulse 2s ease-in-out infinite;"></div>';
    }
  }, [hue, hoverIntensity, rotateOnHover, forceHoverState]);

  return <div ref={ctnDom} className="orb-container" />;
}

export default Orb;