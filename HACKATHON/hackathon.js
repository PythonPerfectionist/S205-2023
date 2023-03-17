var drinkOrder;
var page = "Home";
function setUpOrder(order){
  drinkOrder = order;
  page = "Order";
  alert("Working");
}
window.onload = setUpPage();
function setUpPage(){
  if (page == "Order"){
    document.getElementById("debug").innerHTML = "started";
    if (drinkOrder == "oolong"){
      document.getElementById("drinkPicture").src = "https://sugaryums.co.uk/wp-content/uploads/2022/03/Oolong-Milk-Tea-SugarYums-4.jpg";
    }
  }
}
