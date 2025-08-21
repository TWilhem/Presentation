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


