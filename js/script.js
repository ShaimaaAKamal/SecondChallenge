function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


let cartIcon =document.getElementById('cart')
let cartContainer=document.getElementsByClassName('cart')[0];
let emptyCart=document.getElementsByClassName('empty')[0];
let fullCart=document.getElementsByClassName('full')[0];
let qty=document.getElementById('qty');

cartIcon.addEventListener('click',()=>{
  cartContainer.classList.toggle("show");
if(qty.innerText === "")
emptyCart.classList.toggle("show");
else
fullCart.classList.toggle("show");
})




let add=document.getElementById('plus');
let decrease=document.getElementById('minus');
let cartItems=document.getElementById('cartItem')
let addToCart=document.querySelector('.Qty + button');
let deleteItemFromCart=document.getElementById('remove');

add.addEventListener('click',()=>{
  cartItems.innerText=parseInt(cartItems.innerText )+ 1;
})

decrease.addEventListener('click',()=>{
  cartItems.innerText=(parseInt(cartItems.innerText ) === 0)? 0 : parseInt(cartItems.innerText ) -1  ;
})

addToCart.addEventListener('click',()=>{
  qty.innerText=(parseInt(cartItems.innerText ) === 0) ? "" : cartItems.innerText;
})

deleteItemFromCart.addEventListener('click',()=>{
  qty.innerText="";
  cartItems.innerText=0;
  fullCart.classList.toggle("show");
  emptyCart.classList.toggle("show");

})

