---
layout: page
show_meta: false
title: "Team"
subheadline: "Team of CURENT LTB"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/team/"
---
<ul>
    {% for post in site.categories.design %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
