let NameImage = ["Serveur.webp", "Programmation.webp", "Langue.webp"]
let NbImage = 0

let ButtonPrev=document.getElementById("arrow L")
ButtonPrev.addEventListener("click",ClickPrev)
function ClickPrev () {
    console.log("Left")
    let skillsElement = document.querySelector('.skills');
        if (skillsElement) {
            if (NbImage == 0) {
                NbImage = NameImage.length-1;
            } else {
                NbImage -=1
            }
            skillsElement.style.backgroundImage = `url('./image/${NameImage[NbImage]}')`;
            ChangeInfo(skillsElement.style.backgroundImage)
        }
    }



let ButtonNext=document.getElementById("arrow R")
ButtonNext.addEventListener("click",ClickNext)
function ClickNext () {
    console.log("Right")
    let skillsElement = document.querySelector('.skills');
        if (skillsElement) {
            if (NbImage == NameImage.length-1) {
                NbImage = 0;
            } else {
                NbImage +=1
            }
            skillsElement.style.backgroundImage = `url('./image/${NameImage[NbImage]}')`;
            ChangeInfo(skillsElement.style.backgroundImage)
        }
    }

    
function ChangeInfo (info) {
    let ClassA = document.getElementsByClassName("active")[0]
    let ClassD = document.getElementsByClassName("inactiveD")[0]
    let ClassG = document.getElementsByClassName("inactiveG")[0]
    if (ClassA && ClassD && ClassG) {
        if (info === 'url("./image/Langue.webp")') {
            ClassA.id = "InactiveD";
            ClassD.id = "InactiveG";
            ClassG.id = "Active";
        } else if (info === 'url("./image/Serveur.webp")') {
            ClassA.id = "Active";
            ClassD.id = "InactiveD";
            ClassG.id = "InactiveG";
        } else if (info === 'url("./image/Programmation.webp")') {
            ClassA.id = "InactiveG";
            ClassD.id = "Active";
            ClassG.id = "InactiveD";
        }
    } else {
        console.log("Une id non trouvé")
    }
}


function ChargementImage(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = (`./image/${url}`);   
    });
}

document.addEventListener("DOMContentLoaded", function() {
    ChargementImage(NameImage);
    console.log("La page est chargée !");
  });