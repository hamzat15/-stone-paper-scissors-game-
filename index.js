const pierre = document.getElementById("p");
const feuille = document.getElementById("f");
const ciseaux = document.getElementById("c");

const span = document.getElementById("joueur")
const robo = document.getElementById("robot");
const res = document.getElementById("result");


var img = document.createElement("img");
var im = document.createElement("img");


function robot(min , max){
    min = 1;
    max = 4;
   let rs = Math.floor(Math.random() * (max - min) + min);
   
   if(rs === 1)
   {
    img.src = "./assets/rockR.png"
    robo.appendChild(img);
    img.classList.add("show-");


   }else if(rs === 2)
   {
    img.src = "./assets/feuilR.png"
    robo.appendChild(img);
    img.classList.add("show-");

    
   }else if(rs === 3)
   {
    img.src = "./assets/cissdR.png"
    robo.appendChild(img);
    img.classList.add("show-");

   }
   return rs;
}


pierre.addEventListener("click", () => {
    im.classList.add("show");

    span.textContent = "";
    im.src = "./assets/rockL.png";
    span.appendChild(im)
    robot();
    if(robot() === 2 ){
        res.textContent = "Robo remporte la victoire";
    }else if(robot() === 3)
    {
        res.textContent = "Vous remporter la victoire";
    }else if (robot() === 1)(
        res.textContent ="match null"
    );
})

feuille.addEventListener("click", () => {
    im.classList.add("show");

    span.textContent = "";
    im.src = "./assets/feuilL.png";
    span.appendChild(im)
    robot();
    if(robot() === 3 ){
        res.textContent = "Robo remporte la victoire";

    }else if(robot() === 1)
    {
        res.textContent = "Vous remporter la victoire";
    }else if (robot() === 2)(
        res.textContent ="match null"
    );

})

ciseaux.addEventListener("click", () => {
    im.classList.add("show");

    span.textContent = "";
    im.src = "./assets/cisL.png";
    span.appendChild(im)
    robot();  if(robot() === 1 ){
        res.textContent = "Robo remporte la victoire";
    }else if(robot() === 2)
    {
        res.textContent = "Vous remporter la victoire";
    }else if (robot() === 3)(

        res.textContent ="match null"
    );

})