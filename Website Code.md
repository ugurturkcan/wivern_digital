Wivern Digital Homepage


<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Wivern Digital | Guild of Avatarists</title>
<script src="https://cdn.tailwindcss.com"></script>
<style>
@import url('https://fonts.googleapis.com/css2?
family=Cinzel:wght@400;600;800&family=Inter:wght@300;400;500&display=swap');

:root {
--alchemical-gold: #c5a059;
--parchment: #f4f1ea;
--ink: #1a1a1a;
}

body {
font-family: 'Inter', sans-serif;
background-color: var(--ink);
color: var(--parchment);
}

h1, h2, h3, .serif-font {
font-family: 'Cinzel', serif;
}

/* Glassmorphism for modern structure */
.glass-panel {
background: rgba(26, 26, 26, 0.6);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(197, 160, 89, 0.2);
}

.gold-accent {
color: var(--alchemical-gold);
}

.mystic-glow {
box-shadow: 0 0 30px rgba(197, 160, 89, 0.15);
transition: box-shadow 0.3s ease;
}

.mystic-glow:hover {
box-shadow: 0 0 50px rgba(197, 160, 89, 0.3);
}
</style>
</head>
<body class="antialiased selection:bg-yellow-900 selection:text-white">

<!-- Navigation -->


<nav class="fixed w-full z-50 glass-panel border-b-0 border-opacity-30 border-yellow-700 transition-all duration-300">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex justify-between items-center h-24">
<div class="flex-shrink-0 flex items-center gap-4">
<div class="w-12 h-12 rounded-full border border-yellow-700 flex items-center justify-center bg-black">
<span class="serif-font text-yellow-600 text-xl">W</span>
</div>
<div class="flex flex-col">
<span class="serif-font text-2xl tracking-widest text-white uppercase">Wivern Digital</span>
<span class="text-xs tracking-[0.2em] gold-accent uppercase">Guild of Avatarists</span>
</div>
</div>
<div class="hidden md:flex space-x-12">
<a href="#entrance" class="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase
transition-colors">The Shop</a>
<a href="#craft" class="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase
transition-colors">The Craft</a>
<a href="#archives" class="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase
transition-colors">Specimens</a>
<a href="#commission" class="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase
transition-colors">Commission</a>
</div>
</div>
</div>
</nav>

<!-- Hero Section: Entering the Shop -->
<section id="entrance" class="relative h-screen min-h-[800px] flex items-center justify-center">
<!-- Background Image: Medieval Shop Exterior Placeholder -->
<div class="absolute inset-0 w-full h-full">
<img src="https://images.unsplash.com/photo-1583417657207-6a17b9c968f9?q=80&w=2070&auto=format&fit=crop"
alt="Medieval Shop Exterior"
class="w-full h-full object-cover opacity-40 filter contrast-125 saturate-50">
<div class="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-[#1a1a1a] opacity-90"></div>
<div class="absolute inset-0 bg-black/50"></div>
</div>

<!-- Hero Content -->
<div class="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
<h2 class="text-sm md:text-base font-light tracking-[0.3em] gold-accent uppercase mb-6">Enter the Workshop</h2>
<h1 class="serif-font text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-wide drop-shadow-lg">
Digital Alchemy
</h1>
<div class="w-px h-24 bg-gradient-to-b from-yellow-600 to-transparent mx-auto mb-8"></div>
<p class="text-gray-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
Precision engineering of bespoke AI avatars. Ancient aesthetic principles realized through modern computational
methodology.
</p>
<div class="mt-12">
<a href="#archives" class="inline-block border border-yellow-700 text-yellow-500 px-10 py-4 text-xs font-medium
tracking-[0.2em] uppercase hover:bg-yellow-900/20 transition-all duration-300">
View the Archives
</a>
</div>
</div>
</section>


<!-- The Craft (About the Guild) -->
<section id="craft" class="py-32 bg-[#f4f1ea] text-[#1a1a1a] relative border-y-8 border-gray-900">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 class="serif-font text-4xl md:text-5xl mb-8 text-gray-900">The Guild of Avatarists</h2>
<p class="text-gray-700 mb-6 leading-relaxed font-light text-lg">
Wivern Digital operates as a specialized guild dedicated exclusively to the craft of avatar creation. The primary
function is the generation of detailed, animated digital constructs.
</p>
<p class="text-gray-700 leading-relaxed font-light text-lg mb-8">
The process aligns with historical alchemical concepts—taking base data and conceptual requirements to synthesize
a functional digital entity. Operations are structured to ensure accuracy and structural fidelity.
</p>
<div class="grid grid-cols-2 gap-8 border-t border-gray-300 pt-8 mt-8">
<div>
<span class="block serif-font text-2xl text-gray-900 mb-2">Formulation</span>
<span class="block text-sm text-gray-600 font-light">Structural analysis and parameter setting.</span>
</div>
<div>
<span class="block serif-font text-2xl text-gray-900 mb-2">Infusion</span>
<span class="block text-sm text-gray-600 font-light">Application of animation logic.</span>
</div>
</div>
</div>
<!-- Workshop Imagery -->
<div class="relative h-[600px] w-full rounded-sm overflow-hidden bg-gray-200 shadow-2xl">
<img src="https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1000&auto=format&fit=crop"
alt="Workbench detailing"
class="absolute inset-0 w-full h-full object-cover filter sepia-[.3] contrast-125">
<div class="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-sm">
<p class="serif-font text-white text-xl tracking-wider">Meticulous observation leads to precise replication.</p>
</div>
</div>
</div>
</div>
</section>

<!-- The Archives (Video Gallery) -->
<section id="archives" class="py-32 relative bg-[#121212] overflow-hidden">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div class="text-center mb-20">
<span class="text-xs font-medium tracking-[0.2em] gold-accent uppercase block mb-4">Observation Chamber</span>
<h2 class="serif-font text-4xl md:text-6xl text-white">Active Specimens</h2>
<div class="w-16 h-px bg-yellow-700 mx-auto mt-8"></div>
</div>

<!-- Video Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<!-- Specimen 1 -->
<div class="glass-panel p-2 rounded-sm group mystic-glow">
<div class="relative aspect-[4/5] bg-black overflow-hidden border border-gray-800">


<video class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter
contrast-125 grayscale-[20%]" autoplay loop muted playsinline>
<source src="https://assets.mixkit.co/videos/preview/mixkit-mysterious-pale-looking-fashion-woman-39878large.mp4" type="video/mp4">
</video>
<div class="absolute inset-0 border border-yellow-700/30 m-4 pointer-events-none"></div>
<div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
<h3 class="serif-font text-xl text-white tracking-wider mb-1">Entity: Sylph</h3>
<p class="text-xs font-light text-gray-400 tracking-widest uppercase">Class: Aethereal</p>
</div>
</div>
</div>

<!-- Specimen 2 -->
<div class="glass-panel p-2 rounded-sm group mystic-glow md:translate-y-12">
<div class="relative aspect-[4/5] bg-black overflow-hidden border border-gray-800">
<video class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter
contrast-125 grayscale-[20%]" autoplay loop muted playsinline>
<source src="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4"
type="video/mp4">
</video>
<div class="absolute inset-0 border border-yellow-700/30 m-4 pointer-events-none"></div>
<div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
<h3 class="serif-font text-xl text-white tracking-wider mb-1">Entity: Undine</h3>
<p class="text-xs font-light text-gray-400 tracking-widest uppercase">Class: Aquatic Form</p>
</div>
</div>
</div>

<!-- Specimen 3 -->
<div class="glass-panel p-2 rounded-sm group mystic-glow">
<div class="relative aspect-[4/5] bg-black overflow-hidden border border-gray-800">
<video class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter
contrast-125 grayscale-[20%]" autoplay loop muted playsinline>
<source src="https://assets.mixkit.co/videos/preview/mixkit-wizard-with-a-glowing-magic-wand-in-theforest-27415-large.mp4" type="video/mp4">
</video>
<div class="absolute inset-0 border border-yellow-700/30 m-4 pointer-events-none"></div>
<div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
<h3 class="serif-font text-xl text-white tracking-wider mb-1">Entity: Magus</h3>
<p class="text-xs font-light text-gray-400 tracking-widest uppercase">Class: Practitioner</p>
</div>
</div>
</div>

</div>
</div>
</section>

<!-- Footer / Commission CTA -->
<footer id="commission" class="bg-[#0a0a0a] border-t border-yellow-900/30 pt-24 pb-12 relative">
<div class="max-w-4xl mx-auto px-4 text-center mb-24">
<h2 class="serif-font text-3xl md:text-5xl text-white mb-6">Initiate the Process</h2>
<p class="text-gray-400 font-light mb-10 max-w-2xl mx-auto">
Commission slots are regulated based on current guild capacity. Formal requirements are necessary for preliminary
formulation.


</p>
<a href="mailto:commissions@wiverndigital.com" class="inline-block border border-yellow-700 bg-yellow-900/10 textyellow-500 px-12 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-yellow-700 hover:text-white transition-all
duration-300">
Submit Requisition
</a>
</div>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
<div>
<div class="flex items-center gap-3 mb-6">
<div class="w-8 h-8 rounded-full border border-yellow-700 flex items-center justify-center">
<span class="serif-font text-yellow-600 text-sm">W</span>
</div>
<span class="serif-font text-lg tracking-widest text-white uppercase">Wivern Digital</span>
</div>
<p class="text-gray-500 text-xs tracking-wider uppercase font-light">Guild of Avatarists &bull; Est. 2026</p>
</div>
<div class="md:text-center">
<h4 class="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-gray-400">Guild Coordinates</h4>
<ul class="space-y-2 text-sm text-gray-600 font-light">
<li>Sector 4R, Ward 2330</li>
<li>The Manor Estate</li>
<li>Access by documented appointment</li>
</ul>
</div>

<div class="md:text-right">
<h4 class="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-gray-400">Protocols</h4>
<ul class="space-y-2 text-sm font-light">
<li><a href="#" class="text-gray-600 hover:text-yellow-600 transition-colors">Client Confidentiality</a></li>
<li><a href="#" class="text-gray-600 hover:text-yellow-600 transition-colors">Creation Standards</a></li>
</ul>
</div>
</div>
</footer>

<script>
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
navbar.classList.add('bg-black/90', 'shadow-2xl');
navbar.classList.remove('bg-transparent');
} else {
navbar.classList.remove('bg-black/90', 'shadow-2xl');
navbar.classList.add('bg-transparent');
}
});
</script>
</body>
</html>


