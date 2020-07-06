---
layout: visobs
title: visobs
---

{% for site in site.visobs %}

<figure>
  <img src="{{ site.url }}" alt="{{ site.description }}">
  <figcaption><a href="{{ site.link }}">{{ site.description }}</a></figcaption>
</figure>

<div class="projectcontainer">
<a href="{{project.url}}"><div class="projectdiv {{evenodd}}">
<img src="{{project.heroimage}}" />
<div class="projecttitle">{{project.title}}<br>
<span>{{project.subtitle}}</span><br><br>
<p class="mobilehidden">Learn more <i class="fa fa-angle-double-right" aria-hidden="true"></i></p>
</div>
</div></a>
</div>

{% endfor %}
