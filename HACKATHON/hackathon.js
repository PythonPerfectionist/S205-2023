var totalCost = parseFloat(document.getElementById("cost").innerHTML.slice(1,5));
console.log(totalCost);
function addToppingCost(){
  var val = document.getElementById("toppingType").value;
  if (val == "2"){
    totalCost+= 0.20;
  }else if (val == '3'){
    totalCost+= 0.50;
  }else if (val == '4'){
    totalCost+= 0.60;
  }else if (val == '5'){
    totalCost+=0.20;
  }
  updateUI();
}
function addIceCost(){
  var val = document.getElementById("iceLevel").value;
  if (val == "1"){
    totalCost+= 0.5;
  }
  updateUI();
}
function updateUI(){
  document.getElementById("totalCost").innerHTML = "Total Cost: $"+String(totalCost.toFixed(2));
}
