# uva-wrapper

A type-safe api wrapper for the unofficial-valorant-api (uva) by Henrik3.

## Currently supported versions

Newest version: **v4.9.0**

Changelog: [https://docs.henrikdev.xyz/valorant/changes/v4.9.0](https://docs.henrikdev.xyz/valorant/changes/v4.9.0)

## Installation

npm:

```bash
  npm install uva-wrapper
```

yarn:

```bash
  yarn add uva-wrapper
```

bun:

```bash
  bun add uva-wrapper
```

pnpm:

```bash
  pnpm add uva-wrapper
```

## Usage/Examples

```typescript
import { UnofficialValorantAPI } from "uva-wrapper";

const uva = new UnofficialValorantAPI("your-api-key"); // ideally process.env.API_KEY or anything private

uva.Misc.v1.getStatus();
```

## unofficial-valorant-api

- [Docs for the unofficial-valorant-api](https://docs.henrikdev.xyz/general/auth)
- [Henrik3's portfolio](https://henrikdev.xyz/)
- [unofficial-valorant-api github repository](https://github.com/Henrik-3/unofficial-valorant-api)

## Authors

- [@leontm-dev](https://www.github.com/leontm-dev)
