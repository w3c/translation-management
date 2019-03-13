var targetId = location.hash.slice(1);
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
  if (cursor) {
    cursor.parentElement.open = true;
    target.scrollIntoView();
  }
}
