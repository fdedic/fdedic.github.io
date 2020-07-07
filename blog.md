---
layout: default
title: Blog
---

{% assign post = site.posts.first %}
{% assign content = post.content %}
{% include post_detail.html %}

# Archive

Browse all posts by month and year.

{% assign postsByYearMonth = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for yearMonth in postsByYearMonth %}
  <h2>{{ yearMonth.name }}</h2>
  <ul>
    {% for post in yearMonth.items %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      <time datetime="{{ post.date | date: '%Y %m %d' }}" class="post-date">{{ post.date | date: '%Y %m %d' }}</time>
    {% endfor %}
  </ul>
{% endfor %}
