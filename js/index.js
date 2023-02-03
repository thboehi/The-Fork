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


  
  
//  fetch('../')
//  let webhookLink = 
//
//  var request = new XMLHttpRequest();
//  request.open("POST", "https://discord.");
//  // again, replace the url in the open method with yours
//  request.setRequestHeader('Content-type', 'application/json');
//
//  var myEmbed = {
//    author: {
//      name: "Captain Hook"
//    },
//    title: "✨ Un prout",
//    description: "Email: " + email,
//    color: hexToDecimal("#ffffff")
//  }
//
//  var params = {
//    username: "My Webhook Name",
//    embeds: [ myEmbed ]
//  }
//
//  request.send(JSON.stringify(params));
}

function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
}

function subButtonOut() {
  let text = "Subscribe";
  document.getElementById("subButton").setAttribute("value", text)
}