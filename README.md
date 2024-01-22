# CURENT LTB Web

The LTB website is develoepd using the Jekyll Theme [Feeling Responsive](https://github.com/Phlow/feeling-responsive).

## Maintenance

The update should be made and tested on branch ``develop`` first, and then deployed to branch ``master`` as follow:

1. Make sure the branch ``develop`` is update to the branch ``master``
2. Update the contents in the branch ``develop``
3. Run your Jekyll site locally on branch ``develop``: ``bundle exec jekyll serve``
4. If update looks good locally, merge the updated branch ``develop`` into branch ``master`` using a pull request
5. After the deployment, the website will be updated automatically

## Content

The website contains following pages: "LTB", "ANDES", "AGVis", "DiME", "SHOWCASE", and "ABOUT".
The source files locate in the folder ``pages\`` and ``_posts/showcase``.

The navigation bar is configured by the file ``_data\navigation.yml``.

## Related resources

- [Testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)
- [Feeling Responsive Documentation](https://phlow.github.io/feeling-responsive/documentation/)
- [Feeling Responsive](http://phlow.github.io/feeling-responsive/)
