function $(selector) {
  return document.querySelector(selector);
}

function createMainLayout() {
  return `
  <div class ="container">
    <div class ="header">
      <div class ="logo">
          <img src ="./images/logo.png">
        </div>
      <div class = "header-info">
          <h1>Comuna Coșeiu</h1>
          <h2>Bine ați venit!</h2>
        </div>
    </div>
  </div>
`;
}

function initEvents() {
  console.log("here");
  const insertH1 = ($("body").innerHTML = createMainLayout());
  console.log(insertH1);
}
initEvents();
