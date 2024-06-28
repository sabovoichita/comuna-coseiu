let activePage = "galerie";

function $(selector) {
  return document.querySelector(selector);
}
function hide(id) {
  $("#" + id).style.display = "none";
}
function show(id) {
  $("#" + id).style.display = "block";
}

function showPage(id) {
  hide(activePage);
  show(id);
  activePage = id;
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
        <li><a href ="#" data-page = "istorie">Istorie</a></li>
        <li><a href ="#" data-page="producatori">Producatori</a></li>
        <li><a href ="#" data-page="evenimente">Evenimente</a></li>
        <li><a href ="#" data-page="cazare">Cazare</a></li>
        <li><a href ="#" data-page="transport">Transport</a></li>
        <li><a href ="#" data-page="institutii">Institutii</a></li>
        <li><a href ="#" data-page="magazine">Magazine</a></li>
        <li><a href ="#" data-page="galerie">Galerie</a></li> 
        </ul>
      </div>

       <div id="istorie" class="page">
          <h1>Istoria Comunei</h1>
        </div>

      <div id="producatori" class="page">
          <h1>Producatori locali</h1>
        </div>

        <div id="evenimente" class="page">
          <h1>Evenimente</h1>
        </div>

        <div id="cazare" class="page">
          <h1>Cazare</h1>
        </div>

        <div id="transport" class="page">
          <h1>Transport</h1>
        </div>

        <div id="institutii" class="page">
          <h1>Institutii</h1>
        </div>

        <div id="magazine" class="page">
          <h1>Magazine</h1>
        </div>

      <div id="galerie" class="page1">
      <h1>Galerie</h1>
      <div class="slideshow-container" >

      <div class="mySlides fade" >
          <div class="numbertext">1 / 6</div>
            <img src="images/1.jpg" >
          <div class="text">Coseiu iarna</div>
        </div>
        <div class="mySlides fade" >
          <div class="numbertext">2 / 6</div>
          <img src="images/2.jpg"  >
          <div class="text">Coseiu iarna</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 6</div>
          <img src="images/3.jpg" >
          <div class="text">Coseiu iarna</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">4 / 6</div>
          <img src="images/4.jpg" >
          <div class="text">Coseiu iarna</div>
        </div>

          <div class="mySlides fade">
          <div class="numbertext">5 / 6</div>
          <img src="images/5.jpg" >
          <div class="text">Coseiu iarna</div>
        </div>
          
          <div class="mySlides fade">
          <div class="numbertext">6 / 6</div>
          <img src="images/6.jpg" >
          <div class="text">Coseiu toamna</div>
        </div>

        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>

        <!-- The dots/circles -->
        <div class="dots" style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
        <span class="dot" onclick="currentSlide(4)"></span>
        <span class="dot" onclick="currentSlide(5)"></span>
        <span class="dot" onclick="currentSlide(6)"></span>
        </div>
      </div>


`;
}

let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function initEvents() {
  const insertH1 = ($("body").innerHTML = createMainLayout());
  console.log(insertH1);
  showSlides(slideIndex);

  document
    .querySelector(".header-top-menu-bar")
    .addEventListener("click", function (e) {
      var id = e.target.dataset.page;
      console.info("click on menu-bar", id);
      if (id) {
        showPage(id);
      }
    });

  // showPage(id);
}

initEvents();
