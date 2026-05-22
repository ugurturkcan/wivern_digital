![](data:image/png;base64...)Wivern Digital

Implementation Plan

| Phase 1  **Month 1: Development with Free Trials**  Weeks 1–4 · Budget: $0–$5  *Goal: Full end-to-end pipeline running on free API credits. Working demo delivered to CEO by end of Week 4.* |
| --- |

| **Week 1 — Foundation & Environment Setup** |
| --- |

**Day 1–2: Environment setup**

1. Install Python 3.11, pip, and virtualenv on the machine
2. Install Git and create a GitHub repo named **wivern-avatar-pipeline**
3. Install Docker Desktop.
4. Install VS Code with the Python extension and the REST Client extension
5. Create a .env file — add all API keys. sign up for services
6. Install FFmpeg: brew install ffmpeg (Mac) or download the Windows build
7. Install Ollama and pull Mistral 7B: ollama pull mistral/ openrouter.

**Day 3–4: Project structure**

1. Create folder structure: /api /pipeline /workers /frontend /scripts
2. Set up FastAPI app with a health check endpoint — GET /health returns {status: ok}
3. Set up BullMQ with Upstash Redis for async job queuing
4. Test that a dummy job moves through the queue end-to-end
5. Write a basic Dockerfile for the API

**Day 5: First API integration test**

1. Call the Replicate API manually using the Python requests library
2. Generate one test image with SDXL using a simple portrait prompt
3. Save the output image to Cloudflare R2/Contabo via API
4. Confirm the image is accessible via a public R2 URL

| **Week 2 — Image Generation + Avatar Video**  *Goal: Have image generation and talking avatar video working as two separate, independently callable pipeline stages.* |
| --- |

1. Build the /generate-image endpoint in FastAPI
2. Accept: avatar photo upload + style prompt as JSON body
3. Call Replicate with Flux.1-schnell model — fastest results during testing
4. Store the result image in R2/Contabo and return the public URL
5. Sign up for D-ID API.
6. Build the /generate-avatar-video endpoint
7. Accept: image URL + script text (what the avatar will say)
8. Call D-ID API with the image and a TTS voice.
9. Store the output MP4 in R2 and return the URL
10. Test the full flow: upload your own photo → styled version → avatar saying one sentence

| **Week 3 — Caption Generation + FFmpeg Reels Automation**  *Goal: Chain all stages together. Photo in, finished reel out.* |
| --- |

1. Build the /generate-caption endpoint using Groq API (free, fast, no spend)
2. Try a different prompt
3. Build the /create-reel endpoint using FFmpeg
4. Add caption overlay using the FFmpeg drawtext filter
5. Add background music — use royalty-free audio from Pixabay or Freesound
6. Crop video to a 9:16 aspect ratio for Reels / TikTok format
7. Add 0.5s fade-in and fade-out transitions
8. Build the /pipeline endpoint that chains all stages in sequence
9. Test the full chain: photo upload → styled image → avatar video → reel with caption

**FFmpeg command for basic reel:**

ffmpeg -i input.mp4 -vf "scale=1080:1920:force\_original\_aspect\_ratio=decrease,

pad=1080:1920:(ow-iw)/2:(oh-ih)/2,drawtext=text='YOUR CAPTION':

fontcolor=white:fontsize=48:x=(w-text\_w)/2:y=h-th-60" -c:a copy output\_reel.mp4

| **Week 4 — Polish, UI & Demo***.* |
| --- |

1. Build a minimal React frontend: drag-and-drop photo upload, topic input, generate button, video preview player
2. Connect the frontend to your FastAPI backend
3. Add a real-time progress indicator — poll /pipeline/status every 3 seconds
4. Use the HeyGen free credit to generate one high-quality demo video
5. Detailed explanation of the pipeline running end-to-end
6. Technical summary.

| Phase 2  **Month 2: Active Pipeline + Open Source Migration**  Weeks 5–8 · Budget: $20–$60 |
| --- |

| **Weeks 5–6 — Scale Pipeline + Quality Controls** |
| --- |

1. Add error handling for every API call: retry 3 times with exponential backoff
2. Add cost monitoring: log every API call and its estimated cost to a spreadsheet
3. Set hard spend caps in Replicate dashboard ($20 max) and Segmind ($10 max)
4. Add multiple style presets for image generation: cinematic, cartoon, realistic, anime
5. Add multiple voice options for avatar video: male, female, different accents
6. Build a simple admin dashboard showing jobs queued, jobs completed, total cost today
7. Add Cloudflare R2 /Contabond cleanup: auto-delete assets older than 7 days to stay in the free tier

