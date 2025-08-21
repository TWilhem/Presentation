let coup=1;
var lettres=["a","b","c","d","e","f","g","h"];
var noirs={"Tour":{"a8":"&#9820;","h8":"&#9820;"},"Cavalier":{"b8":"&#9822;","g8":"&#9822;"},"Fou":{"c8":"&#9821;","f8":"&#9821;"},"Reine":{"d8":"&#9819;"},"Roi":{"e8":"&#9818;"},
           "Pion":{"a7":"&#9823;","b7":"&#9823;","c7":"&#9823;","d7":"&#9823;","e7":"&#9823;","f7":"&#9823;","g7":"&#9823;","h7":"&#9823;"}};
var blancs={"Tour":{"a1":"&#9814;","h1":"&#9814;"},"Cavalier":{"b1":"&#9816;","g1":"&#9816;"},"Fou":{"c1":"&#9815;","f1":"&#9815;"},"Reine":{"d1":"&#9813;"},"Roi":{"e1":"&#9812;"},
           "Pion":{"a2":"&#9817;","b2":"&#9817;","c2":"&#9817;","d2":"&#9817;","e2":"&#9817;","f2":"&#9817;","g2":"&#9817;","h2":"&#9817;"}};
let ActuCaseId;
let ActuPieceColor;
let pieceSelectionnee;

function createHLine(echiquier) {
  var case1=document.createElement("div");
  case1.setAttribute("class","numeroHV");
  echiquier.appendChild(case1);
  for(var j=0;j<8;j++) {
    var case2=document.createElement("div");
    case2.setAttribute("class","numeroH");
    case2.innerHTML=lettres[j].toUpperCase();
    echiquier.appendChild(case2);
  }
  case1=document.createElement("div");
  case1.setAttribute("class","numeroHV");
  echiquier.appendChild(case1);
}
function createEchiquier(echiquier) {
  createHLine(echiquier);
  for(var i=8;i>0;i--) {
    var case1=document.createElement("div");
    case1.setAttribute("class","numeroV");
    case1.innerHTML=i;
    echiquier.appendChild(case1);
    for(var j=0;j<8;j++) {
      var case2=document.createElement("div");
      var x=(i+j)%2
      if (x==0) case2.setAttribute("class","blanc"); //Q2
      else case2.setAttribute("class","noir");
      case2.setAttribute("id",lettres[j]+i);
      echiquier.appendChild(case2);
    }
    case1=document.createElement("div");
    case1.setAttribute("class","numeroV");
    case1.innerHTML=i;
    echiquier.appendChild(case1);
  }
  createHLine(echiquier);
}

//Q1
ech=document.getElementById("echiquier");
createEchiquier(ech);
//Q3
for (i in noirs) {
  var piece = noirs[i]
  for (var pieces in piece)
  document.getElementById(pieces).innerHTML=piece[pieces];
};
for (i in blancs) {
  var piece = blancs[i]
  for (var pieces in piece)
  document.getElementById(pieces).innerHTML=piece[pieces];
};




let ButtonPrev=document.getElementById("prev")
ButtonPrev.addEventListener("click",ClickPrev)
function ClickPrev () {
  let historique=document.getElementById("history").innerHTML
  document.getElementById("history").innerHTML=""
  let LigneH=historique.split('<br>')
  let LengthH=LigneH.length-1
  // console.log(LigneH, LengthH)
  // console.log(LigneH[LengthH-1])
  for (let i = 0; i < LengthH-1; i++) {
    document.getElementById("history").innerHTML+=LigneH[i]+'<br>';
  }
  Retour=LigneH[LengthH-1].split(" ");
  document.getElementById(Retour[1]).innerHTML=Retour[0];
  document.getElementById(Retour[3]).innerHTML=Retour[4];
  let coup1=document.getElementById("coup").innerHTML;
  coup1--;
  document.getElementById("coup").innerHTML=coup1;

}


let choix_Tour=document.getElementById("Tour");
choix_Tour.addEventListener("click",() => ChangeTourN(ActuCaseId,ActuPieceColor));
function ChangeTourN(caseIdfunc,PieceColor) {
  if (PieceColor.includes("Noir")) {
    document.getElementById(caseIdfunc).innerHTML="&#9820;"
  }else if (PieceColor.includes("Blanc")) {
    document.getElementById(caseIdfunc).innerHTML="&#9814;"
  }
  document.getElementById("Cp").style.display='none';
}

