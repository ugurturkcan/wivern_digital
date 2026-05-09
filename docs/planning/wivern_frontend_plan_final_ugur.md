Wivern Digital - Front-End Implementation Plan

# 1. Tech Stack & Infrastructure

* Core Framework: Next.js (App Router) & React
* Styling & UI: Tailwind CSS
* Authentication & Identity: Clerk
* Database (DB): Supabase (PostgreSQL)
* API Communication: Standard JavaScript Fetch API
* Version Control: Git & GitHub

# 2. Services & Deployment

* Frontend Hosting & Domain: Vercel
* AI GPU Server / Backend: Contabo (VPS) / RunPod
* Payment Gateway: Stripe

# 3. Security Considerations

* Data Privacy: Implementation of Supabase Row Level Security (RLS) to ensure users can only access their own uploaded assets and generated avatars.
* Authentication: Secure session management and API route protection utilizing Clerk's JWT-based authentication.
* Asset Security: Secure, encrypted storage of client source files and generated 4K videos in cloud storage prior to delivery.

# 4. Detailed Pricing & Cost Overview

## A. Core Infrastructure (Fixed/Monthly)

* Clerk (Auth): Free tier covers up to 10,000 monthly active users. Pro starts at $25/month.
* Supabase (DB/Storage): Free tier available for MVP. Pro starts at $25/month for scale.
* Vercel (Hosting): Free (Hobby tier) for development. Pro starts at $20/month/user for production.

## B. AI Backend & GPU Compute (Variable)

* Contabo (VPS): ~€5.50 to €50/month depending on background task routing and CPU needs.
* RunPod (GPU Cloud): Hourly billing based on usage. RTX 3090 (~$0.20/hr) for testing, RTX 4090 (~$0.35 - $0.60/hr) for balanced production, A100 80GB (~$0.90 - $1.40/hr) for heavy video models like Wan 2.2.

## C. Generation Cost Estimates (Per Reel)

* API Mode (Month 1-2): $0.80 - $3.50 per final reel (using external API services like Replicate or D-ID).
* Open-Source Mode (Month 3): $0.04 - $0.15 per final reel (using local models like Flux.1, MuseTalk, and Wan 2.2 on RunPod).

# 5. Website Pages List

## Public Pages:

* Landing Page (Hero section, how it works, pricing, examples)
* Auth Pages (Clerk Login / Sign Up / Forgot Password)

## User Dashboard (Authenticated):

* Dashboard Home (Overview of user's credits and recent projects)
* New Generation / Upload Page (Interface to upload source photos, scripts, and audio)
* Generation Status Page (Progress tracking for the AI pipeline)
* Library / History Page (Preview and download finalized 4K avatar videos)
* Profile & Billing Settings

# 6. Three-Month Implementation Plan

## Month 1: Foundation, Auth & Infrastructure

* Initialize the Next.js project structure and configure Tailwind CSS.
* Deploy the initial build to Vercel and route the Wivern domain.
* Integrate Clerk for user authentication.
* Set up the Supabase database and configure initial tables.
* Integrate Stripe payment gateway for commercial transactions.
* Develop the Landing Page and Dashboard UI layouts.

## Month 2: State Management & API Integration

* Implement global state for user sessions and file handling.
* Connect the frontend 'Upload' interfaces with the backend APIs.
* Develop the 'Generation Status' page to fetch and display real-time progress from the AI pipeline.
* Integrate video playback features for the 'Library/Preview' page.

## Month 3: Refinement, QA & Security

* Implement strict error handling, form validations, and loading states.
* Configure Supabase Row Level Security (RLS).
* Ensure 100% mobile responsiveness and optimize performance.
* Conduct final end-to-end testing with the backend pipeline.