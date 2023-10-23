var increment = 0;

// Get all "moin" and "plus" elements
var moinElements = document.querySelectorAll('.moin');
var plusElements = document.querySelectorAll('.plus');
var Price = 1900 ;
// Add click event for button "moin"
moinElements.forEach(function (element) {
    element.addEventListener('click', function () {
        var Num = element.parentElement.querySelector('.Num');
        var value = parseInt(Num.textContent);
        if (value > 0) {
            Num.textContent = value - 1;
              Price -= 1900 ;
              document.getElementById("Total").innerHTML = "$ " + Price ;
        }
    });
});

// Add all event for button "plus" elements
plusElements.forEach(function (element) {
    element.addEventListener('click', function () {
        var Num = element.parentElement.querySelector('.Num');
        var value = parseInt(Num.textContent);
        Num.textContent = value + 1;
         Price += 1900 ;
        document.getElementById("Total").innerHTML ="$ " + Price ;
    });
}
);
//afficher panier 
function listeafficher()
{
    var liste = document.getElementById("liste");
    if(liste.style.display == 'none'){
        liste.style.display = "block"
    }
    else
    liste.style.display = "none";
}
//fonction d'incrementation
function Incrementatation()
{
    increment ++;
    document.getElementById("NrProduct").innerHTML= increment;

}
