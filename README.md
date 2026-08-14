# Puja Dahal — Portfolio

This is the complete, portable source for `pujadahal.com.np`. It can be stored
in any GitHub repository and deployed on Cloudflare Pages, without depending on
ChatGPT for hosting.

## The easiest edits

Open `src/portfolio-content.ts`. This one file contains the portfolio's words,
email address, links, project information, and photo filenames. Edit only the
text between quotation marks and keep the surrounding punctuation.

Photographs are in `public/`:

- `puja-profile.jpeg` — opening portrait
- `puja-editorial.jpeg` — About-section portrait

Replacing a photo with another image that has the same filename requires no
code change.

## Change the appearance

Open `src/styles.css`:

- the colour palette is at the top under `:root`
- typography, spacing, and section layouts follow below it
- phone and tablet layouts are at the bottom under `@media`

Open `src/App.tsx` to change section order, page structure, buttons,
interactions, doodles, or the ten optional desktop cursors.

## Preview on your computer

Install Node.js, open this folder in a terminal, and run:

```bash
npm install
npm run dev
```

The terminal will show a local address. Open it in a browser. Press `F12` and
use the device toolbar to check both phone and laptop sizes.

## Publish through GitHub and Cloudflare Pages

1. Upload every file and folder in this project to your GitHub repository.
2. In Cloudflare, create or open a Pages project and connect that repository.
3. Use `npm run build` as the build command.
4. Use `dist` as the build output directory.
5. Select the production branch used by the repository, normally `main`.

Cloudflare will publish the site after each GitHub commit. The domain remains
under your control, and GitHub keeps the history of earlier versions.
