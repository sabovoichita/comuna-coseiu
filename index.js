function $(selector) {
  return document.querySelector(selector);
}

function createMainLayout() {
  return `
  <div class ="container">
    <div class ="header">
      <div class ="logo">
          <img src ="./images/logo-blue.png">
        </div>
      <div class = "header-info">
          <h1>Vizit Coșeiu</h1>
          <h2>Bine ați venit!</h2>
        </div>
    </div>
     <div class="menu-bar">
        <ul class="header-top-menu-bar">
        <li><a href ="#">Istorie</a></li> |
        <li><a href ="#">Producatori</a></li> |
        <li><a href ="#">Evenimente</a></li> |
        <li><a href ="#">Cazare</a></li> |
        <li><a href ="#">Transport</a></li> |
        <li><a href ="#">Institutii</a></li> |
        <li><a href ="#">Magazine</a></li> |
        <li><a href ="#">Galerie</a></li> 
        </ul>
      </div>
    <div class = "main hide">
      <h2>Galerie Foto</h2></div>
      <div class="foto">
        <img src="images/20190111_082942.jpg" >
        <img src="images/20190106_120941a.jpg" >
        <img src="images/20181221_093455a.jpg" >
        <img src="images/20190111_082940.jpg" >
        <img src="images/20210803_085701.jpg" >
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
