# VEXTRON Backend

Node.js + Express API for the VEXTRON frontend on GitHub Pages.

## Stack

- Frontend: GitHub Pages at `vextron.pro`
- Backend: Express on Railway or Render
- Database/Auth: Supabase PostgreSQL
- Payments: Paddle Billing

## Endpoints

- `GET /api/health`
- `GET /api/profile` with `Authorization: Bearer <supabase_access_token>`
- `POST /api/checkout` with `Authorization: Bearer <supabase_access_token>`
- `POST /api/paddle/webhook`

## Local Setup

```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

Fill `.env` with live Supabase and Paddle values before deployment.

## Deploy

### Render

Use `backend/render.yaml`, or create a Web Service with:

- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`

### Railway

Create a Railway service from the GitHub repo and set the root directory to `backend`.

## Paddle Webhook

Create a Paddle notification destination:

```text
https://YOUR_BACKEND_DOMAIN/api/paddle/webhook
```

Copy the notification destination secret into `PADDLE_WEBHOOK_SECRET`.
