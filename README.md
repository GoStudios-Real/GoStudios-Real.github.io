# GoStudios Real Hub

An independent field guide to eight public GoStudios-Real projects. Each entry explains what the project does and links to its live page or source repository.

The hub is not an official GoStudios product site. Project names, claims, and destinations are based on the public project pages and repositories; third-party marks belong to their respective owners.

## Featured destinations

- **PlayTree** — multiplayer fantasy game, playable on itch.io.
- **GoConsoleOS Web** — the ACC account portal.
- **Windows 11 Fast & Light** — a community package of reversible Windows 11 optimizations; not affiliated with Microsoft.
- **Care & Grow An Chicken** — a virtual-pet game for web, Windows, and Android.
- **ROBLOX UBERS** — an in-Roblox transit roleplay experience, not a real-world transport service.
- **Roblox Studio Android Edition** — a Studio-style editor with a 3D viewport, Lua editor, AI Builder/Coder, and Open Cloud publishing.
- **GoStudios Portable USB Stick** — a non-bootable Android 16 USB project for Windows PCs.
- **GoBrowserOS** — an Electron desktop-shell experiment; this hub links to its source repository, not a live demo.

## Run locally

The site is plain HTML, CSS, and JavaScript with no build step, framework, external fonts, or CDN dependencies. Open `index.html` directly, or serve this directory with any static server, for example:

```bash
python -m http.server 8080
```

Then visit <http://localhost:8080>.

## Files

```text
index.html       Main page and project destinations
assets/styles.css
assets/app.js    Mobile navigation and current-year footer
assets/img/      Project artwork and screenshots
```

## Publish

This repository is designed for GitHub Pages at <https://gostudios-real.github.io/>. Publish the repository root from the `main` branch. The `.nojekyll` file keeps the static assets available as-is.

## Image credits

Project images and logos are sourced from public GoStudios-Real repositories and pages for identification and commentary. They remain the property of their respective owners and are not relicensed by this repository.

## License

The hub's HTML, CSS, JavaScript, and written material are released under the MIT License. Third-party images, names, and marks retain their original ownership.
