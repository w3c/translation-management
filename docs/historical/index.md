---
title: Translations of W3C standards and notes — Historical reports
description: List of translated W3C Recommendations (authorized and volunteer translations)
stylesheets:
  - ../css/translation-management.css
---

For reference or inspiration, this page lists translations of [superseded](https://www.w3.org/standards/types/#x5-2-superseded-recommendation), [obsolete](https://www.w3.org/standards/types/#x5-3-obsolete-recommendation), and outdated specifications.

**Note:** In case of disputes, the authoritative version of the specification is the original, English document.

<nav class="l-cluster">
    <ul class="clean-list">
        <li><a href="../">View translations of current W3C standards and notes</a></li>
    </ul>
</nav>

<section class="translations-list">
{%- assign exceptions = "s-WCAG22, s-WCAG21" -%}
{% assign cfts = site.data.translations | where_exp:"item","item.isLatest == false and item.countPublishedTranslations > 0" %}
{%- for cft in cfts -%}
    {%- unless exceptions contains cft.id -%}
        {% include spec-listing.html filter="outdated" %}
    {%- endunless -%}
{%- endfor %}
</section>