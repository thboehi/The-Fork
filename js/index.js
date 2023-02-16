// Fonction pour ouvrir le burger menu
function openBurgerMenu() {
  let x = document.getElementById("menuLinks");
  let b = document.getElementById("burgerMenuButton")
  if (x.getAttribute("data-state") === "close") {

    b.setAttribute("data-state", "cross");
    x.setAttribute("data-state", "open");

  } else {

    b.setAttribute("data-state", "burger");
    x.setAttribute("data-state", "close");

  }
}

// Fonction pour adapter le bouton de newletter en fonction de certaines règles
function subButtonOver() {
  let regexMail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  let email = document.getElementById("subEmail").value;
  let subEmail = document.getElementById('subEmail');
  if(document.activeElement === subEmail){
    document.getElementById("subButton").setAttribute("data-state", "subEmailSelected");
  } else {
    document.getElementById("subButton").removeAttribute("data-state")
  }

  if (email === ""){
    return;
  } else {
    if (regexMail.test(email) === true){

      document.getElementById("subButton").setAttribute("value", "Submit");
  
    } else {
      document.getElementById("subButton").setAttribute("value", "Email?");
    }
  }

}

// Fonction pour remettre le texte Subscribe
function subButtonOut() {
  let text = "Subscribe";
  document.getElementById("subButton").setAttribute("value", text)
}


// 2 Fonctions, une pour ouvrir la div about-longer une autre pour fermer
function openAboutLonger() {
  document.getElementById("about-long").setAttribute("data-state", "open")
}
function closeAboutLonger() {
  document.getElementById("about-long").setAttribute("data-state", "close")
}