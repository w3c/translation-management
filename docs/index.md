---
title: Translations of W3C standards and drafts
description: List of translated W3C standards and drafts (authorized and volunteer translations)
feed: https://www.w3.org/translations/feed/
---

## Translations of current W3C standards and drafts  {#current}

This is the list of translations of current [W3C standards and drafts](https://www.w3.org/TR/). [<img class="icon" src="https://www.w3.org/assets/website-2021/svg/rss.svg" width="30" height="30" alt="RSS feed" aria-hidden="true">]({{page.feed}})

See also [**how to contribute**](contribute/) to W3C translation efforts.

{% assign cfts = site.data.translations %}
{%- for cft in cfts -%}
  {%- if cft.isLatest -%}
    {% include spec-listing.html %}
  {% endif -%}
{%- endfor %}

## Translations of historical W3C standards and drafts  {#historical}

<details>
  <summary>For reference or inspiration, translations of historical standards and drafts are listed below.</summary>
  <p>Historical technical reports are ones that have been superseded or marked as obsolete.</p>

  {%- for cft in site.data.translations -%}
  {%- unless cft.isLatest -%}
    {% include spec-listing.html %}
  {% endunless -%}
  {%- endfor -%}
</details>
