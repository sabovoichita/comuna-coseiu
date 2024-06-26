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
          <h1>Vizit Coșeiu</h1>
          <h2>Bine ați venit!</h2>
        </div>
    </div>
    <div class = "header-top-menu-bar">
        <ul>
        <li><a href ="#">Istoria Comunei</a></li> |
        <li><a href ="#">Biserici</a></li> |
        <li><a href ="#">Producatori Locali</a></li> |
        <li><a href ="#">Evenimente</a></li> |
        <li><a href ="#">Cazare</a></li> |
        <li><a href ="#">Taxi</a></li> |
        <li><a href ="#">Institutii Publice</a></li> |
        <li><a href ="#">Magazine/Depozite</a></li> |
        <li><a href ="#">Galerie Foto</a></li> 
        </ul>
      </div>
    <div class = "main">
    <h2>Istoria Comunei</h2></div>
  </div>
`;
}

function initEvents() {
  console.log("here");
  const insertH1 = ($("body").innerHTML = createMainLayout());
  console.log(insertH1);
}
initEvents();
