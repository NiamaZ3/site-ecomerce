
function myFunction() {
    const Panier = document.getElementById("produitQuiAjouter");

    Panier.insertAdjacentHTML("afterend" ,
     `<article id="artct2Page4">
    <div id="gauche">
        <div id="dvImage1">
            <img src="Rectangle.png" alt="" srcset="">
        </div>
        <div>
            <h3>Product Name</h3>
            
           <h3>$ 1900</h3>
           </div>
        </div>

        <div id="droit">
        <div id="del">
            <img src="icons8-j'aime-ça-24.png" alt="" srcset="">
            <img src="icons8-supprimer-24.png" alt="" srcset="">
        </div>
        <div class="plusmoin">
            <p class="moin">-</p>
            <p class="Num">1</p>
            <p class="plus">+</p>
        </div>
    </div>
 </article>
`
    );
  }



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
         Price += 1900;
        document.getElementById("Total").innerHTML ="$ " + Price;
    });
}
);
//afficher panier
function listeafficher()
{
    var liste = document.getElementById("liste");
    if(liste.style.display == 'none'){
        liste.style.display = "block"
        for(i=0 ; i<increment ; i++){
            myFunction()
        }   
    }
    else
    liste.style.display = "none";
}


function filterafficher()
{
    var liste = document.getElementById("tableu");
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
 




