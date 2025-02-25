const fs = require("fs").promises;
const w3c = require("node-w3capi");
const langs = require('../docs/_data/lang.json');

(async function() {
  await fs.writeFile("../docs/_data/langlist.json",
                     JSON.stringify(
                       Object.keys(langs).sort((l1, l2) => (langs[l1].sortName || langs[l1].name).localeCompare(langs[l2].sortName || langs[l2].name)),
                       null, 2));

  let recs;
  try {
    recs = (await w3c.specificationsByStatus('Recommendation').fetch({embed: true})).concat(await w3c.specificationsByStatus('Statement').fetch({embed: true}));
  } catch (err) {
    return console.log(err);
  }
  try {
    const data = await w3c.callsfortranslation().fetch({embed: true});
    const trCallForTranslations = data.filter(x => x['spec-version'] && x['spec-version'].uri && x['spec-version'].uri.match(/www\.w3\.org\/TR\//));
    const translations = await w3c.translations().fetch({embed: true});
    const specs = await Promise.all(trCallForTranslations.map(x =>  w3c.specification(x['spec-version']._links.specification.href.substring('https://api.w3.org/specifications/'.length)).fetch({embed: true})));
    const groupedTranslations = trCallForTranslations.sort((a,b) => a.title.localeCompare(b.title))
          .map(x => {
            const latestVersion = specs.find(s => s._links.self.href === x['spec-version']._links.specification.href)._links['latest-version'].href;
            x.isLatest = x['spec-version'].status !== "Retired" && x['spec-version']._links.self.href === latestVersion;
            x.date = x['spec-version'].date;
            x.id = 's-' + x['spec-version'].shortlink.split('/')[4];
            x.translations = translations.filter(t => t['call-for-translation'] && t['call-for-translation']['spec-version'] && t['call-for-translation']['spec-version'].uri && t['call-for-translation']['spec-version'].uri === x['spec-version'].uri).map(t => { t.language = t.language.toLowerCase().replace(/_/, '-'); return t; });
            x.hasAuthorizedTranslations = x.translations.find(t => t.authorized && t.states.includes('published'));
            return x;
          });
    const translatedRecs = recs.map(r => {
      r.isLatest = r._links["latest-version"].title !== "Retired";
      r.date = r._links["latest-version"].href.split('/').pop().replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, '$1-$2-$3');
      r.year = r._links["latest-version"].href.split('/').pop().slice(0,4);
      r.translations = {};
      const cfts = groupedTranslations.filter(s => s["spec-version"]._links.specification.href === r._links.self.href);
      cfts.forEach(cft => {
        r.translations = Object.keys(langs).reduce((obj, lang) => {
          obj[lang] = cft.translations.find(t => t.language === lang);
          if (obj[lang]) {
            obj[lang].origTitle = cft.title;
            obj[lang].isOutdated = !cft.isLatest;
            if (obj[lang].isOutdated) {
              obj[lang].states.push("outdated");
            }
            obj[lang].isPublished = obj[lang].states.includes("published");
            obj[lang].isPending = obj[lang].states.includes("draft");
            obj[lang].isInReview = obj[lang].states.includes("review");
          }
          return obj;
        }, {});
      })
      return r;
    });

    const latestTranslations = translations.filter(t => t['call-for-translation']['spec-version']  && t.published).sort((a,b) => -a.published.localeCompare(b.published)).slice(0,15);
    await fs.writeFile("../docs/_data/recs.json", JSON.stringify(translatedRecs, null, 2));
    await fs.writeFile("../docs/_data/translations.json", JSON.stringify(groupedTranslations, null, 2));
    await fs.writeFile("../docs/_data/latestTranslations.json", JSON.stringify(latestTranslations, null, 2));
    const languages =  new Set([].concat(...groupedTranslations.map(x => x.translations.map(t => t.language))));
    const byLanguage = [...languages].reduce((acc, l) => {
      acc[l] = {};
      acc[l].list = groupedTranslations.filter(x => x.translations.find(t => t.language === l))
        .map(x => {
          y = {...x};
          y.translations = x.translations.filter(t => t.language === l)
          return y;
        });
      acc[l].latestRecsTotal = acc[l].list.filter(x => x.isLatest || x.translations.find(t => t.authorized)).length;
      return acc;
    }, {});
    await fs.writeFile("../docs/_data/byLanguage.json", JSON.stringify(byLanguage, null, 2));
  } catch (err) {
    console.trace(err);
    process.exit(2);
  }
})();
