# Frontend (Next.js)

Quick start:

1. Copy `.env.local.example` to `.env.local` and fill Supabase keys.
2. Install dependencies: `npm install`
3. Run dev: `npm run dev`

Environment variables (frontend):

- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key
- `NEXT_PUBLIC_API_URL` - Backend API base (e.g. `http://localhost:4000`)
- `NEXT_PUBLIC_STRIPE_PK` - Stripe publishable key (set to your `pk_test_...` for test mode)

Vercel env variables to add (at minimum):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-side only)
- `STRIPE_SECRET_KEY` (server-side only)
- `STRIPE_WEBHOOK_SECRET` (server-side only)
- `NEXT_PUBLIC_STRIPE_PK` (client-side publishable key)
- `NEXT_PUBLIC_API_URL` (optional)

Deployment (Vercel):

1. Push repository to GitHub.
2. Create a new Vercel project and connect the GitHub repo.
3. Add the frontend env vars in Vercel project settings.
4. Deploy — Vercel will detect Next.js app and build.

Notes:
- Ensure Supabase storage bucket `products` exists and files are accessible (public or signed URL flows).
- For production, use `NEXT_PUBLIC_SUPABASE_ANON_KEY` only for client-side; keep service role key on backend.
