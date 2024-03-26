let val =0;
function sum(){
    val = val +1;
    document.querySelector('.p0').innerHTML = val;
}
document.querySelector('.ajs1').addEventListener('click', sum);
document.querySelector('.ajs2').addEventListener('click', sum);
document.querySelector('.ajs3').addEventListener('click', sum);
document.querySelector('.ajs4').addEventListener('click', sum);

const Clos = document.querySelectorAll('#Clos');
const selectedProducts = document.getElementById('selected-products');
const sidePanel = document.getElementById('side-panel');
const AddToCard = document.querySelectorAll('.ico');

let totalPrice = 0;

function updateTotalPrice() {
  document.getElementById('total-price').innerText = 'Total: $' + totalPrice.toFixed(2);
}

AddToCard.forEach(function(button) {
  button.addEventListener('click', function() {
    const price = parseFloat(button.parentElement.querySelector('.ajs1').textContent.slice(1));
    totalPrice += price;
    updateTotalPrice();
    const productName = button.parentElement.querySelector('.ajs1').textContent;
    const productPrice = button.parentElement.querySelector('.ajs1').textContent;
    const li = document.createElement('li');
    li.textContent = productName +" " + "-" +" " + productPrice;
    selectedProducts.appendChild(li);
    sidePanel.style.right = '0';
  });
});

Clos.forEach(function(Clos){
  Clos.addEventListener('click', function() {
    sidePanel.style.right = '-300px';
    sidePanel.style.opacity = '0';
  })
})

AddToCard.forEach(function(AddToCard) {
  AddToCard.addEventListener('click', function(event) {
    if (!sidePanel.contains(event.target) && event.target !== selectedProducts) {
      sidePanel.style.right = '0px';
      sidePanel.style.opacity = '1';
    }
  });
})