'use client';
import { useEffect, useRef, useState } from 'react';

export default function EnergyMonitor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentVal, setCurrentVal] = useState(142);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const width = canvas.width;
    const height = canvas.height;
    
    // Y ekseni değer geçmişi (0-100 arası normalize)
    const history = new Array(width).fill(20);
    
    // Temel yük ve rastgele dalgalanmalar (Render simülasyonu)
    let currentLoad = 45;
    let frameCount = 0;

    const draw = () => {
      frameCount++;
      
      // Saniyede ~10 kez değeri güncelle ki çok hızlı titremesin
      if (frameCount % 6 === 0) {
        currentLoad += (Math.random() - 0.5) * 8;
        if (currentLoad < 30) currentLoad = 30 + Math.random() * 5;
        if (currentLoad > 70) currentLoad = 70 - Math.random() * 5;
        
        // Ara sıra render "spike" (ani yükseliş) simüle et
        if (Math.random() > 0.95) currentLoad += 20;

        setCurrentVal(Math.floor(currentLoad * 3.2)); // Göstermelik Watt değeri
      }

      // Geçmişe ekle ve kaydır
      history.push(currentLoad);
      history.shift();

      // Arka planı temizle
      ctx.fillStyle = '#0a192f'; // Koyu mavi/lacivert arka plan
      ctx.fillRect(0, 0, width, height);

      // Grafiği çiz
      ctx.fillStyle = '#64ffda'; // Fosforlu yeşil/cyan (Ekran görüntüsündeki gibi)
      
      for (let i = 0; i < width; i++) {
        const val = history[i];
        const barHeight = (val / 100) * height;
        // i x ekseni, height-barHeight y ekseni
        ctx.fillRect(i, height - barHeight, 1, barHeight);
      }

      // Üst kısmı hafif şeffaf yeşil çizgiyle belirginleştir
      ctx.fillStyle = 'rgba(100, 255, 218, 0.4)';
      for (let i = 0; i < width; i++) {
        const val = history[i];
        const barHeight = (val / 100) * height;
        ctx.fillRect(i, height - barHeight, 1, 1);
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="flex items-center gap-3 bg-[#0a0a0a] border border-gray-800 p-2 rounded max-w-fit" title="Real-time resource cost for generating a 30s AI Reel">
      <div className="flex flex-col w-[110px]">
        <span className="text-[#64ffda] text-[10px] font-mono tracking-wider font-bold">
          {currentVal} W (AVG)
        </span>
        <span className="text-gray-500 text-[8px] uppercase tracking-widest leading-tight mt-0.5">
          Est. Resource Cost<br/>1x 30s Reel
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
