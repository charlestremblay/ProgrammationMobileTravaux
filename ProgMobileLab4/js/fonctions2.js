var paragraphe = document.createElement("p");
var texte = document.createTextNode("J'ai réussi");
paragraphe.appendChild(texte);
var buddy = document.querySelectorAll("body");
buddy[0].appendChild(paragraphe);
