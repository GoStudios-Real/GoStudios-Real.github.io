# GoStudios Real — one hub for the whole public catalogue

A single-page, research-first guide to the public **GoStudios-Real** GitHub organisation: PlayTree, GoConsoleOS, Windows 11 Fast & Light, Care & Grow An Chicken, ROBLOX UBERS, Roblox Studio Android Edition, GoBrowserOS, GoAI and every public repository in one place.

> **This is an independent research hub, not an official GoStudios product site.** It is built from public READMEs, repository metadata and live pages. See [Research notes](#research-notes) below.

## What is in this repository

```
.
├── index.html          # the whole site (single page, anchors, filterable catalogue)
├── assets/
│   ├── styles.css      # hand-written design system, responsive layout, CSS art
│   ├── app.js           # mobile nav, scroll progress, reveal, catalogue filter/search, copy buttons
│   └── img/             # public screenshots, banners and logos used for commentary
├── .nojekyll           # tells GitHub Pages to serve the assets folder as-is
└── README.md
```

No build step, no framework, no external fonts or CDNs. Open `index.html` in a browser, or serve the folder with any static server.

## Sections

| Section | Covers |
|---|---|
| **Hero / overview** | The studio in one screen, public repo count and headline numbers |
| **PlayTree** | Chapter 0 Season 0 deep dive: lore, world, combat, Astro Toilets, tech, links; PlayTree-App and playtree-game-art |
| **GoConsoleOS** | Desktop USB shell plus Linux, Android, VR, Web ACC, Theme and Mail branches |
| **Windows 11** | Fast & Light 26H2.3 — all 12 reversible optimisations, install snippet and safety notes |
| **Games & experiences** | Care & Grow An Chicken, Build Ur Own Solar System, Pixel City and ROBLOX UBERS |
| **Tools** | Roblox Studio Android Edition, GoBrowserOS, Portable USB Stick and GoAI |
| **Catalogue** | Filterable/searchable cards for all 19 public repositories + 2 labelled PlayTree Studio concepts |
| **Timeline** | Public repo milestones from August to November 2026 |
| **Research** | Sources, verification status and transparency notes |

## Research notes

Everything was checked against public sources on **7 November 2026**.

- **Source of truth:** [github.com/GoStudios-Real](https://github.com/GoStudios-Real), each project's `README.md`, the [PlayTree itch.io page](https://playtree-corporation.itch.io/playtree), the [PlayTree project page](https://gostudios-real.github.io/GoStudios-Real-playtree.github.io/), the [PlayTree web app](https://playtree-play.base44.app) and the [GoConsoleOS Account Center](https://gostudios-real.github.io/GoConsoleOS-Web/).
- **Build Ur Own Solar System** and **Pixel City** have **no public repository or live build** in the GoStudios-Real org as of the research date. They are clearly labelled as *PlayTree Studio showcase concepts* with feature profiles, not invented download links.
- **Windows11Update** is a community project by GoStudios and is **not affiliated with Microsoft**. The page states that every change is reversible.
- **ROBLOX UBERS** is an in-Roblox roleplay transit app, not real-world transport. It cannot script third-party experiences such as official Brookhaven or Bloxburg.
- Version numbers, feature counts and platform support come from each repository's own documentation. Where docs differ, the most recent public README is used.

## Run locally

Any static server works. For example:

```bash
# Python
python -m http.server 8080

# Node (if installed)
npx serve .
```

Then open <http://localhost:8080>.

## Publish to GitHub Pages

This repo is designed for the **GoStudios-Real.github.io** user-site repository:

1. Push `index.html`, `assets/`, `.nojekyll` and this README to the default branch.
2. In **Settings → Pages**, choose **Deploy from a branch** → `main` → `/ (root)`.
3. The site is served at <https://gostudios-real.github.io/>.

The `.nojekyll` file is required so the `assets` directory is served unchanged.

## Editing the catalogue

Each card in `index.html` carries:

```html
<article class="repo-card" data-cats="games web" data-search="playtree pygame fantasy">
```

- `data-cats` is a space-separated list of filter keys: `games`, `console`, `windows`, `tools`, `mobile`, `web`.
- `data-search` adds extra keywords for the search box.
- Card visibility is handled in `assets/app.js`; the empty state appears automatically.

## Image credits

Screenshots, banners and logos are taken from the public GoStudios-Real repositories and live project pages, and are used here for identification and commentary. They remain the property of their respective owners. PlayTree, GoConsoleOS and related marks belong to GoStudios; Windows is a trademark of Microsoft Corporation; Roblox is a trademark of Roblox Corporation.

## Licence

The hub's own HTML, CSS, JavaScript and written research are released under the **MIT Licence**. Third-party images, names and marks retain their original ownership and are not relicensed by this repository.
