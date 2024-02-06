# CURENT LTB Web

![Last Updated](https://img.shields.io/github/last-commit/CURENT/curent.github.io.svg?label=last%20update) [![pages-build-deployment](https://github.com/CURENT/curent.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/CURENT/curent.github.io/actions/workflows/pages/pages-build-deployment) [![LTB Web Tests](https://github.com/CURENT/curent.github.io/actions/workflows/ltbweb.yml/badge.svg?branch=develop)](https://github.com/CURENT/curent.github.io/actions/workflows/ltbweb.yml)

The LTB website is built using the Jekyll Theme [Feeling Responsive](https://github.com/Phlow/feeling-responsive).

## Content

### Layout

The content of most pages is written in Markdown, as seen in files stored in the `pages` folder. Additionally, some pages are formatted using HTML, offering greater flexibility. Examples of HTML-formatted pages include the [ltb](_layouts/home.html) and [team](_layouts/team.html) pages.

### Structure

- **Homepage**: [LTB](_layouts/about.html) serves as the homepage of the website.
- **Product**: in Product, it contains more sub-pages stored in `_posts/product`.
- **Showcase**: in Showcase, it contains more sub-pages stored in `_posts/showcase`.

### Configurations

Certain configurations and data are defined in files located within the `_data` directory.

## Maintenance

The maintenance and updates to this website should follow a specific workflow to ensure smooth development and deployment:

1. **Branches**: All updates should be made and tested on the `develop` branch first.
2. **Sync with Master**: Ensure the `develop` branch is up to date with the `master` branch.
3. **Local Testing**: Run the Jekyll site locally on the `develop` branch using the following command: ``bundle exec jekyll serve``
4. **Pull Request**: When you're ready to deploy the updates, create a pull request to merge the updated `develop` branch into the `master` branch. Ensure that the PR passes the tests defined in [LTB Web Tests](.github/workflows/ltbweb.yml).
5. **Deployment**: After the deployment, the website will be updated automatically by GitHub Pages.

## References

- [Testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)
- [Feeling Responsive Documentation](https://phlow.github.io/feeling-responsive/documentation/)
- [Feeling Responsive](http://phlow.github.io/feeling-responsive/)
