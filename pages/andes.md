---
layout: page
show_meta: false
title: "ANDES"
subheadline: "Python Software for Symbolic Power System Modeling and Numerical Analysis"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/andes/"
---
<ul>
    {% for post in site.categories.design %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
