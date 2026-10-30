# WDD 331R Portfolio

**Student:** Chelsea Ochoa Mata  
**Semester:** Fall 2026  
**Live Site:** [View Site](https://ochoa07.github.io/wdd331-portfolio/)

## About

This is my portfolio for WDD 331R Advanced CSS.
I add projects as I learn new ways to organize and style websites.

The site deploys to GitHub Pages after each push to main.

## Pages

- [Home](index.html)
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Layered Components](unit-2/layered-components/index.html)
- [Custom Media Queries](unit-2/custom-media/index.html)
- [Tokenized Color System and Dark Mode](color-system.html)
- [Visual Effects](https://ochoa07.github.io/wdd331-portfolio/unit-3/visual-effects/)
- [Clip Path and Mask Image](https://ochoa07.github.io/wdd331-portfolio/unit-3/clip-and-mask/)
- [Editorial Layout](unit-4/grid-layouts/editorial.html)
- [Responsive Card Grid](unit-4/grid-layouts/cards.html)


## Color System and Dark Mode

The homepage and color system page support light mode, dark mode,
and a system default option.

Color tokens live in css/tokens/colors.css. The accent uses oklch(),
and color-mix() creates lighter and darker versions. Semantic tokens
use light-dark() to provide colors for both themes.

The theme toggle styles live in css/components/theme-toggle.css.
The script in js/theme-preference.js saves the selected theme
in localStorage so it stays when refreshing or moving between pages.

Both pages load the shared css/main.css stylesheet.
Earlier standalone demos keep their own scoped styles.


## CSS Organization

The shared CSS uses five layers in this order:
tokens, base, layout, components, and utilities.

| Folder or file | Purpose |
| --- | --- |
| css/tokens/colors.css | Shared colors |
| css/tokens/variables.css | Spacing, fonts, radii, and shadows |
| css/base/reset.css | Resets default browser styles |
| css/base/elements.css | Styles for basic HTML elements |
| css/layout/page.css | Page width, spacing, and responsive layout |
| css/components/card.css | Hero section and project cards |
| css/utilities/utilities.css | Small reusable classes |
| css/main.css | Declares the layer order and imports the CSS files |
| dist/styles.css | Generated, bundled, and minified CSS |

The homepage loads css/main.css.
That file imports the shared styles into their matching layers.

## Build Tool

I use Lightning CSS to combine and minify the CSS files.

To install the project dependencies:

```bash
npm ci
```

To build the CSS:

```bash
npm run build
```

The build reads css/main.css and creates dist/styles.css.

I edit the source files inside css/ and run the build again
when I need to update the generated file.

## GitHub Pages

GitHub Pages publishes from the website branch at / (root).
The GitHub Actions workflow copies the repository to that branch.

The generated dist/styles.css file will committed as proof
that I ran the build tool for the Architecture and Build assignment.
The homepage continues to use css/main.css.