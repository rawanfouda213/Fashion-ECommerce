let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');

})

let products = [
  {
    id: 1,
    name: "Short Jumpsuit",
    image: "/img/best/14.png",
    price: " 589.00",
    strike: " 600",
    more_info: "/Pages/moreinfo.html",
  },
  {
    id: 2,
    name: "Pink Skirt",
    image: "/img/best/15.png",
    price: "499.00",
    strike: "550",
    more_info: "/Pages/moreinfo.html",
  },
  {
    id: 3,
    name: "Floral Dress",
    image: "/img/best/12.png",
    price: "369.00",
    strike: "400",
    more_info: "#",
  },
  {
    id: 4,
    name: "Sleeve Red Dress",
    image: "/img/best/1.png",
    price: "169.00",
    strike: "300",
    more_info: "#",
  },
  {
    id: 5,
    name: "Green Flats",
    image: "/img/best/7.png",
    price: "669.00",
    strike: "700",
    more_info: "#",
  },
  {
    id: 6,
    name: "Black Shoulder Shirt",
    image: "/img/best/4.png",
    price: "199.00",
    strike: "300",
    more_info: "#",
  },
  {
    id: 7,
    name: "Beige Skirt",
    image: "/img/best/8.png",
    price: "499.00",
    strike: "600",
    more_info: "#",
  },
  {
    id: 8,
    name: "Apricot Hoodie",
    image: "/img/best/6.jpg",
    price: "589.00",
    strike: "610",
    more_info: "#",
  },
  {
    id: 9,
    name: "Green Short Jumpsuit",
    image: "/img/best/9.png",
    price: "569.00",
    strike: "640",
    more_info: "#",
  },
  {
    id: 10,
    name: "Gray Long Jumpsuit",
    image: "/img/best/10.png",
    price: "209.00",
    strike: "350",
    more_info: "#",
  },
  {
    id: 11,
    name: "Beige Sweater",
    image: "/img/best/2.png",
    price: "250.00",
    strike: "340",
    more_info: "#",
  },
  {
    id: 12,
    name: "Sweater Vest",
    image: "/img/best/3.jpg",
    price: "300.00",
    strike: "400",
    more_info: "#",
  },
  {
    id: 13,
    name: "Floral Blue Top",
    image: "/img/best/13.png",
    price: "179.00",
    strike: "200",
    more_info: "#",
  },
  {
    id: 14,
    name: "Black Top",
    image: "/img/best/16.png",
    price: "669.00",
    strike: "800",
    more_info: "#",
  },
  {
    id: 15,
    name: "Beige Top",
    image: "/img/best/17.png",
    price: "400.00",
    strike: "510",
    more_info: "#",
  },
  {
    id: 16,
    name: "Black Short Jacket",
    image: "/img/best/18.png",
    price: "369.00",
    strike: "430",
    more_info: "#",
  },
];

let listCards = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
      newDiv.innerHTML = `
      <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
            <img src="${value.image}" class="card-img-top">
            <h5 class="card-title ms-5">${value.name}</h5>
          <div class="thumb-content ms-5">
          <p class="item-price"><strike>$${value.strike.toLocaleString()}</strike><b>$${value.price.toLocaleString()}</b></p>
          <a class="btn btn-primary mb-5" onclick="addToCard(${key})">Add to Cart</a>  
          <a href= "${value.more_info}" class="btn btn-primary mb-5">more info</a>  
            </div>`;
            
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + (value.price * value.quantity);
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.style.marginBottom='5px';

            newDiv.innerHTML = `    
            <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
//////////*check out 
total.addEventListener('click', () => {
    listCards = [];
    reloadCard();
    
    alert('Checkout successful! Thank you for your purchase.');
    body.classList.remove('active');
    
});

