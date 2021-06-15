`);
  var url = window.location.href;
  if (url.search("/Admin/Reports") != -1) {
    console.log("In report center, add css");
    GM_addStyle(`;
