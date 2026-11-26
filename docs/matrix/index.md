---
title: Translations of W3C standards and statements — Translation needs
description: Status of existing and ongoing translations of W3C recommendations and statements (authorized and volunteer translations)
---

This page shows which W3C standards and statements are being, have been or have not been translated. If a language does not appear in the table, it means no existing or ongoing translation is known.

<aside>
    <h2 class="h4">Get involved</h2>
    <p class="with-icon--before with-icon--larger">
            <svg aria-hidden="true" class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"/></svg>
            <a href="https://www.w3.org/translate/">Contribute to W3C translations</a>
    </p>
</aside>

Legend:
<dl class="legend grid">
<dt class="outdated"><span aria-label="outdated" role="img">✗</span></dt>
<dd>A translation of an outdated version of the specification exists; if you're the original translator, consider updating the translation; if you aren't and are willing to help, try contacting the original translator to see if they would accept contributed updates to their work</dd>
<dt class="draft"><span aria-label="intent to translate" role="img">…</span></dt>
<dd>A translator has indicated their intent to translate the specification in the said language</dd>
<dt class="review"><span aria-label="under review" role="img">🔍</span></dt>
<dd>A draft <a href="https://www.w3.org/policies/authorized-translations/">Authorized Translation</a> is under review</dd>
<dt class="published"><span aria-label="volunteer translation published" role="img">✓</span></dt>
<dd>A volunteer translation exists</dd>
<dt class="published"><span aria-label="authorized translation published" role="img">✰</span></dt>
<dd>W3C has published an <a href="https://www.w3.org/policies/authorized-translations/">Authorized Translation</a> of the specification</dd>
</dl>

<div class="table-wrap" role="region" aria-labelledby="matrix-caption" tabindex="0">
<table class="col-border">
  <caption id="matrix-caption">W3C standards and notes translation status</caption>
  <thead>
    <tr>
      <th id="specs" scope="col">Specification</th>
      {%- assign langs = site.data.langlist -%}
      {%- assign shownLangs = 0 -%}
      {%- for lang in langs -%}
          {%- if site.data.byLanguage[lang].latestRecsTotal > 0 -%}
            {%- assign shownLangs = shownLangs | plus: 1 -%}
            <th class="lang" id="{{ lang }}" scope="col"><abbr title="{{ site.data.lang[lang].name }}" aria-hidden="true">{{ lang }}</abbr><span class="visuallyhidden">{{ site.data.lang[lang].name }}</span></th>
          {% endif %}
      {%- endfor -%}
    </tr>
  </thead>
  {% assign recs = site.data.recs | where: "isLatest", true | sort: "date" | reverse %}
  {% assign recsByYears = recs | group_by: "year" %}
  {% for year in recsByYears %}
  <tbody id="y{{year.name}}" aria-live="polite">
    <tr>
      <th colspan="{{ shownLangs | plus: 1 }}" id="{{year.name}}" scope="colgroup">{{ year.name }}</th>
    </tr>
    {% for rec in year.items %}
    <tr>
      <th headers="{{year.name}} specs" id="{{ rec.shortname }}" scope="row"><a href="{{rec.shortlink}}">{{ rec.title }}</a>{% if site.data.wordCount[rec.shortname] %}<span class="word-count text-sm">{{ site.data.wordCount[rec.shortname] | divided_by: 1000.0 | round }}k words</span>{% endif %}</th>
      {% for lang in langs %}
      {%- if site.data.byLanguage[lang].latestRecsTotal > 0 -%}
      <td headers="{{year.name}} {{ rec.shortname }} {{ lang }}"{% if rec.translations %}
           {% if rec.translations[lang] %}
            class="{{ rec.translations[lang].states | join: ' ' }}"><a title="{% if rec.translations[lang].isOutdated %}Outdated {% elsif rec.translations[lang].isPending %}Ongoing {% elsif rec.translations[lang].isInReview %}Pending review {% endif %}{% if rec.translations[lang].authorized %}Authorized {% endif %}{{ site.data.lang[lang].name }} translation of {{ rec.translations[lang].origTitle }}" href="{{ rec.translations[lang].uri }}">
             {%- if rec.translations[lang].isOutdated -%}
              <span aria-label="outdated" role="img">✗</span>
             {%- elsif rec.translations[lang].authorized -%}
               {%- if rec.translations[lang].isPublished -%}
                 <span aria-label="authorized translation published" role="img">✰</span>
               {%- elsif rec.translations[lang].isInReview -%}
                 <span aria-label="under review">🔍</span>
               {%- elsif rec.translations[lang].isPending -%}
                 <span aria-label="intent to translate" role="img">…</span>
               {%- endif -%}
             {%- else -%}
               {%- if rec.translations[lang].isPublished -%}
                 <span aria-label="volunteer translation published" role="img">✓</span>
               {%- elsif rec.translations[lang].isPending -%}
                 <span aria-label="intent to translate" role="img">…</span>
               {%- endif -%}
             {%- endif -%}</a>
           {%- else -%}
             >
           {%- endif -%}
         {%- else -%}
           >
         {%- endif -%}
      </td>
      {% endif %}
      {%- endfor -%}
    </tr>
    {%- endfor %}
  </tbody>
  {% endfor %}
  <tfoot>
    <tr>
      <th scope="row">{{ recs.size }} Recommendations</th>
      {% for lang in langs %}
      {%- if site.data.byLanguage[lang].latestRecsTotal > 0 -%}
      <td>{{ site.data.byLanguage[lang].latestRecsTotal }}</td>
      {% endif %}
      {%- endfor -%}
    </tr>
  </tfoot>
