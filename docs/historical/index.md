---
title: Translations of W3C standards and notes — Historical reports
description: List of translated W3C Recommendations (authorized and volunteer translations)
---
{% include custom_css.html %}

<p>For reference or inspiration, this page lists translations of <a href="https://www.w3.org/standards/types/#x5-2-superseded-recommendation">superseded</a>, <a href="https://www.w3.org/standards/types/#x5-3-obsolete-recommendation">obsolete</a>, and outdated specifications.</p>

<p><strong>Note:</strong> In case of disputes, the authoritative version of the specification is the original, English document.</p>

<nav class="l-cluster">
    <ul class="clean-list">
        <li><a href="../">View translations of current W3C standards and notes</a></li>
    </ul>
</nav>

<div class="translations-list">
{%- assign exceptions = "s-WCAG22, s-WCAG21" -%}
{% assign cfts = site.data.translations | where_exp:"item","item.isLatest == false and item.countPublishedTranslations > 0" %}
{%- for cft in cfts -%}
    {%- unless exceptions contains cft.id -%}
        {% include spec-listing.html filter="outdated" %}
    {%- endunless -%}
{%- endfor %}
</div>