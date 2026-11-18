// Step 1: Create a new element.
const newCard1 = document.createElement("div")
const newCard2 = document.createElement("div")
const newCard3 = document.createElement("div")

const products = [{
    title: "Duster",
    price: "Rs. 200",
    rating: "4.5"
},
{
    title: "Marker",
    price: "Rs. 70",
    rating: "4.1"
},
{
    title: "HDMI Connector",
    price: "Rs. 900",
    rating: "4.0"
}
]
// Step 2: Set the required content
// 1st Card
newCard1.className = "card";
newCard1.innerHTML = `<img src=""> 
<div class="product-info">
<h4>${products[0]["title"]}</h4>
<p>Price: ${products[0]["price"]}</p>
<p>Rating: ${products[0]["rating"]}⭐️ </p>
</div>`;
// 2nd Card
newCard2.className = "card";
newCard2.innerHTML = `<img src=""> 
<div class="product-info">
<h4>${products[1]["title"]}</h4>
<p>Price: ${products[1]["price"]}</p>
<p>Rating: ${products[1]["rating"]}⭐️ </p>
</div>`;
// 3rd Card
newCard3.className = "card";
newCard3.innerHTML = `<img src=""> 
<div class="product-info">
<h4>${products[2]["title"]}</h4>
<p>Price: ${products[2]["price"]}</p>
<p>Rating: ${products[2]["rating"]}⭐️ </p>
</div>`;
// Step 3: Attach it to the DOM tree
//    part 1: find the parent element
const parent = document.getElementById("root");
//    part 2: push the newly create element inside the parent
//    append(X), ** appendChild, prepend(X), insertBefore(X)
parent.appendChild(newCard1);
parent.appendChild(newCard2);
parent.appendChild(newCard3);
