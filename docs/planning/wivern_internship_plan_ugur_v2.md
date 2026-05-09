# Wivern Digital - 3-Month Internship Implementation Plan
**Prepared by:** Uğur
**Objective:** To build the Wivern Digital "Master Driver" avatar generation platform, integrating a Next.js frontend with a high-fidelity AI pipeline, adhering to the company's ecological and guild-based principles.

---

## 1. Tech Stack & Infrastructure

To ensure a highly responsive, cinematic user experience (matching the Figma design) and robust backend processing, we will utilize the following stack:

*   **Core Frontend:** Next.js (App Router) & React
*   **Styling & UI:** Tailwind CSS (Focus on dark, mystical guild aesthetics)
*   **Backend Orchestration:** Python & FastAPI (for routing requests to GPU instances)
*   **Authentication:** Clerk
*   **Database (DB):** Supabase (PostgreSQL)
*   **Storage:** Supabase Storage / AWS S3 (for raw uploads and final 4K videos)
*   **Payment Gateway:** Stripe
*   **AI/GPU Server Environment:** ComfyUI + Docker, utilizing Wan2.2, LivePortrait / DreamActor V2, Seedance 2.0, and Python-based 3D Variational Autoencoders (VAE) for motion capture.

## 2. Services & Deployment

*   **Frontend Hosting:** Vercel
*   **API & Task Queue Hosting:** Contabo (VPS)
*   **Heavy GPU Computing:** RunPod / Lambda Labs (Utilizing RTX 4090s for testing, H100s for heavy Wan2.2/LivePortrait rendering)
*   **Voice Synthesis:** ElevenLabs API (or GPT-SoVITS deployed on RunPod)

## 3. Security Considerations

*   **Database Security:** Implementation of **Supabase Row Level Security (RLS)** to guarantee that users can strictly access only their own uploaded photos, scripts, and generated videos.
*   **Authentication & Session Management:** Utilizing **Clerk's JWT-based authentication** to secure all API routes and dashboard pages.
*   **Asset & Data Privacy:** Secure, encrypted bucket storage for client source files. Temporary files used during generation will be purged securely to protect the "Master Driver" proprietary data.
*   **Secure Webhooks:** Implementing signature validation for Stripe payment webhooks and RunPod generation completion webhooks to prevent spoofing.

## 4. Pricing & Cost Overview (Prepared for Review)

As requested, here is the detailed pricing research for the core services, organized for our budget planning:

### Core Web Infrastructure (Monthly)
| Service | Plan | Price | Key Features / Limits |
| :--- | :--- | :--- | :--- |
| **Clerk (Auth)** | Hobby | $0 | 50,000 MRU (Monthly Active Users), 3 seats, Custom domain. |
| | Pro | $20/mo | 50k MRU included (+$0.02/mo each extra), Custom session lifetime, MFA. |
| **Vercel (Hosting)** | Hobby | $0 | Automatic CI/CD, Global CDN, ideal for MVP development. |
| | Pro | $20/mo/user | Advanced spend management, faster builds, team collaboration. |
| **Supabase (DB)** | Free | $0 | 50k MAU, 500MB DB, 1GB Storage, 5GB bandwidth. |
| | Pro | $25/mo | 100k MAU, 8GB DB, 100GB Storage, daily backups. |

### Backend & Cloud Computing
| Service | Instance Type | Price | Specifications / Use Case |
| :--- | :--- | :--- | :--- |
| **Contabo (VPS)** | Cloud VPS 10 | €4.28/mo | 4 vCPU, 8GB RAM, 75GB NVMe. Perfect for FastAPI task orchestrator. |
| | Cloud VPS 20 | €6.66/mo | 6 vCPU, 12GB RAM, 100GB NVMe. Scales for heavier queueing. |
| **RunPod (GPU)** | RTX 4090 | $0.69/hr | 24GB VRAM. Extremely cost-effective for development & testing. |
| | L40S | $0.86/hr | 48GB VRAM. Fast inference for mid-sized generative models. |
| | H100 PCIe | $2.39/hr | 80GB VRAM. Maximum throughput for heavy production models (e.g., Wan 2.2). |
| | Wan 2.2 API | ~$0.30/req | Pre-deployed serverless API for immediate video generation (5s clip). |

## 5. Website Pages List

### Public Pages
*   **Landing Page:** Hero section (Cinematic Guild theme), "Crafting Digital Avatars" section, Works/Gallery (e.g., *The Merchant of Aldbrook*), Pricing/Tiers, and Footer.
*   **Auth Pages:** Custom styled Clerk Login, Sign Up, and Password Reset pages.

### Client Dashboard (Authenticated)
*   **Dashboard Home:** Overview of user credits, recent activity, and quick-start actions.
*   **Creation Studio (Upload Page):** Interface to upload source photography, input scripts, and select voice/TTS options.
*   **Generation Queue:** Real-time progress tracker (Script -> Avatar -> Voice -> Generate -> Review).
*   **Library / Assets:** Preview, download (in 4K), and manage finalized avatar videos.
*   **Settings & Billing:** Stripe integration for credit top-ups and subscription management.

### Guild Admin Dashboard (Internal)
*   **Human-in-the-Loop Review:** Interface for "Journeymen" and "Masters" to review raw AI outputs, apply color grading, fix lip-sync issues, and approve before sending to clients.
*   **Ecology Ledger:** Tracking system to calculate GPU compute time and allocate the 15% Ecology Fund.

## 6. Three-Month Implementation Plan

### Month 1: Phase 1 - Digital Infrastructure & Foundation
*   **Week 1:** Initialize Next.js project, setup Tailwind CSS matching the Figma design. Deploy base project to Vercel.
*   **Week 2:** Integrate Clerk for authentication and protect dashboard routes. Setup Supabase database, define schemas, and configure RLS.
*   **Week 3:** Build the frontend UI: Landing Page, Dashboard Home, and Creation Studio pages.
*   **Week 4:** Integrate Stripe for payment processing and credit allocation. Finalize Phase 1 UI/UX.

### Month 2: Phase 2 - AI Pipeline Connection & Backend Orchestration
*   **Week 5:** Setup Contabo VPS with Python/FastAPI to act as the central task orchestrator.
*   **Week 6:** Configure RunPod endpoints and ComfyUI workflows for the "Master Driver" AI architecture (Wan2.2, LivePortrait, TTS).
*   **Week 7:** Connect the Next.js Creation Studio to the Contabo API to send upload data securely to the RunPod generation queue.
*   **Week 8:** Develop the internal "Guild Admin Dashboard" to allow artists to intercept raw generation for human-in-the-loop refinement.

### Month 3: Phase 3 - Polish, Automation & Commercial Fulfillment
*   **Week 9:** Implement the **Ecology Ledger** logic to track exact GPU compute seconds per task and calculate the 15% carbon offset fund.
*   **Week 10:** Integrate automated secondary upscaling (e.g., Topaz Video AI or similar) to ensure 4K 60fps final delivery.
*   **Week 11:** Implement Webhooks to notify users when their video is ready. Complete the Library/Assets page for secure 4K downloads.
*   **Week 12:** End-to-end testing, bug fixing, performance optimization, and final presentation of the working pipeline to the team.
