const orderButton = document.querySelector('.contacts__btn');

if (orderButton) {
  
  orderButton.addEventListener('click', function() {
    
    alert("Thank you! Our manager will contact you in 15 minutes.");
    

    orderButton.textContent = "✓ Request Sent!";
    
    orderButton.style.backgroundColor = "#28a745";
    
    orderButton.style.cursor = "default";
    
  });
}