# James Drew — 360 Portfolio

A responsive, Xbox 360-inspired portfolio dashboard built as a dependency-free static site.

## Design goal

The portfolio is designed to give visitors the same sense of nostalgia as opening the Xbox 360 dashboard. Its grey atmospheric background, green interface accents, tiled navigation, page blades, carousel interactions, controller prompt, and profile treatment reinterpret that console experience as a professional portfolio.

Projects are presented like games in a console library. Each one uses custom game-cover artwork so browsing technical work feels familiar, playful, and nostalgic rather than like reading a conventional project list. The covers borrow the visual language of memorable game packaging while giving each project its own subject, title, and technical identity.

## Built with Codex

I used OpenAI Codex as a collaborative development and design tool throughout the project. Codex helped translate the Xbox 360-inspired direction into responsive HTML, CSS, and JavaScript; iterate on interactions such as page swiping and the draggable project carousel; integrate project artwork and résumé assets; and test the experience across desktop and mobile layouts. The final content and design decisions were guided through an iterative process focused on nostalgia, usability, and presenting my technical strengths clearly.

## Run locally

From this directory:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Add a project

Project content is rendered from the `PROJECTS` array near the top of `app.js`. Add one object with an image, description, tags, stats, and URL; the project library and dashboard count update automatically.

## Controls

- Click or use Tab + Enter to select a tile.
- On the Projects screen, drag/swipe the shelf or use the Left/Right arrows to move through the carousel.
- Press Escape or B to return home.

The layout includes dedicated desktop, tablet, and phone breakpoints. Mobile keeps all four primary navigation destinations visible and converts the content-heavy screens into readable stacked layouts.

The two game-inspired project cover artworks were generated specifically for this portfolio. The [Sample Gates photo](https://commons.wikimedia.org/wiki/File:Indiana_University_Bloomington_Sample_Gates_-_panoramio.jpg) is by H. Suzuki via Wikimedia Commons (CC BY-SA); the [Colts game-day photo](https://www.visitindy.com/things-to-do/sports/indianapolis-colts/) is from Visit Indy.
