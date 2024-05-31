let ArrayProduct =[
    {
        id:'1',
        name:"HTML",
        price:100,
        img:"https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png",
    },
    {
        id:'2',
        name:"CSS",
        price:400,
        img:"../images/CSS.png",
    },
    {
        id:'3',
        name:"Javascript",
        price:600,
        img:"../images/javascript.png",
    },
    {
        id:'4',
        name:"React ",
        price:20,
        img:'../images/React-icon.svg.png'
    },
    {
        id:'5',
        name:"Node Js",
        price:200,
        img:'../images/node-js.png'
    },
    {
        id:'6',
        name:"Mongo DB",
        price:200,
        img:'../images/MongoDB.png'
    },
    {
        id:'7',
        name:"Angular",
        price:200,
        img:'../images/Angular.png'
    },
  
]

const body = document.querySelector('body'),
product = document.querySelector(".products"),
shoppingBasket = document.querySelector(".shoppingbasket"),
closecart = document.querySelector('.close'),
productList =document.querySelector('.productList'),
quantity=document.querySelector('.quantity'),
total=document.querySelector('.total')
;

let CheckOutList = [];


shoppingBasket.onclick=()=>{
   body.classList.add("active")
}
closecart.onclick=()=>{
    body.classList.remove("active")
}


function init(){
    ArrayProduct.forEach((item,key)=>{
        // console.log(item)
        let div= document.createElement('div')
        div.classList.add('item')

        div.innerHTML = `
        <img src="${item.img}"/>
        <div class="name">${item.name}</div>
        <div class="price">${item.price}</div>
        <button onclick="addToCart(${key})"><i class='bx bxs-cart'></i>Add to cart</button>
        `
       product.appendChild(div)
    })
}

function addToCart(Id){
    // console.log(ArrayProduct[Id])
  if(CheckOutList[Id]==null){
    CheckOutList[Id]=ArrayProduct[Id]
    CheckOutList[Id].quantity  = 1;
  }else{
    CheckOutList[Id].quantity +=1;
  }
reloadCart()

}
function reloadCart(){

    let count = 0;
    let totalPrice = 0;


    productList.innerHTML='';
 CheckOutList.forEach((item,key)=>{
    totalPrice += parseInt(item.price*item.quantity)
    count+=item.quantity;
    let li = document.createElement('li');
    li.innerHTML=`<img src="${item?.img}"/>
    <div >${item.name}</div>
    <div>${item.price}</div>
    <div class="qq">
    <button onclick="changeQuantity(${key},${item.quantity-1})">-</button>
    <div class="count">${item.quantity}</div>
    <button onclick="changeQuantity(${key},${item.quantity+1})">+</button>
    </div>
    `;
    productList.appendChild(li)
   
 })
 total.innerHTML=`<small>Subtotal (${count} items)</small>$`+totalPrice;
 quantity.innerHTML=count;
}
function changeQuantity(key,quantity){
   if(quantity==0){
    delete CheckOutList[key]
   }else{
    CheckOutList[key].quantity=quantity
   }
   reloadCart()
}

init()