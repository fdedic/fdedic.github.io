---
layout: visobs
title: visobs
---

{% for post in site.visobs %}
<figure>
  <img src="{{ include.url }}" alt="{{ include.description }}">
  <figcaption><a href="{{ include.link }}">{{ include.description }}</a></figcaption>
  </figure>
{% endfor %}
