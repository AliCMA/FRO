const addtocartbuttons = document.getElementsByClassName("games_button");

//Je maakt de cartmessage variabelen en haal je op met getElementsByClassName.
let cartmessage = 0;
const cartmessagevalue = document.getElementsByClassName(
  "shoppingcart_message"
)[0];

//Je maakt hier allemaal de variablene met de waardes 0;

const shoppingmodal = document.getElementById("js--shoppingmodal");
let modalisopen = false;
let buzz = 0;
let iron = 0;
let robot = 0;
let moments = 0;
let triple = 0;
let buzzprice = 0;
let ironprice = 0;
let robotprice = 0;
let momentsprice = 0;
let tripleprice = 0;


// Met dit code zorg je ervoor dat alles word opgeteld 
for (let i = 0; i < addtocartbuttons.length; i++) {
  addtocartbuttons[i].onclick = function () {
    cartmessage += 1;
    cartmessagevalue.innerHTML = cartmessage;
    switch (addtocartbuttons[i].dataset.product) {
      case "buzz":
        buzz += 1;
        buzzprice += 49;
        break;
      case "ironman":
        iron += 1;
        ironprice += 39;
        break;
      case "moments":
        moments += 1;
        momentsprice += 89;
        break;
      case "triple":
        triple += 1;
        tripleprice += 104;
        break;
      case "robot":
        robot += 1;
        robotprice += 49;
        break;

    }

    if (modalisopen === false) {
      shoppingmodal.style.display = "flex";
      modalisopen = true;
      setTimeout(function () {
        shoppingmodal.style.display = "none";
        modalisopen = false;
      }, 2000);
    }
  };
}

const arrow = document.getElementById("js--arrow");
const checkoutbutton = document.getElementById("js--checkoutbutton");
const checkoutwindow = document.getElementById("js--checkoutwindow");
const cart = document.getElementById("js--cart");
let checkoutisopen = false;
const searchbar = document.getElementById("js--searchbar");
arrow.style.display = "none";

checkoutbutton.onclick = function () {
  if (checkoutisopen === false) {
    document.querySelector("main").style.display = "none";

    checkoutwindow.style.display = "block";
    cart.style.display = "none";
    arrow.style.display = "block";
    checkoutisopen = true;

    //Hier document log je alle variabelen
    // En met innterHTML zorg je ervoor dat de variabelen elkaar optelt 
    document.getElementById("js--amount-buzz").innerHTML = buzz + "x";
    document.getElementById("js--amount-ironman").innerHTML = iron + "x";
    document.getElementById("js--amount-robot").innerHTML = robot + "x";
    document.getElementById("js--amount-moments").innerHTML = moments + "x";
    document.getElementById("js--amount-triple").innerHTML = triple + "x";

    document.getElementById("js--price-buzz").innerHTML = "€" + buzzprice;
    document.getElementById("js--price-ironman").innerHTML = "€" + ironprice;
    document.getElementById("js--price-robot").innerHTML = "€" + robotprice;
    document.getElementById("js--price-moments").innerHTML = "€" + momentsprice;
    document.getElementById("js--price-triple").innerHTML = "€" + tripleprice;
    searchbar.style.display = "none";
    document.getElementsByClassName("searchbar_glass")[0].style.display =
      "none";
    return;
  }
  document.querySelector("main").style.display = "block";
  checkoutwindow.style.display = "none";
  checkoutisopen = false;
  arrow.style.display = "none";
  cart.style.display = "block";
  searchbar.style.display = "block";
  document.getElementsByClassName("searchbar_glass")[0].style.display = "flex";
};

//searchbar

const games = document.getElementsByClassName("games_game");
searchbar.onkeyup = function (event) {
  if (event.keyCode === 13) {
    let searchterm = searchbar.value.toUpperCase().split(" ").join("");
    for (let i = 0; i < games.length; i++) {
      if (games[i].dataset.title.search(searchterm) === -1) {
        games[i].style.opacity = 0.3;
      } else {
        games[i].style.opacity = 1;
      }
    }
  }
};

//Deze variabeken observer en de bijhorende codes zorgen ervoor wanneer je scherm op de (bij jouw gekozen % is) de code wordt uitgevoerd, dus dan komen de dingen te voor schijn.

let observer = new IntersectionObserver(
  function (entries) {
    //Er moet altijd een fucntie worden gemaakt bij de observer
    if (entries[0].isIntersecting === true) {
      document.getElementsByTagName("main")[0].classList.add("a-popup");
      //Met die haal je de popup en de main op.
      observer.disconnect();
      // Door dit stuk code kan hij het niet meer opnieuw uitvoeren na de eerste keer dat jij het uitvoert.

    } else {
      console.log("voor minder dan 50% in beeld!");
      //Dit bericht krijg je als je niet 50% in beeld hebt staan.
    }
  },
  {
    threshold: 0.4,
    // Deze 0.4 betekend 40% van je hele scherm.
  }
);

observer.observe(document.getElementsByTagName("main")[0]);
//Hier observe je de main 