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
        <li><a href ="#">Istorie</a></li>
        <li><a href ="#">Producatori</a></li>
        <li><a href ="#">Evenimente</a></li>
        <li><a href ="#">Cazare</a></li>
        <li><a href ="#">Transport</a></li>
        <li><a href ="#">Institutii</a></li>
        <li><a href ="#">Magazine</a></li>
        <li><a href ="#">Galerie</a></li> 
        </ul>
      </div>

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
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
  <span class="dot" onclick="currentSlide(4)"></span>
  <span class="dot" onclick="currentSlide(5)"></span>
  <span class="dot" onclick="currentSlide(6)"></span>
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
  console.log("here");
  const insertH1 = ($("body").innerHTML = createMainLayout());
  console.log(insertH1);
  showSlides(slideIndex);
}
initEvents();
