var paragraphe = document.createElement("p");
var texte = document.createTextNode("J'ai r�ussi");
paragraphe.appendChild(texte);
var buddy = document.querySelectorAll("body");
buddy[0].appendChild(paragraphe);