let choix_Cavalier=document.getElementById("Cavalier");
choix_Cavalier.addEventListener("click",() => ChangeCavalierN(ActuCaseId,ActuPieceColor));
function ChangeCavalierN(caseIdfunc,PieceColor) {
  if (PieceColor.includes("Noir")) {
    document.getElementById(caseIdfunc).innerHTML="&#9822;"
  }else if (PieceColor.includes("Blanc")) {
    document.getElementById(caseIdfunc).innerHTML="&#9816;"
  }
  document.getElementById("Cp").style.display='none';
}

let choix_Fou=document.getElementById("Fou");
choix_Fou.addEventListener("click",() => ChangeFouN(ActuCaseId,ActuPieceColor));
function ChangeFouN(caseIdfunc,PieceColor) {
  if (PieceColor.includes("Noir")) {
    document.getElementById(caseIdfunc).innerHTML="&#9821;"
  }else if (PieceColor.includes("Blanc")) {
    document.getElementById(caseIdfunc).innerHTML="&#9815;"
  }
  document.getElementById("Cp").style.display='none';
}

let choix_Reine=document.getElementById("Reine");
choix_Reine.addEventListener("click",() => ChangeReineN(ActuCaseId,ActuPieceColor));
function ChangeReineN(caseIdfunc,PieceColor) {
  if (PieceColor.includes("Noir")) {
    document.getElementById(caseIdfunc).innerHTML="&#9819;"
  }else if (PieceColor.includes("Blanc")) {
    document.getElementById(caseIdfunc).innerHTML="&#9811;"
  }

  document.getElementById("Cp").style.display='none';
}




