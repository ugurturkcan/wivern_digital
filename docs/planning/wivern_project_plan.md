![](data:image/png;base64...)

Avatar Content Pipeline

**Full Project Plan & Technical Guide**

3-Month Internship | April 2026

| Role  **Architect & Lead Developer** | Duration  **3 Months (12 Weeks)** |
| --- | --- |
| Total Budget  **$60–$120** | Deliverable  **Working Avatar Reel Pipeline** |

Table of Contents

[1. Project Overview 3](#_heading=h.oc1k8q7aetz7)

[1.1 What We Are Building 3](#_heading=h.d4ky1lxvub30)

[1.2 Pipeline Stages 3](#_heading=h.ea2uhuqz0fzo)

[2. Technology Stack 4](#_heading=h.grsp53nakjbn)

[2.1 Core Languages & Frameworks 4](#_heading=h.3bnqb6w1umkj)

[2.2 Infrastructure Services 4](#_heading=h.s3docx83bgj6)

[3. Flowchart 5](#_heading=h.32bkjk8ago6p)

[4. Complete Budget Breakdown 6](#_heading=h.r08xkeiirhyg)

[4.1 Month 1 — Development (Free Trials) 6](#_heading=h.txb4f4gijzjm)

[4.2 Month 2 — Active Testing (Paid APIs) 6](#_heading=h.dvrnqjyc32tt)

[4.3 Month 3 — Open-Source Migration 7](#_heading=h.b7yme427776u)

[4.4 Total 3-Month Budget Summary 7](#_heading=h.m2zz4zkmyq42)

[4.5 Cost Per Generation Comparison 7](#_heading=h.kgp3hsuivxw1)

[5. Open-Source Models Reference 8](#_heading=h.hwzmys27ax0k)

[5.1 Video Generation 8](#_heading=h.cmcznt4174mz)

[5.2 Image Generation 9](#_heading=h.ldrttddlcv16)

[5.3 Talking Avatar / Lip-Sync 9](#_heading=h.sgveo1hu12u2)

[5.4 LLM / Caption Generation 9](#_heading=h.kquwbh72gmw3)

[10. End-of-Internship Handoff Checklist 10](#_heading=h.ik9mcwxb655q)

[10.1 Technical Deliverables 10](#_heading=h.8jlnh5w1bsnd)

[10.2 Business Deliverables 10](#_heading=h.xsla4ikf39sb)

[11. Quick Reference Summary 11](#_heading=h.1izg17mngq6d)

# 1. Project Overview

This document is the complete technical guide for building the Wivern Digital avatar content pipeline during a 3-month internship.

## 1.1 What We Are Building

A fully automated pipeline that takes an avatar (photo or short video of a person) as input, generates a styled image, animates it into a talking video, wraps it into a funny reel with captions and music, and outputs a finished short-form video ready for social media publishing. Optionally a pipeline to publish all the video to respective platforms.

## 1.2 Pipeline Stages

| **Stage** | **Input** | **Process** | **Output** | **Tool (API Phase)** | **Tool (OSS Phase)** |
| --- | --- | --- | --- | --- | --- |
| 1. Asset Upload | Photo / short clip | Validate, resize, normalize | Clean avatar asset | Custom upload backend | Same |
| 2. Script Generation | Topic / prompt | LLM writes script + scenes | Structured script + captions | Groq / OpenAI / Replicate LLM | Llama 3.1 / Mistral |
| 3. Image Generation | Avatar + prompt | Generate keyframes / style frames | Stylized images | FLUX.1 API | FLUX.1 local |
| 4. Talking Avatar (Lip Sync) | Image + audio | Lip-sync + face animation | Talking avatar video | D-ID / HeyGen API | Wav2Lip / SadTalker |
| 5. Video Generation | Avatar clips | Scene motion + enhancement | Full video scenes | Runway / Kling / Seedance API | Wan 2.1 (future WAN upgrade) |
| 6. Audio Generation | Script | TTS + background music | Voice + music tracks | ElevenLabs / TTS API | XTTS v2 + MusicGen |
| 7. Reel Assembly | Video + audio | Merge, sync, compress | Final reel MP4 | FFmpeg (cloud/server) | FFmpeg (same) |
| 8. Captioning | Script / topic | Caption + hashtags generation | Social caption text | LLM API | Local LLM |
| 9. Distribution | Final MP4 | Upload to platforms | Published reels | Meta / TikTok APIs | n8n + API automation |

# 2. Technology Stack

## 2.1 Core Languages & Frameworks

| **Technology** | **Purpose** | **Why This One** |
| --- | --- | --- |
| Python 3.11+ | Primary backend language | Best ecosystem for AI/ML, model inference, and pipeline orchestration |
| FastAPI | REST API backend server | High performance, async support, automatic API docs, widely used in AI systems |
| Node.js | Optional backend / automation scripts | Useful for tooling, workflow automation, and integration with services like n8n |
| React | Frontend UI (upload, dashboard) | Industry standard for web apps, strong ecosystem, easy integration with APIs |
| FFmpeg | Video processing and rendering | Core tool for video stitching, encoding, audio sync, and reel creation |
| Docker | Environment containerization | Ensures reproducibility across development, GPU servers, and production |
| Git / GitHub | Version control | Essential for collaboration, deployment, and tracking changes |

## 2.2 Infrastructure Services

| **Service** | **Purpose** | **Cost** | **Tier Used** |
| --- | --- | --- | --- |
| Cloudflare R2 | Store all generated images & videos | Free up to 10GB | Free forever |
| Railway.app | Host FastAPI backend + job queue | $5 credit/mo free | Free tier |
| BullMQ (Redis) | Job queue for async pipeline stages | Free self-hosted | Free |
| Upstash Redis | Redis in the cloud (for BullMQ) | Free tier 10K req/day | Free tier |
| GitHub Actions | CI/CD deploy automation | Free for public repos | Free |
| n8n (self-hosted) | Workflow automation for distribution | Open source, free | Free |

# 3. Flowchart

![](data:image/png;base64...)

# 4. Complete Budget Breakdown

## 4.1 Month 1 — Development (Free Trials)

| **Item** | **Service** | **Usage** | **Cost** |
| --- | --- | --- | --- |
| Image generation | Replicate (free credit) | ~500 test images | $0 |
| Talking avatar | D-ID (14-day trial) | ~20 test videos | $0 |
| Video clips | RunwayML (125 credits) | ~8 quality tests | $0 |
| Demo video | HeyGen (1 free credit) | 1 polished demo | $0 |
| LLM captions | Groq API (free forever) | Unlimited | $0 |
| Storage | Cloudflare R2 (10GB free) | All assets | $0 |
| Hosting | Railway.app ($5 credit) | Backend server | $0 |
| Overage buffer | Replicate top-up | If credits run out | $5–10 |

**Month 1 Total: $5 – $10**

## 4.2 Month 2 — Active Testing (Paid APIs)

| **Item** | **Service** | **Usage** | **Cost** |
| --- | --- | --- | --- |
| Image generation | Replicate | ~1,000 images @ $0.005 avg | $5–$10 |
| Talking avatar | D-ID / Segmind | ~50 videos @ $0.25–0.86 | $15–$45 |
| GPU cloud (OSS test) | RunPod RTX 3090 | ~5 hrs @ $0.20/hr | $1–$3 |
| LLM captions | Groq | Unlimited | $0 |
| Storage | Cloudflare R2 | Still under 10GB | $0 |
| Hosting | Railway.app | $5 credit covers it | $0 |

**Month 2 Total: $30 – $80**

## 4.3 Month 3 — Open-Source Migration

| **Item** | **Service** | **Usage** | **Cost** |
| --- | --- | --- | --- |
| GPU (image gen dev) | RunPod RTX 3090 | ~10 hrs @ $0.20/hr | $2 |
| GPU (avatar dev) | RunPod RTX 3090 | ~10 hrs @ $0.20/hr | $2 |
| GPU (video gen dev) | RunPod A100 80GB | ~5 hrs @ $1.00/hr | $5 |
| LoRA fine-tuning | RunPod A100 80GB | ~3 hrs @ $1.00/hr (optional) | $3–$5 |
| API fallback buffer | Replicate | ~200 images while OSS stabilises | $5–$10 |
| Storage + hosting | R2 + Railway | Scaling up slightly | $2–$5 |

**Month 3 Total: $30 – $60**

## 4.4 Total 3-Month Budget Summary

| **Scenario** | **Month 1** | **Month 2** | **Month 3** | **Total** |
| --- | --- | --- | --- | --- |
| Best case (max free usage) | $0 | $20 | $20 | $40 |
| Realistic case | $3 | $40 | $30 | $73 |
| Worst case (no discipline) | $5 | $100 | $40 | $145 |

## 4.5 Cost Per Generation Comparison

| **Pipeline Stage** | **API Cost** | **OSS Cloud GPU Cost** | **Saving** |
| --- | --- | --- | --- |
| Image generation (1 image) | $0.003–0.01 | $0.0005 | 95% |
| Talking avatar (30s video) | $0.25–0.86 | $0.01–0.03 | 97% |
| Video clip (10s scene) | $0.50–3.00 | $0.02–0.10 | 96% |
| Caption / script (LLM) | $0.001 | $0.00 | 100% |
| Full reel output (1 reel) | $0.80–3.50 | $0.04–0.15 | ~95% |

*$0.08 – $0.20 per reel with one iteration*

![](data:image/png;base64...)

# 5. Open-Source Models Reference

## 5.1 Video Generation

| **Model** | **By** | **Quality** | **Min VRAM** | **License** | **Best For** |
| --- | --- | --- | --- | --- | --- |
| Wan 2.2 | Alibaba | Excellent (beats RunwayML) | 8GB (1.3B) / 24GB (14B) | Apache 2.0 | Best overall video gen |
| HunyuanVideo 1.5 | Tencent | Excellent | 12GB (quantized) | Open source | Cinematic, long clips |
| LTX-Video 2.3 | Lightricks | Very good | 12GB | Apache 2.0 | Fast, 4K+audio |
| Ovi 1.1 | Character AI + Yale | Very good | 24GB | Open source | Synced audio+video |
| SkyReels V1 | Various | Good | 16GB+ | Open source | Human animation |
| CogVideoX-5B | Tsinghua | Good | 8GB (quantized) | Apache 2.0 | Short clips, quick test |

## 5.2 Image Generation

| **Model** | **By** | **Quality** | **Min VRAM** | **License** | **Best For** |
| --- | --- | --- | --- | --- | --- |
| Flux.1 Schnell | Black Forest Labs | Excellent, fast | 8GB | Apache 2.0 | Production image gen |
| Flux.1 Dev | Black Forest Labs | Excellent, detailed | 12GB | Non-commercial | High quality dev testing |
| SDXL + LoRA | Stability AI | Very good | 8GB | Open source | Custom styles via LoRA |
| HunyuanImage 3.0 | Tencent | Best quality (80B) | 48GB+ | Open weights | Complex scenes only |

## 5.3 Talking Avatar / Lip-Sync

| **Model** | **Quality** | **Min VRAM** | **Speed** | **Best For** |
| --- | --- | --- | --- | --- |
| HunyuanVideo-Avatar | Excellent | 16–24GB | Slow (10+ min) | Best quality, production use |
| MuseTalk | Good | 8GB | Fast (1–2 min) | Most use cases — recommended start |
| SadTalker | Good | 8GB | Medium (3–5 min) | More facial expression range |
| Duix Avatar | Good | 8GB+ | Medium | Offline, full voice clone, free API |

## 5.4 LLM / Caption Generation

| **Model** | **Size** | **Via** | **Speed** | **Cost** | **Best For** |
| --- | --- | --- | --- | --- | --- |
| LLaMA 3.1 8B | 8B params | Groq API or Ollama | Very fast | Free | Captions, scripts, fun text |
| Mistral 7B | 7B params | Groq API or Ollama | Very fast | Free | Versatile, good at instructions |
| Qwen 2.5 7B | 7B params | Ollama local | Fast | Free | Multilingual content |

# 6. GPU Platform

## 6.1 Platform comparison (RunPod vs Replicate vs Modal)

| **Feature** | **RunPod** | **Replicate** | **Modal** |
| --- | --- | --- | --- |
| Type | GPU cloud (raw access) | API model marketplace | Serverless GPU platform |
| Control | Full control (SSH, Docker, ComfyUI) | Low control | Medium–high control |
| Setup Difficulty | Medium | Very easy | Medium |
| Best For | Building full pipeline, OSS models | Quick testing, MVP | Scalable backend systems |
| Pricing Model | Per GPU hour | Per API call | Per compute time |
| Cost Efficiency | Cheapest long-term | Expensive at scale | Medium |
| Flexibility | Best | Lowest | Mid |
| Scaling | Manual / semi-auto | Automatic | Automatic |
| Vendor Lock-in | None | High | Medium |
| ComfyUI Support | Full (native) | Limited | Possible (custom) |
| Ideal Phase | Growth / production | Month 1–2 testing | Scaling phase |
| **Tier** | **GPU** | **VRAM** | **Best Use Case** | **RunPod Cost (€/hr)** | **Strengths** | **Limitations** |
| Top | NVIDIA A100 (40/80GB) | 40–80GB | Heavy video models (WAN, HunyuanVideo), full pipeline | €0.90 – €1.40 | Runs all models, stable, great for batching | Expensive, overkill early |
| Mid (Recommended) | RTX 4090 | 24GB | FLUX + MuseTalk + light video | €0.35 – €0.60 | Best balance of cost & power | Limited for large video models |
| Budget | RTX 3090 | 24GB | Image gen + avatar + testing | €0.20 – €0.35 | Cheap, good for ComfyUI | Slower, not ideal for video |

Best Service would be Runpod for the long run if newer modal come or to add another layer of modal in between and cost efficient. Complex but doable.

## 6.2. Estimated Cost Per Reel (by GPU)

| GPU | Cost per Reel (€) | Notes |
| --- | --- | --- |
| RTX 3090 | €0.10 – €0.30 | Early stage, inefficient runs |
| RTX 4090 | €0.05 – €0.15 | Optimized pipeline (best target) |
| A100 | €0.08 – €0.25 | Only efficient with batching |

**7. Risks & How to Handle Them**

| **Risk** | **Likelihood** | **Impact** | **Mitigation** |
| --- | --- | --- | --- |
| Free credits run out early | Medium | Medium | Set hard spend caps in every dashboard on Day 1. Mock expensive stages with dummy outputs during early development. |
| API is down / rate limited | Medium | High | Build retry logic with exponential backoff. Have 2 backup services per stage. |
| Open-source model quality is poor | Low–Medium | Medium | Compare 3 models before committing. Keep API fallback active for at least 2 weeks after OSS migration. |
| RunPod instance left running accidentally | Medium | High ($$$) | Set a RunPod budget alert at $5. Use spot instances. Always shut down after session. |
| 3-month deadline too short | Medium | High | Cut scope: drop distribution automation and LoRA training from Month 3. Deliver working pipeline only. |
| GPU VRAM too low for OSS models | Low | Medium | Use quantized (8-bit / 4-bit) model variants. Use Wan 2.2 1.3B not 14B. Use RunPod cloud. |
| Pipeline too slow for real-time use | Low | Low | For MVP, asynchronous generation is fine. Show 'generating...' progress bar. Speed is a Month 4 problem. |

# 10. End-of-Internship Handoff Checklist

By the end of Week 12, the following deliverables should be ready to hand to the company.

## 10.1 Technical Deliverables

* GitHub repository with all code, documented with README
* Working pipeline: photo input → reel output, end-to-end
* Admin dashboard showing job queue, cost per generation, output previews
* At least 2 pipeline stages running on open-source models
* Deployment instructions in DEPLOY.md
* Architecture diagram (system overview)

## 10.2 Business Deliverables

* 1-page executive summary: what was built, what it costs, what comes next
* Cost model: cost per reel at current scale vs projected cost at 1K reels/month
* Open-source migration report: quality comparison API vs OSS
* Vendor comparison: why these services were chosen over alternatives
* Recommendation: at what volume should the company buy a dedicated GPU?

# 11. Quick Reference Summary

| **Item** | **Detail** |
| --- | --- |
| Project | Avatar → Image → Video → Reel automation pipeline |
| Duration | 3 months, 12 weeks |
| Stack | Python + FastAPI + BullMQ + React + FFmpeg + Docker |
| Phase 1 (Month 1) | Free trials only. Target: $0–5 total. Deliver demo. |
| Phase 2 (Month 2) | Active API testing. Budget: $20–60. Start OSS migration. |
| Phase 3 (Month 3) | Full OSS pipeline. Budget: $25–40. Handoff ready. |
| Total Budget (realistic) | $50–80 for the full 3 months |
| Cost per reel (API) | $0.80–3.50 |
| Cost per reel (OSS cloud GPU) | $0.04–0.15 |
| Image gen (OSS) | Flux.1 Schnell via ComfyUI (8GB VRAM min) |
| Avatar video (OSS) | MuseTalk (8GB VRAM) or HunyuanVideo-Avatar (16GB) |
| Video gen (OSS) | Wan 2.2 1.3B (8GB) or 14B (24GB+) |
| LLM captions (always free) | Groq API (cloud) or Ollama + Mistral (local) |
| Storage (always free) | Cloudflare R2 (10GB free) |
| GPU cloud | RunPod spot: RTX 3090 ~$0.20/hr, A100 ~$1/hr |
| Key risk | Leaving cloud GPU running = surprise bill. Set budget alerts. |
| Handoff date | End of Week 12 with full docs, demo, and cost report |

Wivern Digital — Avatar Pipeline Project Plan — Prepared 2026