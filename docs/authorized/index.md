---
title: Authorized Translations of W3C Recommendations
---

[Authorized W3C Translations](https://www.w3.org/2005/02/TranslationPolicy.html) are developed through a process designed to achieve quality translations through transparency and community accountability. They can be used for official purposes in languages other than English.

See also the [broader list of translations of W3C Recommendations](../) (including volunteer translations).

{% assign cfts = site.data.translations | sort: "date"|reverse %}
{%- for cft in cfts -%}
{% if cft.hasAuthorizedTranslations %}
<section>
  <h2 id="{{cft.id}}" class="txt-mars"><a href="{{cft['spec-version'].uri}}">{{cft.title}}</a></h2>
  <ul>
    {% for translation in cft.translations -%}
    {%- if translation.states contains 'published' and translation.authorized -%}
    <li>{% include translation-details.html %}</li>
    {% endif %}
    {%- endfor -%}
  </ul>
</section>

{% endif -%}
{%- endfor -%}