Commission Tariffs


<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Wivern Digital | Commission Tariffs</title>
<script src="https://cdn.tailwindcss.com"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800&family=Inter:wght@300;400;500&display=swap');

:root {
--alchemical-gold: #c5a059;
--parchment: #f4f1ea;
--ink: #1a1a1a;
}

body {
font-family: 'Inter', sans-serif;
background-color: var(--ink);
color: var(--parchment);
}

h1, h2, h3, .serif-font {
font-family: 'Cinzel', serif;
}

.glass-panel {
background: rgba(26, 26, 26, 0.6);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(197, 160, 89, 0.2);
}

.gold-accent {
color: var(--alchemical-gold);
}

.mystic-glow {
box-shadow: 0 0 30px rgba(197, 160, 89, 0.15);
transition: box-shadow 0.3s ease;
}

.mystic-glow:hover {
box-shadow: 0 0 50px rgba(197, 160, 89, 0.3);
}
</style>
</head>
<body class="antialiased selection:bg-yellow-900 selection:text-white">

<!-- Navigation -->
<nav class="fixed w-full z-50 glass-panel border-b-0 border-opacity-30 border-yellow-700 transition-all duration-300">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex justify-between items-center h-24">
<div class="flex-shrink-0 flex items-center gap-4">
<div class="w-12 h-12 rounded-full border border-yellow-700 flex items-center justify-center bg-black">
<span class="serif-font text-yellow-600 text-xl">W</span>
</div>
<div class="flex flex-col">
<span class="serif-font text-2xl tracking-widest text-white uppercase">Wivern Digital</span>
<span class="text-xs tracking-[0.2em] gold-accent uppercase">Guild of Avatarists</span>
</div>
</div>
<div class="hidden md:flex space-x-12">
<a href="index.html#entrance" class="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">The
Shop</a>


