let Barrederecherche = document.getElementById("barrerecherche"); 
Barrederecherche.addEventListener('change', function(event)
{
    if(event.target.value == "")
    {
        alert("Tu n'as pas rentré de texte")
    }
    else (event.target.value !== "")
    {
        alert("Cette fonctionnalité n'est pas disponible")
    }
}); 

let Afficheplus = document.getElementById("Afficher"); 
Afficheplus.addEventListener('click', function(event)
{
    alert("Il n'y a pas plus d'articles")
}); 
let boutonrecherche = document.getElementById("barrerecherche"); 
boutonrecherche.addEventListener('click', function(event)
{
    if(event.target.value == "")
    {
        alert("Tu n'as pas rentré de texte")
    }
    else (event.target.value !== "")
    {
        alert("Cette fonctionnalité n'est pas disponible")
    }
}); 