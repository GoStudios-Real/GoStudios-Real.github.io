# GoStudios Real Hub — design system

## Surface

The hub is a persuasive project launchpad. Its visitor should recognize the range of projects, choose one quickly, and reach a live page or source repository with minimal friction.

## Visual world

The page uses the graphic language of an arcade-expo field guide: a cobalt route board, perforated paper plates, bold destination stamps, and a dotted print texture. The route map acts as a working index rather than decoration; every stop links to its matching project entry.

### Palette

| Role | Value | Use |
|---|---|---|
| Ink | `#172240` | Header, type, outlines, hard offset shadows |
| Paper | `#f2eedf` | Page stock and route-map background |
| Paper light | `#fffdf5` | High-contrast surfaces |
| Cobalt | `#4155e8` | Hero field and primary action state |
| Lime | `#d7f16b` | Route highlights and call to action |
| Coral | `#ff7453` | Windows project plate and focus outline |
| Rose | `#eea8c0` | ROBLOX UBERS project plate |
| Sky | `#a9d8e8` | GoConsoleOS and GoBrowserOS plates |

Other project plates use the same print vocabulary with distinct, high-contrast fills. Body and display text use local Arial/Segoe system stacks; no remote font or asset dependency is required.

## Composition and components

- The desktop hero pairs an oversized two-line invitation with an eight-stop route board. At narrow widths the board moves first so project destinations remain immediately accessible.
- Project entries form an asymmetric album spread. Each plate pairs a real project image or a feature-specific CSS illustration with a short summary and direct actions.
- Live pages and source-only projects are differentiated in their links and copy. Project-specific caveats remain beside the relevant entry.
- Controls use square geometry, ink outlines, paper fills, and offset shadows. Hover states shift the plate; keyboard focus uses a visible coral outline.

## Responsive and motion behavior

The project spread changes from a twelve-column composition to a two-column tablet layout and a single-column mobile stack. The route board retains its two-column, four-row index on phones. Navigation collapses to a labeled menu below 720px.

The route stops use a brief staggered arrival; hover motion is limited to small positional shifts. `prefers-reduced-motion` disables nonessential animation and smooth scrolling.

## Accessibility and content

Semantic landmarks, a skip link, descriptive image text, named links, and keyboard-operable controls are required. The page remains understandable without decorative CSS artwork. AI capabilities are identified only on projects that actually include them. Claims, destinations, and third-party disclaimers must stay aligned with public project sources.
