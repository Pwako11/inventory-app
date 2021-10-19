const apiUrl = "https://jsonmock.hackerrank.com/api/inventory?barcode=74002314"
function load(apiUrl, callBack){
	var xReq;
	 xReq = new XMLHttpRequest();
	xReq.onreadystatechange = function(){
		if(xReq.readyState ==  4 && xReq.status == 200) {
			callBack(xReq);
		}
	} 
xReq.open("GET", apiUrl, true);
xReq.send( );
}

function callBack(xReq) {
let inventoryData= xReq.response
console.log (inventoryData)

addInvetory(inventoryData)
	
}
load(apiUrl, callBack)

function addInvetory(data) {
    for (const prop in data) {
      var list = document.createElement('li');
      list.innerText = `data.${prop}: ${data[prop]}`
      
      document.body.appendChild(list);
      document.body.appendChild(document.createElement('br'));
    }
  }
  
  window.onload = function() { addInvetory(data); };