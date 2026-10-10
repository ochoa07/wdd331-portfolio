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