<a href="index.html#craft" class="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">The
Craft</a>
<a href="index.html#archives" class="text-gray-300 hover:text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transitioncolors">Specimens</a>
<a href="#tariffs" class="text-yellow-600 text-xs font-medium tracking-[0.15em] uppercase transition-colors">Commission</a>
</div>
</div>
</div>
</nav>

<!-- Page Header -->
<section class="relative pt-48 pb-20 flex items-center justify-center border-b border-yellow-900/30">
<div class="absolute inset-0 w-full h-full">
<div class="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1a1a1a] opacity-100 z-0"></div>
</div>
<div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
<h2 class="text-sm md:text-base font-light tracking-[0.3em] gold-accent uppercase mb-4">Official Register</h2>
<h1 class="serif-font text-4xl md:text-6xl text-white mb-6 tracking-wide drop-shadow-lg">
Requisition Tariffs
</h1>
<div class="w-px h-16 bg-gradient-to-b from-yellow-600 to-transparent mx-auto mb-6"></div>
<p class="text-gray-400 text-base font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
Standardized fees for the generation of 30-second digital avatar constructs. All submissions are subject to guild review prior to the commencement of
formulation.
</p>
</div>
</section>

<!-- Pricing Grid -->
<section id="tariffs" class="py-24 relative bg-[#121212]">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Tier 1: Single Clip -->
<div class="glass-panel p-10 rounded-sm flex flex-col justify-between border-t-4 border-t-gray-700 hover:border-t-yellow-600 transition-all
duration-300">
<div>
<h3 class="serif-font text-2xl text-white tracking-wider mb-2">Single Specimen</h3>
<p class="text-xs font-light text-gray-400 tracking-widest uppercase mb-8">Base Formulation</p>
<div class="mb-8">
<span class="text-4xl font-light text-white">€199</span>
<span class="text-sm text-gray-500">/ output</span>
</div>
<ul class="space-y-4 text-sm text-gray-300 font-light mb-8">
<li class="flex items-start gap-3">
<span class="text-yellow-600 mt-0.5">◈</span>
One isolated 30-second sequence
</li>
<li class="flex items-start gap-3">
<span class="text-yellow-600 mt-0.5">◈</span>
Standard ambient motion
</li>
<li class="flex items-start gap-3">
<span class="text-yellow-600 mt-0.5">◈</span>
Unspoken format (visual only)
</li>
</ul>
</div>
<a href="mailto:commissions@wiverndigital.com?subject=Single Specimen Requisition" class="block text-center border border-yellow-700 textyellow-500 px-6 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:bg-yellow-900/20 transition-all duration-300">
Initiate
</a>
</div>

