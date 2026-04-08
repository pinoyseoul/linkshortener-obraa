# PinoySeoul Link Shortener

Internal URL shortening service for PinoySeoul, running entirely on Cloudflare's edge network.

## What It Does

- Shorten URLs with custom or AI-generated slugs
- Track clicks, visitors, referrers, and geographic data
- Set link expiration and device-specific redirects (iOS/Android)
- Generate QR codes for any shortened link
- Import/export links in bulk (JSON/CSV)
- Multi-language dashboard (9 languages)
- Dark mode support

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Nuxt 4 + Nitro |
| Runtime | Cloudflare Workers |
| Storage | Workers KV |
| Analytics | Workers Analytics Engine |
| UI | shadcn-vue + Tailwind CSS |
| AI | Cloudflare Workers AI |

## Quick Start

### Prerequisites

- Node.js 22+
- pnpm
- Cloudflare account with Workers enabled

### Setup

```bash
pnpm install
cp .env.example .env
# Edit .env with your Cloudflare credentials
```

### Development

```bash
pnpm dev
```

### Build

```bash
NUXT_SITE_TOKEN=your-token npx nuxt build
```

### Deploy

```bash
npx wrangler deploy
```

Or push to `main` — GitHub Actions handles the rest.

## Configuration

See [`.env.example`](.env.example) for all available environment variables.

Key variables:

| Variable | Purpose |
|----------|---------|
| `NUXT_SITE_TOKEN` | Dashboard access password (min 8 chars) |
| `NUXT_CF_ACCOUNT_ID` | Cloudflare account ID |
| `NUXT_CF_API_TOKEN` | Cloudflare API token (needs Workers + KV + R2 + Analytics permissions) |
| `NUXT_DATASET` | Analytics Engine dataset name |
| `NUXT_AI_MODEL` | Cloudflare AI model for slug generation |

## Architecture

```
User → a.pinoyseoul.com → Cloudflare Worker
                              ├── KV (link storage)
                              ├── Analytics Engine (click tracking)
                              ├── R2 (daily backups)
                              └── Workers AI (smart slugs)
```

## Credits

Forked from [Sink](https://github.com/miantiao-me/sink) by miantiao. Whitelabeled and customized for PinoySeoul.

## License

MIT
