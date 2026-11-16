---
title: Authorized translations of W3C standards and notes
description: List of authorized translations of W3C standards and notes
stylesheets:
  - ../css/translation-management.css
---

Authorized W3C translations are developed through a [process](https://www.w3.org/policies/authorized-translations/) designed to achieve quality translations through transparency and community accountability.

**Note:** In case of disputes, the authoritative version of the specification is the original, English document.

<section class="translations-list">
{%- assign exceptions = "s-WCAG22, s-WCAG21" -%}
{% assign cfts = site.data.translations | where_exp:"item","item.isLatest == true or exceptions contains item.id" | where_exp:"item","item.countPublishedTranslations > 0 and item.hasAuthorizedTranslations.size > 0" %}
{%- for cft in cfts -%}
    {% include spec-listing.html filter="authorized" %}
{%- endfor %}
</section>