<!-- Tier 2: Batch -->
<div class="glass-panel p-10 rounded-sm flex flex-col justify-between border-t-4 border-t-yellow-600 mystic-glow transform md:-translate-y-4">
<div>
<div class="flex justify-between items-start mb-2">
<h3 class="serif-font text-2xl text-white tracking-wider">Quarterly Batch</h3>


<span class="bg-yellow-900/30 text-yellow-500 text-[10px] px-2 py-1 tracking-widest uppercase border
border-yellow-700/50">Standard</span>
</div>
<p class="text-xs font-light text-gray-400 tracking-widest uppercase mb-8">Sustained Output</p>
<div class="mb-8">
<span class="text-4xl font-light text-white">€299</span>
<span class="text-sm text-gray-500">/ total</span>
</div>
<ul class="space-y-4 text-sm text-gray-300 font-light mb-8">
<li class="flex items-start gap-3">
<span class="text-yellow-600 mt-0.5">◈</span>
Ten distinct 30-second sequences
</li>
<li class="flex items-start gap-3">
<span class="text-yellow-600 mt-0.5">◈</span>
Distributed over a 90-day period
</li>
<li class="flex items-start gap-3">
<span class="text-yellow-600 mt-0.5">◈</span>
Unspoken format (visual only)
</li>
<li class="flex items-start gap-3">
<span class="text-yellow-600 mt-0.5">◈</span>
Cohesive character modeling across batch
</li>
</ul>
</div>
<a href="mailto:commissions@wiverndigital.com?subject=Quarterly Batch Requisition" class="block text-center bg-yellow-700/10 border borderyellow-600 text-yellow-500 px-6 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:bg-yellow-700 hover:text-white transition-all duration-300">
Initiate Batch
</a>
</div>

<!-- Tier 3: Subscription -->
<div class="glass-panel p-10 rounded-sm flex flex-col justify-between border-t-4 border-t-gray-700 hover:border-t-yellow-600 transition-all
duration-300">
<div>
<h3 class="serif-font text-2xl text-white tracking-wider mb-2">Guild Retainer</h3>
<p class="text-xs font-light text-gray-400 tracking-widest uppercase mb-8">Monthly Subscription</p>
<div class="mb-8">
<span class="text-4xl font-light text-white">€499</span>
<span class="text-sm text-gray-500">/ month</span>
</div>
<ul class="space-y-4 text-sm text-gray-300 font-light mb-8">
<li class="flex items-start gap-3">
<span class="text-yellow-600 mt-0.5">◈</span>
Fifteen 30-second sequences per cycle
</li>
<li class="flex items-start gap-3">
<span class="text-yellow-600 mt-0.5">◈</span>
Priority generation queue
</li>
<li class="flex items-start gap-3">
<span class="text-yellow-600 mt-0.5">◈</span>
Direct access to structural architects
</li>
<li class="flex items-start gap-3">
<span class="text-yellow-600 mt-0.5">◈</span>
Unspoken format (visual only)
</li>
</ul>
</div>
<a href="mailto:commissions@wiverndigital.com?subject=Guild Retainer Requisition" class="block text-center border border-yellow-700 textyellow-500 px-6 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:bg-yellow-900/20 transition-all duration-300">
Establish Retainer
</a>
</div>
</div>
</div>


