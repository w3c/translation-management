var targetId = location.hash.slice(1);
var match;
if (!targetId && (match = location.search.match(/^\?technology=(.*)/))) {
  targetId = "s-" + match[1];
}
var target = document.getElementById(targetId);
if (target) {
  var childDetails = target.querySelectorAll("details");
  for (var i = 0 ; i < childDetails.length ; i++) {
    childDetails[i].open = true;
  }
  var cursor = target;
  while (cursor.parentElement && cursor.parentElement.tagName !== "DETAILS") {
    cursor = cursor.parentElement;
  }
  if (cursor && cursor.parentElement) {
    cursor.parentElement.open = true;
  }
  target.scrollIntoView();
}

if (match = location.search.match(/^\?filter=(.*)/)) {
  var filter = match[1];
  if (filter) {
    document.querySelector("h1").appendChild(document.createTextNode(" matching “" + filter + "”"));
    [...document.querySelectorAll("section section")].forEach(s => {
      if (s.querySelector("h2").textContent.match(new RegExp(filter, "i"))) {
        s.classList.remove("hidden");
      } else {
        s.classList.add("hidden");
      }
    });
  }
}
