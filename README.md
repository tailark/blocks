# Tailark Registry

Open source shadcn/ui registry for Tailark blocks and components.

## Endpoints

- `/registry` returns the full registry index.
- `/registry.json` returns the same registry index using the conventional shadcn filename.
- `/registry/[name]` returns a single registry item with file contents.
- `/docs` contains lightweight usage notes.

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000/registry` to inspect the registry index.

## Deployment

This repo can be deployed as the public registry app. A separate closed-source landing app can own `tailark.com` and proxy registry paths to this deployment:

```ts
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/registry/:path*",
        destination: "https://tailark-registry.vercel.app/registry/:path*",
      },
      {
        source: "/registry.json",
        destination: "https://tailark-registry.vercel.app/registry.json",
      },
      {
        source: "/docs/:path*",
        destination: "https://tailark-registry.vercel.app/docs/:path*",
      },
    ]
  },
}

export default nextConfig
```

## License

MIT