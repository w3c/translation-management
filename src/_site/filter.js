const debounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
}

const specs = document.getElementById("specs");
const filterInput = document.createElement("input");
filterInput.setAttribute("aria-label", "Filter list of specifications by title or URL");
const rows = [...document.querySelector("table").querySelectorAll("tr")];
const tbodies = [...document.querySelector("table").querySelectorAll("tbody")];

filterInput.addEventListener("input", debounce(function(ev) {
  const match = new RegExp(ev.target.value, "i");
  rows.forEach(tr => {
    const th = tr.querySelector("th");
    if (!th || !th.querySelector("a")) return;
    if (!th.textContent.match(match) && !th.querySelector("a").href.match(match)) {
      tr.classList.add("hidden");
    } else {
      tr.classList.remove("hidden");
    }
  });
  tbodies.forEach(tb => {
    if (tb.querySelectorAll("tr:not(.hidden)").length <= 1) {
      tb.querySelector("tr").classList.add("hidden");
    } else {
      tb.querySelector("tr").classList.remove("hidden");
    }
  });
}, 300));
specs.appendChild(document.createElement("br"));
specs.appendChild(filterInput);
