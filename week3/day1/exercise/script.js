document.body.firstElementChild.setAttribute("id", "socialNetworkNavigation");

// document.getElelentsByTagName('ul')[0].appendChild(document.createElement('li').innerText='log out'

let ulParent = document.getElementsByTagName("ul")[0];
let liChild = document.createElement("li");
let textLi = document.createTextNode("Logout");
liChild.appendChild(textLi);
ulParent.appendChild(liChild);

