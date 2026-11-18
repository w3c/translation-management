---
title: Translations of W3C standards and notes — Translation needs
description: Status of existing and ongoing translations of W3C Recommendations (authorized and volunteer translations)
---

This page shows which W3C standards and notes are being, have been or have not been translated. If a language does not appear in the table, it means no existing or ongoing translation is known.

<aside>
    <h2 class="h4">Get involved</h2>
    <p class="with-icon--before with-icon--larger">
            <svg aria-hidden="true" class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"/></svg>
            <a href="https://www.w3.org/translate/">Contribute to W3C translations</a>
    </p>
</aside>

Legend:
<dl class="legend">
<dt class="outdated">✗</dt>
<dd>A translation of an outdated version of the specification exists; if you're the original translator, consider updating the translation; if you aren't and are willing to help, try contacting the original translator to see if they would accept contributed updates to their work</dd>
<dt class="draft">…</dt>
<dd>A translator has indicated their intent to translate the specification in the said language</dd>
<dt class="review">🔍</dt>
<dd>A draft <a href="https://www.w3.org/policies/authorized-translations/">Authorized Translation</a> is under review</dd>
<dt class="published">✓</dt>
<dd>A volunteer translation exists</dd>
<dt class="published">✰</dt>
<dd>W3C has published an <a href="https://www.w3.org/policies/authorized-translations/">Authorized Translation</a> of the specification</dd>
</dl>

<div class="table-wrap" role="region" aria-labelledby="matrix-caption" tabindex="0">
<table>
  <caption id="matrix-caption">W3C standards and notes translation status</caption>
  <thead>
    <tr>
      <th id="specs">Specification</th>
      <th>Length (x1,000 words)</th>
      {%- assign langs = site.data.langlist|sort: "name" -%}
      {%- for lang in langs -%}
      {%- if site.data.byLanguage[lang].latestRecsTotal > 0 -%}
      <th class="lang"><div><span>{{ site.data.lang[lang].name }}</span></div></th>
      {% endif %}
      {%- endfor -%}
    </tr>
  </thead>
  {% assign recs = site.data.recs | where: "isLatest", true | sort: "date" | reverse %}
  {% assign recsByYears = recs | group_by: "year" %}
  {% for year in recsByYears %}
  <tbody id="y{{year.name}}" aria-live="polite">
    <tr>
      <th colspan="{{ langs.size }}">{{ year.name }}</th>
    </tr>
    {% for rec in year.items %}
    <tr>
      <th scope="row"><a href="{{rec.shortlink}}">{{ rec.title }}</a></th>
      <td class="num">{% if site.data.wordCount[rec.shortname] %}{{ site.data.wordCount[rec.shortname] | divided_by: 1000 | round }}{% endif %}</td>
      {% for lang in langs %}
      {%- if site.data.byLanguage[lang].latestRecsTotal > 0 -%}
      <td{% if rec.translations %}
           {% if rec.translations[lang] %}
            class="{{ rec.translations[lang].states | join: ' ' }}"><a title="{% if rec.translations[lang].isOutdated %}Outdated {% elsif rec.translations[lang].isPending %}Ongoing {% elsif rec.translations[lang].isInReview %}Pending review {% endif %}{% if rec.translations[lang].authorized %}Authorized {% endif %}{{ site.data.lang[lang].name }} translation of {{ rec.translations[lang].origTitle }}" href="{{ rec.translations[lang].uri }}"><span aria-role="img">
             {%- if rec.translations[lang].isOutdated -%}
               ✗
             {%- elsif rec.translations[lang].authorized -%}
               {%- if rec.translations[lang].isPublished -%}
                 ✰
               {%- elsif rec.translations[lang].isInReview -%}
                 🔍
               {%- elsif rec.translations[lang].isPending -%}
                 …
               {%- endif -%}
             {%- else -%}
               {%- if rec.translations[lang].isPublished -%}
                 ✓
               {%- elsif rec.translations[lang].isPending -%}
                 …
               {%- endif -%}
             {%- endif -%}</span></a>
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
      <td></td>
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
a[href]:focus, a[href]:hover {
  background: #f8f8f8;
  background: rgba(75%, 75%, 75%, .25);
  border-bottom-width: 3px;
  margin-bottom: -2px;
  opacity: 1;
}

dl.legend dt { width: 2.5em; padding: 0.5em; text-align: center; margin-right: 1em; }

.published, .review, .draft, .outdated { border: 1px black solid; }
.published { background-color: #dfd; }
.review { background-color: #ff4; }
.draft { background-color: #ddd; }
.outdated { background-color: #fdd; }

table { border-collapse: collapse; }
th, tfoot td { border-right: 1px black solid; }
tfoot td { text-align: right; }
th[scope="row"] { padding: 0.5em; text-align: right; font-weight: normal; }
tbody { border-bottom: 1px solid black; }
tbody td { padding: 0; text-align: center; vertical-align: middle; border-right: thin gray solid; }
tbody td.num { padding: 0.5em; text-align: right; }
tbody td a { display: block; margin: 0; width: 100%; height: 100%; }

tbody tr.hidden { display: none; }

thead tr th.lang { position: sticky; top: 0; background-color: transparent;}

th.lang {
  /* Something you can count on */
  height: 140px;
  white-space: nowrap;
  border-right: none;
}
.table-wrap {
    width: 70vw !important;
    max-width: 70vw !important;
    max-height: 1000px;
}
th.lang > div {
  transform:
    /* Magic Numbers */
    translate(17px, 50px)
    /* 315 is really 360 - 45 */
    rotate(315deg);
  width: 30px;
}
th.lang > div > span {
  background-color: #024488;
  padding: 6px 10px;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
}
</style>

<script src="filter.js"></script>