document.addEventListener('DOMContentLoaded', function() {
  var cases = document.querySelectorAll('.blanc, .noir');
  var pieceSelectionnee = null;
  

  cases.forEach(function(caseElement) {
      caseElement.addEventListener('click', function() {
          var caseId = this.id;
          var contenuCase = this.innerHTML;
          // console.log(couleurPiece)

          if (this.classList.contains('vert')) {
              var CaseContenu = document.getElementById(pieceSelectionnee).innerHTML;
              pieceEat = document.getElementById(caseId).innerHTML;
              document.getElementById(caseId).innerHTML = document.getElementById(pieceSelectionnee).innerHTML;
              document.getElementById(pieceSelectionnee).innerHTML = "";
              var casesVertes = document.querySelectorAll('.vert');
              document.getElementById("coup").innerHTML=coup++;
              casesVertes.forEach(function(vert) {
                  vert.classList.remove('vert');
              });
              var nomPiece = getNomPiece(CaseContenu);
              console.log('Déplacement:',CaseContenu, pieceSelectionnee,"→",caseId);
              document.getElementById("history").innerHTML+=CaseContenu+' '+pieceSelectionnee+' → '+caseId+' '+pieceEat+'</br>';
              ActuCaseId = caseId;
              ActuPieceColor = nomPiece;
              if (nomPiece.includes("Pion Noir") && caseId.charAt(1) == 1) {
                  document.getElementById("Cp").style.display='flex';
                  var count1=0
                  for (var piece in noirs) {
                    if (count1 >= 4) break;
                    var chaines = "";
                    count1++;
                    var count2 = 0;
                    for (var key in noirs[piece]) {
                        if (count2 >= 1) break;
                        chaines += noirs[piece][key];
                        count2++;
                  };
                  document.getElementById(piece).innerHTML=chaines;
                }};
              if (nomPiece.includes("Pion Blanc") && caseId.charAt(1) == 8) {
                  document.getElementById("Cp").style.display='flex';
                  var count1=0
                  for (var piece in blancs) {
                    if (count1 >= 4) break;
                    var chaines = "";
                    count1++;
                    var count2 = 0;
                    for (var key in blancs[piece]) {
                        if (count2 >= 1) break;
                        chaines += blancs[piece][key];
                        count2++;
                  }
                  document.getElementById(piece).innerHTML=chaines;
                }};
              pieceSelectionnee = null;
          } else {
              var nomPiece = getNomPiece(contenuCase);
              var casesVertes = document.querySelectorAll('.vert');
              casesVertes.forEach(function(vert) {
                vert.classList.remove('vert');
              });
              let ListeCaseDevant = [];
              if (nomPiece.includes('Pion')){
                pieceSelectionnee = caseId;
                var colonne = caseId.charAt(0);
                var ligne = caseId.charAt(1);
                  if (nomPiece.includes('Pion Noir')) {
                    // console.log('noir');
                    if (String.fromCharCode(ligne.charCodeAt(0)) == 7) {
                      var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) - 2);
                      var caseDevant = colonne + ligneDevant;
                      if (caseOccupee(caseDevant,"Noir") == false) {
                        ListeCaseDevant.push(caseDevant);
                      }
                    }
                    var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) - 1);
                    var caseDevant = colonne + ligneDevant;
                    if (caseOccupee(caseDevant,"Noir") == false) {
                      ListeCaseDevant.push(caseDevant);
                    }
                  }else if(nomPiece.includes('Pion Blanc')) {
                    // console.log('blanc');
                    if (String.fromCharCode(ligne.charCodeAt(0)) == 2) {
                      var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + 2);
                      var caseDevant = colonne + ligneDevant;
                      if (caseOccupee(caseDevant,"Blanc") == false) {
                        ListeCaseDevant.push(caseDevant);
                      }
                    }
                    var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + 1);
                    var caseDevant = colonne + ligneDevant;
                    if (caseOccupee(caseDevant,"Blanc") == false) {
                      ListeCaseDevant.push(caseDevant);
                    }
                  }}
              if (nomPiece.includes('Cavalier')) {
                var CoorCase = [2,1,2,-1,1,2,-1,2,-2,1,-2,-1,1,-2,-1,-2,];
                pieceSelectionnee = caseId;
                var colonne = caseId.charAt(0);
                var ligne = caseId.charAt(1);
                  for (let coordo=0; coordo<16; coordo+=2) {
                    console.log(nomPiece);
                    if (nomPiece.includes('Cavalier Noir')) {
                      // console.log('noir');
                      var colonneDevant = String.fromCharCode(colonne.charCodeAt(0) + CoorCase[coordo]);
                      var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + CoorCase[coordo+1]);
                      var caseDevant = colonneDevant + ligneDevant;
                      ListeCaseDevant.push(caseDevant);
                    }else if(nomPiece.includes('Cavalier Blanc')) {
                      // console.log('blanc');
                      var colonneDevant = String.fromCharCode(colonne.charCodeAt(0) + CoorCase[coordo]);
                      var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + CoorCase[coordo+1]);
                      caseDevant = colonneDevant + ligneDevant;
                      ListeCaseDevant.push(caseDevant);
                    }}}
              if (nomPiece.includes('Fou')) {
                var CoorCase = [1,1,-1,1,-1,-1,1,-1];
                pieceSelectionnee = caseId;
                var colonne = caseId.charAt(0);
                var ligne = caseId.charAt(1);
                  for (let coordo=0; coordo<8; coordo+=2) {
                    console.log(nomPiece)
                    if (nomPiece.includes('Fou Noir')) {
                      // console.log('noir');
                      for (coordo2=1; coordo2<8; coordo2+=1) {
                        var colonneDevant = String.fromCharCode(colonne.charCodeAt(0) + CoorCase[coordo]*coordo2);
                        var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + CoorCase[coordo+1]*coordo2);
                        var caseDevant = colonneDevant + ligneDevant;
                        if (caseOccupee(caseDevant,"Noir") == false) {
                          if (caseOccupee(caseDevant,"Blanc") == false) {
                            ListeCaseDevant.push(caseDevant);
                          }else{
                            ListeCaseDevant.push(caseDevant);
                            break
                          }
                        }else{
                          break;
                        }}
                    }else if(nomPiece.includes('Fou Blanc')) {
                      // console.log('blanc');
                      for (coordo2=1; coordo2<8; coordo2+=1) {
                        var colonneDevant = String.fromCharCode(colonne.charCodeAt(0) + CoorCase[coordo]*coordo2);
                        var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + CoorCase[coordo+1]*coordo2);
                        var caseDevant = colonneDevant + ligneDevant;
                        if (caseOccupee(caseDevant,"Blanc") == false) {
                          if (caseOccupee(caseDevant,"Noir") == false) {
                            ListeCaseDevant.push(caseDevant);
                          }else{
                            ListeCaseDevant.push(caseDevant);
                            break
                          }
                        }else{
                          break;
                        }
                    }}}}
              if (nomPiece.includes('Tour')) {
                var CoorCase = [1,0,0,1,-1,0,0,-1];
                pieceSelectionnee = caseId;
                var colonne = caseId.charAt(0);
                var ligne = caseId.charAt(1);
                  for (let coordo=0; coordo<8; coordo+=2) {
                    console.log(nomPiece);
                    if (nomPiece.includes('Tour Noir')) {
                      // console.log('noir');
                      for (coordo2=1; coordo2<8; coordo2+=1) {
                        var colonneDevant = String.fromCharCode(colonne.charCodeAt(0) + CoorCase[coordo]*coordo2);
                        var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + CoorCase[coordo+1]*coordo2);
                        var caseDevant = colonneDevant + ligneDevant;
                        if (caseOccupee(caseDevant,"Noir") == false) {
                          if (caseOccupee(caseDevant,"Blanc") == false) {
                            ListeCaseDevant.push(caseDevant);
                          }else{
                            ListeCaseDevant.push(caseDevant);
                            break
                          }
                        }else{
                          break;
                        }}
                    }else if(nomPiece.includes('Tour Blanc')) {
                      // console.log('blanc');
                      for (coordo2=1; coordo2<8; coordo2+=1) {
                        var colonneDevant = String.fromCharCode(colonne.charCodeAt(0) + CoorCase[coordo]*coordo2);
                        var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + CoorCase[coordo+1]*coordo2);
                        var caseDevant = colonneDevant + ligneDevant;
                        if (caseOccupee(caseDevant,"Blanc") == false) {
                          if (caseOccupee(caseDevant,"Noir") == false) {
                            ListeCaseDevant.push(caseDevant);
                          }else{
                            ListeCaseDevant.push(caseDevant);
                            break
                          }
                        }else{
                          break;
                        }
                    }}}}
              if (nomPiece.includes('Roi')) {
                var CoorCase = [1,0,1,1,0,1,-1,1,0,-1,-1,-1,-1,0,1,-1];
                pieceSelectionnee = caseId;
                var colonne = caseId.charAt(0);
                var ligne = caseId.charAt(1);
                  for (let coordo=0; coordo<16; coordo+=2) { 
                    console.log(nomPiece)
                    if (nomPiece.includes('Roi Noir')) {
                      // console.log('noir');
                      var colonneDevant = String.fromCharCode(colonne.charCodeAt(0) + CoorCase[coordo]);
                      var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + CoorCase[coordo+1]);
                      var caseDevant = colonneDevant + ligneDevant;
                      if (caseOccupee(caseDevant,"Noir") == false) {
                        if (caseOccupee(caseDevant,"Blanc") == false) {
                          ListeCaseDevant.push(caseDevant);
                        }else{
                          ListeCaseDevant.push(caseDevant);
                        }
                      }
                    }else if(nomPiece.includes('Roi Blanc')) {
                      // console.log('blanc');
                      var colonneDevant = String.fromCharCode(colonne.charCodeAt(0) + CoorCase[coordo]);
                      var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + CoorCase[coordo+1]);
                      caseDevant = colonneDevant + ligneDevant;
                      if (caseOccupee(caseDevant,"Blanc") == false) {
                        if (caseOccupee(caseDevant,"Noir") == false) {
                          ListeCaseDevant.push(caseDevant);
                        }else{
                          ListeCaseDevant.push(caseDevant);
                        }
                      }
                    }}}
              if (nomPiece.includes('Reine')) {
                var CoorCasediagonal = [1,1,-1,1,-1,-1,1,-1];
                var CoorCaseVertical = [1,0,0,1,-1,0,0,-1];
                pieceSelectionnee = caseId;
                var colonne = caseId.charAt(0);
                var ligne = caseId.charAt(1);
                  for (let coordo=0; coordo<8; coordo+=2) {
                    console.log(nomPiece)
                    if (nomPiece.includes('Reine Noir')) {
                      // console.log('noir');
                      for (coordo2=1; coordo2<8; coordo2+=1) {
                        var colonneDevant = String.fromCharCode(colonne.charCodeAt(0) + CoorCasediagonal[coordo]*coordo2);
                        var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + CoorCasediagonal[coordo+1]*coordo2);
                        var caseDevant = colonneDevant + ligneDevant;
                        if (caseOccupee(caseDevant,"Noir") == false) {
                          if (caseOccupee(caseDevant,"Blanc") == false) {
                            ListeCaseDevant.push(caseDevant);
                          }else{
                            ListeCaseDevant.push(caseDevant);
                            break
                          }
                        }else{
                          break
                        }}
                      for (coordo2=1; coordo2<8; coordo2+=1) {
                        var colonneDevant = String.fromCharCode(colonne.charCodeAt(0) + CoorCaseVertical[coordo]*coordo2);
                        var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + CoorCaseVertical[coordo+1]*coordo2);
                        var caseDevant = colonneDevant + ligneDevant;
                        if (caseOccupee(caseDevant,"Noir") == false) {
                          if (caseOccupee(caseDevant,"Blanc") == false) {
                            ListeCaseDevant.push(caseDevant);
                          }else{
                            ListeCaseDevant.push(caseDevant);
                            break
                          }
                        }else{
                          break
                        }}
                    }else if(nomPiece.includes('Reine Blanc')) {
                      // console.log('blanc');
                      for (coordo2=1; coordo2<8; coordo2+=1) {
                        var colonneDevant = String.fromCharCode(colonne.charCodeAt(0) + CoorCasediagonal[coordo]*coordo2);
                        var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + CoorCasediagonal[coordo+1]*coordo2);
                        var caseDevant = colonneDevant + ligneDevant;
                        if (caseOccupee(caseDevant,"Blanc") == false) {
                          if (caseOccupee(caseDevant,"Noir") == false) {
                            ListeCaseDevant.push(caseDevant);
                          }else{
                            ListeCaseDevant.push(caseDevant);
                            break
                          }
                        }else{
                          break;
                        }}
                      for (coordo2=1; coordo2<8; coordo2+=1) {
                        var colonneDevant = String.fromCharCode(colonne.charCodeAt(0) + CoorCaseVertical[coordo]*coordo2);
                        var ligneDevant = String.fromCharCode(ligne.charCodeAt(0) + CoorCaseVertical[coordo+1]*coordo2);
                        var caseDevant = colonneDevant + ligneDevant;
                        if (caseOccupee(caseDevant,"Blanc") == false) {
                          if (caseOccupee(caseDevant,"Noir") == false) {
                            ListeCaseDevant.push(caseDevant);
                          }else{
                            ListeCaseDevant.push(caseDevant);
                            break
                          }
                        }else{
                          break;
                        }}
                    }}}
              
                for (Case in ListeCaseDevant) {
                  // console.log(ListeCaseDevant);
                  var caseDevantElement = document.getElementById(ListeCaseDevant[Case]);
                  // console.log(caseDevantElement);
                  if (caseDevantElement) {
                    var PieceEquipe = getNomPiece(caseDevantElement.innerHTML)
                    if (nomPiece.includes("Blanc") == !PieceEquipe.includes("Blanc") && !PieceEquipe.includes("Noir")) {
                      caseDevantElement.classList.add('vert');
                    }
                    if (nomPiece.includes("Noir") == !PieceEquipe.includes("Noir") && !PieceEquipe.includes("Blanc")) {
                      caseDevantElement.classList.add('vert');
                    }
                }}
          }
      });
  });


  function getNomPiece(symbolePiece) {
    var nomPiece = '';
    switch (symbolePiece) {
        case '♙':
            nomPiece ='Pion Blanc'; 
            break;
        case '♘':
            nomPiece ='Cavalier Blanc'; 
            break;
        case '♗':
            nomPiece ='Fou Blanc'; 
            break;
        case '♖':
            nomPiece ='Tour Blanc'; 
            break;
        case '♕':
            nomPiece ='Reine Blanc'; 
            break;
        case '♔':
            nomPiece ='Roi Blanc'; 
            break;
        case '♟':
            nomPiece ='Pion Noir'; 
            break;
        case '♞':
            nomPiece ='Cavalier Noir'; 
            break;
        case '♝':
            nomPiece ='Fou Noir'; 
            break;
        case '♜':
            nomPiece ='Tour Noir'; 
            break;
        case '♛':
            nomPiece ='Reine Noir'; 
            break;
        case '♚':
            nomPiece ='Roi Noir';
            break;
        default:
            break;
    }
    return nomPiece;
  }
  function caseOccupee(caseId, couleur) {
    var contenuCase = document.getElementById(caseId);
    if (contenuCase !== null && contenuCase.innerHTML !== "") {
        var nomPiece = getNomPiece(contenuCase.innerHTML);
        return nomPiece.includes(couleur)
    }
    return false
  };
});



