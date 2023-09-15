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
	let items=
	[
	{
			name:"tazz Kota",
			price:14,
			inCart:0 
	
	},
	{
			name:"corolla Kota",
			price:15,
			inCart:0

	}
	,
	{
			name:"langly KOta",
			price:16,
			inCart:0

	},
	{
			name:"Corsa  Kota",
			price:17,
			inCart:0

	},
	{
			name:"mini Cooper Kota",
			price:18,
			inCart:0

	},
	{
			name:"Fiat Kota",
			price:22,
			inCart:0

	},
	{
			name:"Audi Kota",
			price:28,
			inCart:0

	},
	{
			name:"Bmw Kota",
			price:35,
			inCart:0

	},
	{
			name:"MercedesBenz Kota",
			price:39,
			inCart:0

	},
	{
			name:"RangeRover Kota",
			price:45,
			inCart:0

	}
];
const boxes = document.getElementsByClassName('items');

for (const box of boxes) {
  box.addEventListener('click', (event) => {
    event.target.remove();
  });
}
for ( const [index,item] of element1.entries()){
	item.addEventListener("click", function(e){
	e.preventDefault();
		//console.log(item.value);
		
	//console.log(index,item.value);
	

	
	selected.innerHTML = "R" + item.value + " Kota is selected";
	selected.style.color = "green";
	
	//document.getElementById("descrip").innerHTML= val;
	countItems(items[index]);
	totalCost()
	//displayCart()
		 //displayCartItems()
		
	
});


		
function remove_item(selected_item) {
        selected_item.parentNode.removeChild(selected_item);
		
    }

	function date(){
		const myDate = d = new Date();
		
		const date = myDate.toUTCString()
		document.getElementById("date").textContent =date;
	}
function refreshCartprice(){
let itemNumber = localStorage.removeItem("totalCost");


	//if(itemNumber){
		//document.querySelector(".flex span").textContent = itemNumber;
	//}
}
function refreshCart(){
let itemNumber = localStorage.removeItem("cartItem");
let items = localStorage.removeItem("itemsInCart");
	//if(itemNumber){
		//document.querySelector(".flex span").textContent = itemNumber;
	//}
}


function loadingprice(){
let itemNumber = localStorage.getItem("totalCost");
	itemNumber=parseInt(itemNumber)
if(itemNumber){
		
		document.querySelector(".flex #price").textContent =itemNumber;
	}

let item = localStorage.getItem("cartItem");

if(item){
	
		document.querySelector(".flex span").textContent = item;
	}
}




function countItems(items){
	console.log('item clickd',items)
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
	
	setitemsInCArt(items);
}

	function setitemsInCArt(items){
		let cartItems = localStorage.getItem("itemsInCart");
			cartItems = JSON.parse(cartItems)
		console.log("My card items",cartItems)
		
	if(cartItems != null){
		if(cartItems[items.name] == undefined){
			cartItems = {
				...cartItems,
				[items.name]:items
	
			}
		}
		cartItems[items.name].inCart += 1
	
	} else {
	
			items.inCart =1;
			cartItems = {
			[items.name]:items
	
			}
	}
	
	
	localStorage.setItem("itemsInCart", JSON.stringify(cartItems))
	}
	
	
function displayCartItems(){
					let itemsInCart = localStorage.getItem("itemsInCart")	
					itemsInCart = JSON.parse(itemsInCart)
					
					
					
					let containerDis = document.querySelector(".neo")
				
				if(itemsInCart &&containerDis){
					containerDis.innerHTML = "";
					console.log("running")	
						Object.values(itemsInCart).map(item =>{
							containerDis.innerHTML +=`
							<ul class="items">
								<li class="item" onclick="remove_item(this)">${item.inCart} X ${item.name} of price<b> R</b>  ${item.price}  <button type="button" class="close" >x</button></li>
							</ul>
							` 
						
					});
					
				}
					//containerDis.textContent = itemsInCart.name;
					
			
				
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






}
loadingprice()

refreshCartprice()
displayCartItems()	//location.href = 'confirmOrder.htm';
	refreshCart()

	
	date()

