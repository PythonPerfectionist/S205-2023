var potatoCount = 0;
var farmerCount = 0;
var tractorCount = 0;
var isFarmerSpawned = false;
var isTractorSpawned = false;
function start(){
  farmerAuto();
  tractorAuto();
}
function farmerAuto(){
  potatoCount += farmerCount;
  updateUI();
}
function tractorAuto(){
  farmerCount += tractorCount;
  updateUI();
}
function updateUI(){
  document.getElementById("PotatoCount").innerHTML = "Potatoes:&nbsp;"+potatoCount;
  if (isFarmerSpawned){
    document.getElementById("FarmerCount").innerHTML = "Farmer:&nbsp;"+farmerCount;
  }
  if (isTractorSpawned){
    document.getElementById("TractorCount").innerHTML = "Tractor:&nbsp;"+tractorCount;
  }
}

function potatoClick(){
  potatoCount += 1;
  updateUI();
  checkFarmerSpawn();
}
function farmerClick(){
  if (potatoCount>=50){
    farmerCount += 1;
    potatoCount -=50;
  }
  checkTractorSpawn();
  updateUI();
}
function tractorClick(){
  if (farmerCount>=50){
    tractorCount += 1;
    potatoCount -=10000;
  }
  updateUI();
}

function spawner(type,cost){
  var anchor = document.getElementById("main");
  var newType = document.getElementById("type").cloneNode(true);
  newType.childNodes[1].id = type+"Count";
  newType.childNodes[3].id = "button"+type;
  newType.childNodes[1].innerHTML = type + ":&nbsp;0";
  newType.childNodes[3].innerHTML = "Buy&nbsp;" + type+" Cost:&nbsp;"+cost+"&nbsp;Potatoes";

  anchor.appendChild(newType);
}

function checkFarmerSpawn(){
  if (potatoCount >=25 && !isFarmerSpawned){
    spawner("Farmer",50);
    isFarmerSpawned = true;
    document.getElementById("buttonFarmer").onclick = farmerClick;
  }
}

function checkTractorSpawn(){
  if (farmerCount >=25 && !isTractorSpawned){
    spawner("Tractor",10000);
    isTractorSpawned = true;
    document.getElementById("buttonTractor").onclick = tractorClick;
  }
}

function cheat(){
  potatoCount = Number(window.prompt("How many potatoes u want?"))
  if (isFarmerSpawned){
    farmerCount = Number(window.prompt("How many farmers u want?"))

  }
  if (isTractorSpawned){
    tractorCount = Number(window.prompt("How many tractors u want?"))

  }

}
