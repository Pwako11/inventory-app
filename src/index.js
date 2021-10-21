const apiUrl = "https://jsonmock.hackerrank.com/api/inventory?barcode=74002314"
function load(apiUrl, callBack){
	var xReq;
	 xReq = new XMLHttpRequest();
     
	xReq.onreadystatechange = function(){
		if(xReq.readyState ==  4 && xReq.status == 200) {

            responseData = JSON.parse(xReq.responseText) 
			callBack(responseData);
            
		}
	} 
xReq.open("GET", apiUrl, true);
xReq.send( );
}

function callBack(xReq) {
        
addInvetory(xReq)
	
}
load(apiUrl, callBack)

function addInvetory(data) {
    console.log(data)

    const {page, per_page, total, total_pages } = data 

    for (const prop in data) {
      
        console.log (data.length)
        var list = document.createElement('li');
        var inventoryDetails = document.createElement('p');
      
      if ( typeof data[prop] === "number"){
        list.innerText = `${prop}: ${data[prop]}`
        document.body.appendChild(list);
        document.body.appendChild(document.createElement('br'));
      }else{
          inventoryDetails.innerText = "Inventory Details"
          document.body.appendChild(inventoryDetails)
          let detailedData = data.data[0]
          console.log(detailedData)
          for (const lists in detailedData){
            var propDetails = document.createElement('li');
            propDetails.innerText = `${lists}: ${detailedData[lists]}`
            document.body.appendChild(propDetails);
            document.body.appendChild(document.createElement('br'));
            }
        }
    }
  }
  
  window.onload = function() { addInvetory(data); };
