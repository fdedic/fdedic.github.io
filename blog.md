---
layout: default
title: Blog
---

<div class="posts">
  {% for post in paginator.posts %}
  <article class="post">
    <h1 class="post-title">
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
      </a>
    </h1>

    <time datetime="{{ post.date | date_to_xmlschema }}" class="post-date">{{ post.date | date_to_string }}</time>

    {{ post.content }}
  </article>
  {% endfor %}
</div>

<div class="pagination">
  {% if paginator.next_page %}
    <a class="pagination-item older" href="{{ paginator.next_page_path | relative_url }}">Older</a>
  {% else %}
    <span class="pagination-item older">Older</span>
  {% endif %}
  {% if paginator.previous_page %}
    <a class="pagination-item newer" href="{{ paginator.previous_page_path | prepend: relative_url }}">Newer</a>
  {% else %}
    <span class="pagination-item newer">Newer</span>
  {% endif %}
</div>

# Archive

Browse all posts.

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
<nav class="menu browse by-year text-center" aria-label="year">
  <strong aria-hidden="true">Jump to:</strong>
  {% for year in postsByYear %}
  <a href="#{{ year.name }}"><span class="visually-hidden">jump to posts from</span>{{ year.name }}</a>
  {% endfor %}
</nav>
{% for year in postsByYear %}
<h2 id="{{ year.name }}">{{ year.name }}</h2>
<ul aria-label="posts from {{ year.name }}">
  {% for post in year.items %}
  <li>
    {% include post/post-list-item.html %}
  </li>
  {% endfor %}
</ul>
{% endfor %}
