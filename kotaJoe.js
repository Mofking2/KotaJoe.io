const element1 = document.querySelectorAll(".btn");
	var div = document.getElementById("selected");

	let Itemll =[];
	let item14 =[];
	let item15 = [];
	let item16 = [];
	let item17 = [];
	let item18 = [];
	let item28 = [];
	let item39 = [];
	let item45 = [];
	let val=[];

for ( const [index,item] of element1.entries()){
	item.addEventListener("click", function(e){
	e.preventDefault();
		//console.log(item.value);
		
	console.log(index,item.value);
	

	
	selected.innerHTML = "R" + item.value + " Kota is selected";
	selected.style.color = "green";
	
	document.getElementById("descrip").innerHTML= val;
	countItems();
	totalCost()
	displayCart()
});
function refreshCartprice(){
let itemNumber = localStorage.removeItem("totalCost");


	//if(itemNumber){
		//document.querySelector(".flex span").textContent = itemNumber;
	//}
}
function refreshCart(){
let itemNumber = localStorage.removeItem("cartItem");

	//if(itemNumber){
		//document.querySelector(".flex span").textContent = itemNumber;
	//}
}
function load(){
let itemNumber = localStorage.getItem("cartItem");

if(itemNumber){
	
		document.querySelector(".flex span").textContent = itemNumber;
	}
}

function loadingprice(){
let itemNumber = localStorage.getItem("totalCost");
	itemNumber=parseInt(itemNumber)
if(itemNumber){
		
		document.querySelector(".flex #price").textContent =itemNumber;
	}
}




function countItems(){
	let itemNumber = localStorage.getItem("cartItem");
	
	itemNumber = parseInt(itemNumber)

	console.log(itemNumber)
	if(itemNumber){
		localStorage.setItem("cartItem",itemNumber + 1);
		document.querySelector(".flex span").textContent= itemNumber + 1;
	}
	else {
		localStorage.setItem("cartItem",1);
		document.querySelector(".flex span").textContent=1;
	}
	
	
}

function totalCost(){
	let itemNumber = localStorage.getItem("totalCost");
	console.log("here",itemNumber)
	console.log("Selected Kota price",item.value)
	
	console.log(typeof item.value)
	selectedItemVal = parseInt(item.value)
	
	itemNumber = parseInt(itemNumber);
	console.log(typeof selectedItemVal)
	
	console.log(typeof itemNumber)
	
	if(itemNumber){
		localStorage.setItem("totalCost",(itemNumber + selectedItemVal));
		//document.querySelector("#price").textContent= "R "+(itemNumber + selectedItemVal);
	} else {
		localStorage.setItem("totalCost", selectedItemVal );
		//document.querySelector("#price").textContent= "R "+(selectedItemVal);
	}
	
}

function displayCart(){
		let itemsIn =  localStorage.getItem("kotas")
		
	var name = item.value
	
	if(itemsIn ){
		Itemll.push(name)
		console.log("Selected Kota price222 "+Itemll)
		localStorage.setItem("kotas", itemsIn + name)
		//document.querySelector(".flex  #descrip").textContent = Itemll.length;
	console.log(Itemll, "moere")
	} else {
		localStorage.setItem("kotas", itemsIn)
	}
	console.log(Itemll)
		

	if (name == "14")
	{
		item14.push(name)
			document.querySelector(".flex  #descrip").textContent= item14;
	} else if (name == "15")
	{
		item15.push(name)
			document.querySelector(".flex #descrip").textContent= item15;
	}else if (name == "16")
	{
		item16.push(name)
			document.querySelector(".flex #descrip").textContent= item16;
	}else if (name == "17")
	{
		item17.push(name)
			document.querySelector(".flex #descrip").textContent= item17;
	}else if (name == "18")
	{
		item18.push(name)
			document.querySelector(".flex #descrip").textContent= item18;
	}else if (name == "28")
	{
		item28.push(name)
			document.querySelector(".flex #descrip").textContent= item28;
	}else if (name == "39")
	{
		item39.push(name)
			document.querySelector(".flex #descrip").textContent= item39;
	}else if (name == "45")
	{
		item45.push(name)
			document.querySelector(".flex #descrip").textContent= item45;
	}
	
	
	
	
}
load()

loadingprice()
refreshCart() 
refreshCartprice()
}
		//location.href = 'confirmOrder.htm';
	
	

