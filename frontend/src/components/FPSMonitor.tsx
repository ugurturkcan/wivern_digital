'use client';
import { useEffect, useRef, useState } from 'react';

export default function FPSMonitor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const width = canvas.width;
    const height = canvas.height;
    
    // FPS geçmişi (başlangıçta 60 kabul edelim)
    const history = new Array(width).fill(60);
    
    let frames = 0;
    let prevTime = performance.now();

    const draw = () => {
      const time = performance.now();
      frames++;

      // Her 100ms'de bir grafiği güncelle ki daha akıcı aksın
      if (time >= prevTime + 100) {
        const currentFps = Math.round((frames * 1000) / (time - prevTime));
        
        // Ekrana yansıyacak sayıyı sadece mantıklıysa (0-120 arası) güncelle
        const displayFps = Math.min(Math.max(currentFps, 0), 120);
        setFps(displayFps);
        
        frames = 0;
        prevTime = time;

        // Geçmişe ekle ve kaydır
        history.push(displayFps);
        history.shift();

        // Arka planı temizle
        ctx.fillStyle = '#0a192f'; // Energy monitor ile aynı renk
        ctx.fillRect(0, 0, width, height);

        // Grafiği çiz (Sarı / Gold renk Wivern teması için)
        ctx.fillStyle = '#c5a059'; 
        
        for (let i = 0; i < width; i++) {
          const val = history[i];
          // 60 FPS'i %100 yükseklik olarak alalım
          let barHeight = (val / 60) * height;
          if (barHeight > height) barHeight = height; // 60'ı geçerse taşmasın
          
          ctx.fillRect(i, height - barHeight, 1, barHeight);
        }

        // Üst kısmı şeffaf çizgi
        ctx.fillStyle = 'rgba(197, 160, 89, 0.5)';
        for (let i = 0; i < width; i++) {
          const val = history[i];
          let barHeight = (val / 60) * height;
          if (barHeight > height) barHeight = height;
          ctx.fillRect(i, height - barHeight, 1, 1);
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="flex items-center gap-3 bg-[#0a0a0a] border border-gray-800 p-2 rounded max-w-fit" title="Real-time Client Render Performance">
      <div className="flex flex-col w-[110px]">
        <span className="text-[#c5a059] text-[10px] font-mono tracking-wider font-bold">
          {fps} FPS (NOW)
        </span>
        <span className="text-gray-500 text-[8px] uppercase tracking-widest leading-tight mt-0.5">
          Client Render<br/>Performance
        </span>
      </div>
      <canvas 
        ref={canvasRef} 
        width={70} 
        height={32} 
        className="rounded-sm border border-gray-800/50"
      />
    </div>
  );
}
