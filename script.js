const body = document.querySelector("body");
const sidebar = body.querySelector(".slidebar");
const toggle = body.querySelector(".toggle");
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let close = document.querySelector('#close-cart');

//sidebar
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

//cart bar
cartIcon.addEventListener("click", () => {
  cart.classList.add('active');
})

//cart bar tutup
close.addEventListener("click", () => {
  cart.classList.remove('active');
})

if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready();
}

function ready(){
let removeCart = document.getElementsByClassName('cart-remove')
console.log(removeCart);
for(let i=0; i < removeCart.length; i++){
  let button = removeCart[i];
  button.addEventListener('click', removeCartItem);
}
let quantityInput = document.getElementsByClassName('cart-qty');
for(let j=0; j < quantityInput.length; j++){
  let input = quantityInput[j];
  input.addEventListener('change', quantityChanged);
}
  let addCart = document.getElementsByClassName('buy');
  for(let k = 0; k < addCart.length; k++){
    let button = addCart[k];
    button.addEventListener('click', addCartClicked);
  }
}


//add Cart
function addCartClicked(event){
  let button = event.target;
  let shop = button.parentElement;
  let title = shop.getElementsByClassName('product-title')[0].innerText;
  let price = shop.getElementsByClassName('product-price')[0].innerText;
  let images = shop.getElementsByClassName('images')[0].src;
  addProductToCart(title, price, images);
  updateCart();
}

//Tambah Cart
function addProductToCart(title, price, images){
  let cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');
  let cartItems = document.getElementsByClassName('cart-content')[0];
  let cartItemName = document.getElementsByClassName('cart-product-item');
  for(var i=0; i < cartItemName.length; i++){
    if(cartItemName[i].innerHTML == title){
      alert("Barang Sudah di Pesan, Cek Keranjang");
      return;
    }
  }
  let cartBoxContent = `<img src="${images}" alt="" class="cart-img" width="100" height="100" style="border-radius: 20px; margin-left: 10px;">
<div class="detailBox">
    <div class="cart-product-item">${title}</div>
    <div class="cart-price">${price}</div>
    <input type="number" value="1" class="cart-qty">
</div>
<i class='bx bxs-trash-alt cart-remove cart-remove' ></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName('cart-qty')[0].addEventListener('change', quantityChanged);

}

//Hapus Cart
function removeCartItem(event){
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateCart();
}

//Ubah Quality
function quantityChanged(event){
  let input = event.target;
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updateCart();
}

//Update Cart
function updateCart(){
  var cartContent = document.getElementsByClassName('cart-content');
  var cartBoxes = document.getElementsByClassName('cart-box');
  var total = 0;
  for(var i=0; i < cartBoxes.length; i++){
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-qty')[0];
    var price = parseFloat(priceElement.innerText.replace("Rp.",""));
    var quantity = quantityElement.value;
    total = total + price * quantity;

    total = Math.round(total * 100)/100;
    document.getElementsByClassName('total-price')[0].innerText = "Rp." + total;
  }
}

