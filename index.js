function $(selector) {
  return document.querySelector(selector);
}

function createMainLayout() {
  return `
  <div class = "container">
  <h1>Comuna Coșeiu</h1>
  <h2>Bine ați venit!</h2>
  </div>`;
}

function initEvents() {
  console.log("here");
  const insertH1 = ($("body").innerHTML = createMainLayout());
  console.log(insertH1);
}
initEvents();
