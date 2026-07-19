# ExamManager v3 (deprecated portfolio demo)

Public showcase of an earlier ExamManager SaaS rewrite. **Not an active product.**

**Auth is disabled** on the live demo (`AUTH_DISABLED` defaults on). Sign-in / signup will not succeed.

Live: [exams-app-v3.vercel.app](https://exams-app-v3.vercel.app)

## Working public routes

| Route | Notes |
| --- | --- |
| `/` | Marketing home |
| `/pricing` | Pricing table (demo CTAs only) |
| `/support` | Support links |
| `/docs` | MDX documentation |

Protected app routes (`/dashboard`, `/exams`, `/feedback`, `/admin`, etc.) require a session and are not available on the public showcase.

## Stack

- Next.js App Router and React
- TypeScript, Tailwind CSS
- Drizzle ORM + Postgres
- NextAuth.js (disabled in showcase mode)
- Stripe subscriptions
- Resend email
- UploadThing
- Yarn

## Local development

```bash
yarn install
cp .env.example .env
yarn db:push
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). Optional local Postgres helper: `./start-database.sh`.

To re-enable auth locally, set `AUTH_DISABLED=false` and `NEXT_PUBLIC_AUTH_DISABLED=false` in `.env`.

## Environment

See `.env.example` and `src/env.js` for the full schema. Typical groups:

- `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`
- `AUTH_DISABLED` / `NEXT_PUBLIC_AUTH_DISABLED` (showcase defaults to disabled)
- Google / GitHub OAuth client IDs and secrets
- `RESEND_API_KEY`, Stripe keys, UploadThing keys

## Commands

| Command | Purpose |
| --- | --- |
| `yarn dev` | Development server |
| `yarn dev:turbo` | Dev with Turbopack |
| `yarn build` | Production build |
| `yarn start` | Serve production build |
| `yarn db:push` | Push Drizzle schema |
| `yarn db:studio` | Drizzle Studio |
| `yarn lint` | ESLint |

## Related repositories

| Repo | Role |
| --- | --- |
| [exams-landing](https://github.com/ExamManager/exams-landing) | Waitlist / marketing landing |
| [exams-app-v1](https://github.com/ExamManager/exams-app-v1) | Vue 3 exam timer |
| [exams-app-v2](https://github.com/ExamManager/exams-app-v2) | Next.js + Prisma exam manager |

## License

MIT — see [LICENSE](./LICENSE).
