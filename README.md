# LTB Website Source Repository

## Overview

This repository contains the source code for the LTB project website. The site is hosted using GitHub Pages at `curent.github.io` and redirects to `ltb.curent.org` (see the `CNAME` file for details). The website is built using the Minimal Mistakes Jekyll theme.

## Changes We've Made Based on the Original Template

- Removed the `tests` and `docs` folders from the root directory.
- Added a citation feature by including `assets/js/citation.js` and revising `_includes/scripts.html`, but it did not work as expected.
- Added an impact map to the home page (see `index.html`), based on the Leaflet library.
- Updated configuration files `_config.yml` and `_data/navigation.yml`.
- Added other pages and materials.

## How to Run the Website Locally

To run the website locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CURENT/curent.github.io.git ltbweb
   cd ltbweb
   ```

2. **Install Jekyll and Bundler:**
   ```bash
   bundle install
   ```

3. **Build the site and make it available on a local server:**
   ```bash
   bundle exec jekyll serve
   ```
   The site will be available at `http://localhost:4000`.

For new to Jekyll, see [GitHub Pages - Testing site localy with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll) for more information.

## Contributing

We welcome contributions! For reporting typos, adding new showcases, or adding affiliations to the map, please use the existing issue templates:

- Report a Typo or Inaccurate Information
- Add a New Showcase
- Add an Affiliation to the Map

For other contributions, please read our contributing guide.

## License

This project is licensed under a [MIT License](./LICENSE). Note that the license applies only to the LTB website source code, not the Minimal Mistakes theme itself.

This repository is based on the Minimal Mistakes theme, which is licensed under the MIT license.