</section>

<!-- Augmentations (Add-ons) -->
<section class="py-24 bg-[#0a0a0a] border-t border-yellow-900/30">
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="text-center mb-16">
<h2 class="serif-font text-3xl text-white mb-4">Required Augmentations</h2>
<p class="text-gray-400 font-light text-sm">
Structural and auditory adjustments applicable to base formulations. Fees are calculated per 30-second output.
</p>
</div>

<div class="space-y-4">
<!-- Add-on Item -->
<div class="glass-panel p-6 rounded-sm flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<h4 class="serif-font text-lg text-white tracking-wider mb-1">Spoken Integration</h4>
<p class="text-gray-400 font-light text-sm">Generation of synthesized audio track matching provided transcripts. No visual synchronization
included.</p>
</div>
<div class="text-right whitespace-nowrap border-l border-gray-700 pl-6 w-full md:w-auto">
<span class="text-xl font-light text-yellow-600">+ €49</span>
<span class="block text-[10px] text-gray-500 tracking-widest uppercase">Per Output</span>
</div>
</div>

<!-- Add-on Item -->
<div class="glass-panel p-6 rounded-sm flex flex-col md:flex-row justify-between items-center gap-6 border border-yellow-900/40">
<div>
<h4 class="serif-font text-lg text-white tracking-wider mb-1">Full Lip Synchronization</h4>
<p class="text-gray-400 font-light text-sm">Precise alignment of labial movement to synthesized or client-provided auditory tracks.</p>
</div>
<div class="text-right whitespace-nowrap border-l border-gray-700 pl-6 w-full md:w-auto">
<span class="text-xl font-light text-yellow-600">+ €99</span>
<span class="block text-[10px] text-gray-500 tracking-widest uppercase">Per Output</span>
</div>
</div>

<!-- Add-on Item -->
<div class="glass-panel p-6 rounded-sm flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<h4 class="serif-font text-lg text-white tracking-wider mb-1">Complex Gestural Mapping</h4>
<p class="text-gray-400 font-light text-sm">Implementation of specific, non-ambient somatic movements or interactions with digital objects.</p>
</div>
<div class="text-right whitespace-nowrap border-l border-gray-700 pl-6 w-full md:w-auto">
<span class="text-xl font-light text-yellow-600">+ €79</span>
<span class="block text-[10px] text-gray-500 tracking-widest uppercase">Per Output</span>
</div>
</div>
</div>
</div>
</section>

<!-- Footer -->
<footer class="bg-[#121212] border-t border-gray-800 pt-16 pb-12 relative">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<div class="flex items-center gap-3 mb-6">
<div class="w-8 h-8 rounded-full border border-yellow-700 flex items-center justify-center bg-black">
<span class="serif-font text-yellow-600 text-sm">W</span>
</div>
<span class="serif-font text-lg tracking-widest text-white uppercase">Wivern Digital</span>
</div>
<p class="text-gray-500 text-xs tracking-wider uppercase font-light">Guild of Avatarists &bull; Est. 2026</p>
</div>
<div class="md:text-center">
<h4 class="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-gray-400">Guild Coordinates</h4>
<ul class="space-y-2 text-sm text-gray-600 font-light">


<li>Sector 4R, Ward 2330</li>
<li>The Manor Estate</li>
<li>Access by documented appointment</li>
</ul>
</div>

<div class="md:text-right">
<h4 class="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-gray-400">Protocols</h4>
<ul class="space-y-2 text-sm font-light">
<li><a href="#" class="text-gray-600 hover:text-yellow-600 transition-colors">Client Confidentiality</a></li>
<li><a href="#" class="text-gray-600 hover:text-yellow-600 transition-colors">Creation Standards</a></li>
</ul>
</div>
</div>
</footer>

</body>
</html>