</table>
</div>

<!-- TODO: non-RECS -->

<style>
.default .content {
    display:block !important;
}

section:has(> .related){
    display: none;
}

dl.legend dt { width: 2.5em; height: 2.5em; padding: 0.5em; text-align: center; margin-right: 1em; border: 1px black solid; }

.published { background-color: #dfd; }
.review { background-color: #f9dc4a; } /* Design system: yellow */
.draft { background-color: #cbe0fb; } /* Design system: light-blue */
.outdated { background-color: #fea78d; } /* Design system: light-coral */

table { border-collapse: collapse; }

tfoot td { text-align: right; }
th[scope="row"] { padding: 0.5em; text-align: right; font-weight: normal; }
.word-count { display: block; opacity: 0.75; }
tbody { border-bottom: 1px solid black; }
tbody td { padding: 0; text-align: center; vertical-align: middle; }
tbody td a { display: block; margin: 0; width: 100%; height: 100%; }
tbody td a { color: #111111 !important } /* Design system: off-black */

tbody tr.hidden { display: none; }

/* Language columns: short codes (e.g. "ja", "zh-hans") instead of rotated names */
th.lang {
  min-width: 2.25rem;
  padding: 0.5rem 0.25rem;
  font-size: 0.8125rem;
  line-height: 1.2;
  text-align: center;
  vertical-align: bottom;
  background-color: #002a56;
  color: #fff;
}
th.lang abbr { text-decoration: none; cursor: help; }

/* Scroll the table inside its container, keeping headers and spec names in view */
.table-wrap { overflow: auto; max-height: 80vh; }

/* Always-visible "classic" scrollbars at the edges of the table container.
   Styling ::-webkit-scrollbar opts Chrome/Safari out of hide-until-scrolled
   overlay scrollbars; Firefox gets the standard properties instead
   (Chromium ignores ::-webkit-scrollbar when scrollbar-color is set). */
.table-wrap::-webkit-scrollbar { width: 14px; height: 14px; }
.table-wrap::-webkit-scrollbar-track { background: #e8e8ee; }
.table-wrap::-webkit-scrollbar-thumb { background: #002a56; border: 3px solid #e8e8ee; border-radius: 7px; }
.table-wrap::-webkit-scrollbar-corner { background: #e8e8ee; }
@supports not selector(::-webkit-scrollbar) {
  .table-wrap { scrollbar-width: auto; scrollbar-color: #002a56 #e8e8ee; }
}
.table-wrap thead th { position: sticky; inset-block-start: 0; z-index: 2; background-color: #002a56; color: #fff; }
.table-wrap tbody th[scope="row"],
.table-wrap tfoot th[scope="row"] {
  position: sticky;
  inset-inline-start: 0;
  z-index: 1;
  min-width: 12rem;
  max-width: 20rem;
  background-color: #fff;
  box-shadow: 1px 0 0 #cac9c9;
}
.table-wrap thead th#specs { inset-inline-start: 0; z-index: 3; text-align: left; }
#specs input { max-width: 100%; }

@media (max-width: 40em) {
  .table-wrap tbody th[scope="row"],
  .table-wrap tfoot th[scope="row"] { min-width: 8rem; max-width: 9rem; font-size: 0.875rem; }
}
</style>

<script src="filter.js"></script>
