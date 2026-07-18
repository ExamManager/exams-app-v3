# ExamManager v3

T3 / Drizzle SaaS rewrite of ExamManager — organizations, billing, admin, docs, and exam surfaces.

Latest architecture in the ExamManager portfolio.

## Stack

- Next.js App Router and React
- TypeScript, Tailwind CSS
- Drizzle ORM + Postgres
- NextAuth.js
- Stripe subscriptions
- Resend email
- UploadThing
- Yarn

## Features

- Multi-org accounts and invites
- Stripe billing tiers
- Admin and feedback flows
- MDX documentation
- Exam management UI (evolving)

## Local development

```bash
yarn install
cp .env.example .env
yarn db:push
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). Optional local Postgres helper: `./start-database.sh`.

## Environment

See `.env.example` and `src/env.js` for the full schema. Typical groups:

- `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`
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
