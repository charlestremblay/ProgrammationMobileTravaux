var texte = document.querySelectorAll('p');
var bouton = document.querySelectorAll('button');
var X = 1;
bouton[0].onclick = function()
{
	
	texte[0].innerHTML = "Vous avez cliqué sur le bouton " + X++ + " fois."
	
}