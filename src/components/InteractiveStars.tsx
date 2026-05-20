import { useEffect, useRef } from 'react';

export default function InteractiveStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Factor de perspectiva
    const focalLength = 300;

    // 1. Estrellas en el espacio (universo de partículas 3D)
    const particleCount = 150;
    interface Star {
      x: number;
      y: number;
      z: number;
      ox: number; 
      oy: number;
      oz: number;
      color: string;
      size: number;
    }
    const stars: Star[] = [];

    for (let i = 0; i < particleCount; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        z: Math.random() * 2000,
        ox: 0,
        oy: 0,
        oz: 0,
        color: i % 2 === 0 ? 'rgba(0, 255, 245, 0.45)' : 'rgba(0, 212, 255, 0.35)',
        size: Math.random() * 1.5 + 0.5
      });
      stars[i].ox = stars[i].x;
      stars[i].oy = stars[i].y;
      stars[i].oz = stars[i].z;
    }

    // 2. Toroide Wireframe 3D matemático
    interface Vector3 {
      x: number;
      y: number;
      z: number;
    }
    const torusPoints: Vector3[] = [];
    const torusR1 = 120; // Radio mayor
    const torusR2 = 40;  // Radio menor
    const segmentsMajor = 40;
    const segmentsMinor = 15;

    for (let i = 0; i < segmentsMajor; i++) {
      const theta = (i / segmentsMajor) * Math.PI * 2;
      for (let j = 0; j < segmentsMinor; j++) {
        const phi = (j / segmentsMinor) * Math.PI * 2;
        // Ecuaciones de un toroide
        const x = (torusR1 + torusR2 * Math.cos(phi)) * Math.cos(theta);
        const y = (torusR1 + torusR2 * Math.cos(phi)) * Math.sin(theta);
        const z = torusR2 * Math.sin(phi);
        torusPoints.push({ x, y, z });
      }
    }

    // Posición del mouse y rotación inercial
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;
    let currentRotY = 0;
    let currentRotX = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      targetRotY = mouseX * 0.5;
      targetRotX = mouseY * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Ajustar tamaño del canvas
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(document.body);

    // Generar la rotación del punto 3D
    const rotateX = (point: Vector3, angle: number): Vector3 => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: point.x,
        y: point.y * cos - point.z * sin,
        z: point.y * sin + point.z * cos,
      };
    };

    const rotateY = (point: Vector3, angle: number): Vector3 => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: point.x * cos + point.z * sin,
        y: point.y,
        z: -point.x * sin + point.z * cos,
      };
    };

    const rotateZ = (point: Vector3, angle: number): Vector3 => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: point.x * cos - point.y * sin,
        y: point.x * sin + point.y * cos,
        z: point.z,
      };
    };

    let time = 0;

    // Render loop
    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      // Fondo degradado sutil
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, '#0c0c16');
      bgGrad.addColorStop(0.5, '#05050a');
      bgGrad.addColorStop(1, '#000000');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      time += 0.005;

      // Suavizado Lerp para la respuesta del mouse
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      // --- RENDERING ESTRELLAS ESPACIALES ---
      stars.forEach((star) => {
        // Rotar levemente con el mouse
        let pt = { x: star.ox, y: star.oy, z: star.oz };
        // Rotación constante automática lenta
        pt = rotateY(pt, time * 0.15);
        pt = rotateX(pt, time * 0.1);
        
        // Efecto mouse inercial
        pt = rotateY(pt, currentRotY * 0.8);
        pt = rotateX(pt, currentRotX * 0.8);

        // Trasladar en Z (eje de profundidad)
        const screenZ = pt.z + 1000;
        if (screenZ > 10) {
          const scale = focalLength / screenZ;
          const projX = width / 2 + pt.x * scale;
          const projY = height / 2 + pt.y * scale;

          // Dibujar si está en los límites de la pantalla
          if (projX >= 0 && projX <= width && projY >= 0 && projY <= height) {
            const size = star.size * scale * 2.5;
            ctx.fillStyle = star.color;
            ctx.beginPath();
            ctx.arc(projX, projY, size < 0.1 ? 0.1 : size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // --- RENDERING TOROIDE 3D WIREFRAME ---
      ctx.strokeStyle = 'rgba(0, 255, 245, 0.09)'; // Color cyber de baja opacidad para no comprometer el viewport
      ctx.lineWidth = 0.5;

      // Dibujar líneas del toroide
      // Para optimizar performance, dibujaremos subsegmentos
      const step = 1;
      
      // Rotación global del toroide basándose en el tiempo y el cursor
      const tRotX = time * 0.45 + currentRotX * 1.5;
      const tRotY = time * 0.55 + currentRotY * 1.5;
      const tRotZ = time * 0.2;

      // Guardamos posiciones transformadas de los puntos del toro para conectar líneas fácilmente
      const projectedTorus: { x: number; y: number; z: number }[] = [];

      for (let i = 0; i < torusPoints.length; i++) {
        let p = torusPoints[i];
        // Rotar en el espacio 3D
        p = rotateX(p, tRotX);
        p = rotateY(p, tRotY);
        p = rotateZ(p, tRotZ);

        // Desplazar torus al fondo en Z o colocar al centro-derecha del escritorio
        // Para que se vea genial, lo desplazamos un poco a la derecha en pantallas grandes
        const isDesktop = width > 768;
        const xOffset = isDesktop ? width * 0.15 : 0;
        
        const tz = p.z + 800;
        const scale = focalLength / tz;
        const tx = width / 2 + xOffset + p.x * scale * 1.5;
        const ty = height / 2 + p.y * scale * 1.5;

        projectedTorus.push({ x: tx, y: ty, z: p.z });
      }

      // Dibujar anillos del toroide
      for (let i = 0; i < segmentsMajor; i += step) {
        ctx.beginPath();
        for (let j = 0; j < segmentsMinor; j++) {
          const idx = i * segmentsMinor + j;
          const nextIdx = i * segmentsMinor + ((j + 1) % segmentsMinor);
          const p1 = projectedTorus[idx];
          const p2 = projectedTorus[nextIdx];

          if (j === 0) {
            ctx.moveTo(p1.x, p1.y);
          } else {
            ctx.lineTo(p1.x, p1.y);
          }
          ctx.lineTo(p2.x, p2.y);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // Dibujar conexiones entre anillos transversales
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.06)';
      for (let j = 0; j < segmentsMinor; j += step) {
        ctx.beginPath();
        for (let i = 0; i < segmentsMajor; i++) {
          const idx1 = i * segmentsMinor + j;
          const idx2 = ((i + 1) % segmentsMajor) * segmentsMinor + j;
          const p1 = projectedTorus[idx1];
          const p2 = projectedTorus[idx2];

          if (i === 0) {
            ctx.moveTo(p1.x, p1.y);
          } else {
            ctx.lineTo(p1.x, p1.y);
          }
          ctx.lineTo(p2.x, p2.y);
        }
        ctx.closePath();
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas-bg"
      className="fixed inset-0 w-full h-full pointer-events-none block z-0"
      aria-hidden="true"
    />
  );
}