| **Week 7 — Open Source Stage 1: Image Generation**  *Goal: Swap Replicate image generation for Flux.1 running on RunPod.* |
| --- |

1. Create a RunPod account at runpod.io
2. Launch a spot instance: RTX 4090.
3. SSH into the instance and install ComfyUI:

git clone https://github.com/comfyanonymous/ComfyUI

cd ComfyUI && pip install -r requirements.txt

1. Download Flux.1-schnell model weights from Hugging Face to the instance
2. Start ComfyUI server: python main.py --listen 0.0.0.0 --port 8188
3. Update your FastAPI /generate-image endpoint to call your RunPod instance instead of Replicate
4. Test: generate 20 images, compare quality, measure cost. 20–30× cheaper
5. SHUT DOWN the RunPod instance when done. (Never leave it running unattended.)

| **Week 8 — Open-Source Stage 2: Talking Avatar**  *Goal: Swap D-ID/HeyGen for MuseTalk. This is the most impactful cost reduction in the entire pipeline.* |
| --- |

1. On a new RunPod RTX 4090 session, clone MuseTalk:

git clone https://github.com/TMElyralab/MuseTalk

cd MuseTalk && pip install -r requirements.txt

1. Download MuseTalk model weights — happens automatically on first run
2. Run a test locally:

python -m scripts.inference --video\_path test.mp4 --audio\_path test.wav

1. Wrap MuseTalk in a FastAPI endpoint on the RunPod instance
2. Update your main pipeline to call RunPod for avatar generation instead of D-ID
3. Compare output quality: MuseTalk vs D-ID side by side on the same input
4. Build a fallback: if RunPod fails or is unavailable, fall back to another modal(To be decided)

| **Model** | **Quality** | **Speed** | **VRAM** | **Cost/Video** | **Best For** |
| --- | --- | --- | --- | --- | --- |
| MuseTalk | Good | Fast (1–2 min) | 8GB+ | $0.01–0.03 | Most use cases — recommended start |
| SadTalker | Good | Medium (3–5 min) | 8GB+ | $0.01–0.03 | More facial expression range |
| HunyuanVideo-Avatar | Excellent | Slow (10+ min) | 16–24GB | $0.03–0.10 | High quality demos and premium clients |

| Phase 3  **Month 3: Full Open Source + Commercialisation**  Weeks 9–12 · Budget: $25–$40  *Goal: Run 90%+ of the pipeline on open-source models. Prepare the full system for commercial handoff.* |
| --- |

| **Weeks 9–10 — Full OSS Video Pipeline**  *Goal: Migrate video scene generation to Wan 2.2 and run 50 end-to-end test generations.* |
| --- |

1. Migrate video scene generation to Wan 2.2 — Alibaba's open-source video model
2. On RunPod A100 80GB (~$1/hr), clone and run Wan 2.2:

git clone https://github.com/Wan-Video/Wan2.2

pip install -r requirements.txt

python generate.py --task t2v-1.3B --prompt 'your prompt here'

1. Test: generate 10 short scene videos (5–10 seconds each), review quality
2. Integrate Wan 2.2 into the pipeline as the scene background video layer
3. Set up the full OSS pipeline: Flux.1 image → MuseTalk avatar → Wan 2.2 scene → FFmpeg reel
4. Run 50 end-to-end test generations — log quality and cost for each run
5. Calculate cost per reel: full OSS vs full API — target is as cheap as possible while making it efficient.

| **Week (11-12) — Distribution, Analytics & Final Handoff**  *Goal: Complete the system. Document everything. Present the handoff.* |
| --- |

1. Document the entire system: architecture diagram, all API endpoints, and deployment steps
2. Write the handoff document: what is running, where it runs, and how to maintain it
3. Record a final demo video of the full pipeline running end to end
4. Present to CEO: cost per reel, quality comparison API vs OSS, and the scale-up roadmap

| **Handoff Checklist**  Technical: working pipeline · admin dashboard · 2+ OSS stages · full GitHub repo · deployment docs  Business: cost-per-reel report · vendor comparison · GPU purchase ROI model · final demo video |
| --- |

Wivern Digital Guild · Avatar Pipeline Implementation Plan · April 2026 · Confidential