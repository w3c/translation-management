---
title: Authorized translations of W3C standards and notes
---
{% include custom_css.html %}

<p>Authorized W3C translations are developed through a <a href="https://www.w3.org/2005/02/TranslationPolicy.html">process</a> designed to achieve quality translations through transparency and community accountability.</p>

<p><strong>Note:</strong> In case of disputes, the authoritative version of the specification is the original, English document.</p>

<nav class="l-cluster">
    <ul class="clean-list">
        <li><a href="../">View all translations (including volunteer translations)</a></li>
    </ul>
</nav>

<div class="translations-list">
{%- assign exceptions = "s-WCAG22, s-WCAG21" -%}
{% assign cfts = site.data.translations | where_exp:"item","item.isLatest == true or exceptions contains item.id" | where_exp:"item","item.countPublishedTranslations > 0 and item.hasAuthorizedTranslations.size > 0" %}
{%- for cft in cfts -%}
    {% include spec-listing.html filter="authorized" %}
{%- endfor %}
</div>