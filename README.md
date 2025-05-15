# Zero on Railway

This template is the maybe easiest and most cost effective way to deploy [Zero](https://zero.rocicorp.dev).

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/template/s9CW6Y?referralCode=vw4T4E)

To start the DB:

```bash
docker compose up -d
```

To install dependencies:

```bash
bun install
```

To migrate the DB:

```bash
cd packages/db && bun run migrate:dev
```

```bash
bun run dev
```

in apps/api, apps/app and packages/zero to run everything locally.
