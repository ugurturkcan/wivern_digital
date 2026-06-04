import InteractiveModelViewer, { Hotspot } from '@/components/InteractiveModelViewer';
import Link from 'next/link';

// ─── Demo Hotspot Data ───
const DEMO_HOTSPOTS: Hotspot[] = [
  {
    id: 'enchantress_visage',
    position: [0.0, 0.65, 0.1],
    label: 'Visage',
    title: 'Gothic Enchantress Visage',
    content: `Primary Generation Prompt

"A breathtaking photorealistic portrait of a dark fantasy enchantress. Her facial features are striking and aristocratic, with pale porcelain skin contrasting against deep obsidian makeup around piercing amber eyes. 

Surface details: The lighting is cinematic chiaroscuro, reminiscent of classical renaissance paintings but with a digital-occult edge. A soft rim light catches the subtle metallic gold flakes embedded in her dark lipstick.

The asset utilizes advanced subsurface scattering for hyper-realistic skin rendering, ensuring physically accurate light absorption and diffusion across the cheekbones and jawline."

Control Layers
— Prompt Adherence: 98%
— Texture resolution: 8K
— Seed locked: 4891023`,
  },
  {
    id: 'gilded_corset',
    position: [0.0, 0.25, 0.15],
    label: 'Gilded Armor',
    title: 'Intricate Gilded Corset',
    content: `Primary Generation Prompt

"Close-up of an ornate medieval bodice armor, crafted from blackened steel and layered with intricate gold filigree. The armor plates curve elegantly to form a protective yet ceremonial corset. 

Lighting environment: Soft studio lighting with a warm golden-hour fill. The gold inlays catch the light brilliantly, emphasizing the meticulous craftsmanship of the digital forge. 

Material breakdown: The blackened steel uses a highly treated PBR material (metalness 0.9, roughness 0.3) showing micro-abrasions from ancient battles. The gold filigree is polished to a mirror finish (metalness 1.0, roughness 0.05), blending ancient smithing principles with modern computational rendering."

Control Layers
— Reference image: wivern_gilded_armor.png
— Upscaler: 4x-UltraSharp at 0.3 denoise`,
  },
  {
    id: 'void_robes',
    position: [0.0, -0.45, 0.2],
    label: 'Void-Silk Robes',
    title: 'Woven Void-Silk Lower Robes',
    content: `Primary Generation Prompt

"A detailed shot of flowing, dark fantasy lower robes. The fabric appears to be woven from abyssal thread, displaying a mesmerizing texture that shifts between matte charcoal and deep, shimmering midnight blue as the light moves across its folds.

Surface texture: The cloth physically simulates heavy velvet but flows with ethereal lightness. The edges are lined with frayed golden thread, suggesting an ancient, noble lineage.

Render parameters: Camera uses an 85mm lens with a shallow depth of field. Cloth physics simulation is baked at 120 ticks per second to capture the exact, dramatic resting drape of the fabric."

Control Layers
— Physics Engine: Marvelous Designer drape data
— Sampler: DPM++ SDE Karras, 40 steps, CFG 6.5`,
  },
];

export default function ViewerPage() {
  return (
    <main className="relative w-screen h-screen bg-[#080808] overflow-hidden text-white flex">
      {/* Back to Master button */}
      <Link 
        href="/master"
        className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md border border-yellow-900/50 hover:bg-yellow-900/40 hover:border-yellow-700/80 transition-all rounded-full group"
      >
        <span className="text-yellow-600 group-hover:text-yellow-400">←</span>
        <span className="text-[10px] tracking-widest uppercase text-gray-300 group-hover:text-white">
          Back to Dashboard
        </span>
      </Link>

      <div className="w-full h-full relative">
        <InteractiveModelViewer
          modelUrl="/avatar.glb"
          hotspots={DEMO_HOTSPOTS}
          label="Full-Scale Interactive Avatar"
        />
      </div>
    </main>
  );
}
