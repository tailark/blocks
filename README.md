# Tailark Registry

Open source shadcn/ui registry for Tailark blocks and pages.

## Endpoints

The registry ships two bases: **Base UI** (`base`) and **Radix UI** (`radix`). Base UI is the default, so it is served under `/r` without a base segment.

Base UI (default):

- `/r/registry.json` returns the full Base UI registry index.
- `/r/[name]` returns a single Base UI registry item with file contents.

Radix UI:

- `/r/radix/registry.json` returns the full Radix UI registry index.
- `/r/radix/[name]` returns a single Radix UI registry item with file contents.

## Registry namespace

Consumers install items through shadcn [registry namespace](https://ui.shadcn.com/docs/registry/namespace). Add the `@tailark-oss` namespace to your project's `components.json`. Base UI is the default namespace, and Radix UI is available under a dedicated one:

### Default (Base UI)

```json
{
  "registries": {
    "@tailark-oss": "https://oss-tailark.com/r/{name}",
  }
}
```

### Radix UI

```json
{
  "registries": {
    "@tailark-oss": "https://oss-tailark.com/r/radix/{name}",
  }
}
```

Then install any block or page by name:

```bash
# Base UI (default)
npx shadcn@latest add @tailark-oss/dusk-hero-section-one

Browse available item names at `/r/registry.json` (Base UI) or `/r/radix/registry.json` (Radix UI).
```
## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3003/registry` to inspect the registry index.


## Start Using

Visit [Tailark](https://tailark.com) to start using Tailark.

## Contributing

Learn more about [Contributing](CONTRIBUTING.md).

## License

Tailark is released under the [MIT License](LICENSE).


<br />
<br />
<a href="https://vercel.com/oss">
  <img alt="Vercel OSS Program" src="https://vercel.com/oss/program-badge.svg" />
</a>