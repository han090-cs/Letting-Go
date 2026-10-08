
## English

A private, ephemeral, offline-first web app for writing down what feels heavy and watching it burn, drift or blow away. Nothing you write is saved, sent or tracked.

**Highlights**: works on phones, tablets and desktops; installable PWA with full offline pre-cache; bundled Burmese font (no CDN); naturally rewritten Burmese copy and syllable-level Burmese text splitting; Zawgyi detection; evidence-informed flow (expressive writing, affect labeling, symbolic disposal, optional before/after weight check, 4-in/6-out breathing guide); local-only crisis keyword check with support links; automatic dark mode; keyboard and screen-reader support; feedback by email from the About sheet.

```bash
npm ci && npm run dev     # develop
npm test                  # unit tests
npm run build             # production build in dist/
```

**Deploy**: push to `main`, set *Settings → Pages → Source* to *GitHub Actions*. The workflow tests, builds and publishes.

**Built to need no maintenance**: exact dependency versions plus a lockfile, `npm ci` in CI, zero runtime network dependencies, and a service worker that versions itself on every build.

**Privacy**: nothing you write leaves the device. Only your language choice is remembered locally. This is a reflective tool, not medical care or an emergency service.

Creator: [github.com/han090-cs](https://github.com/han090-cs) · MIT License
