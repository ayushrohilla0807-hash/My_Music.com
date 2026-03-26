let cart = document.querySelector("#cart-count");
let buttons = document.querySelectorAll(".add-cart");

let cartTotal = 0;

buttons.forEach(button => {

    button.addEventListener("click", function(e) {

        // First click → convert button
        if(button.innerText === "ADD TO 🛒"){

            cartTotal++;
            cart.innerText = cartTotal;

            button.innerHTML = `
                <button class="minus">-</button>
                <span class="qty">1</span>
                <button class="plus">+</button>
            `;
        }

        // PLUS button
        if(e.target.classList.contains("plus")){
            let qty = button.querySelector(".qty");
            let value = parseInt(qty.innerText);

            value++;
            qty.innerText = value;

            cartTotal++;
            cart.innerText = cartTotal;
        }

        // MINUS button
        if(e.target.classList.contains("minus")){
            let qty = button.querySelector(".qty");
            let value = parseInt(qty.innerText);

            if(value > 1){
                value--;
                qty.innerText = value;

                cartTotal--;
                cart.innerText = cartTotal;
            }
            else{
                // back to add button
                button.innerHTML = "ADD TO 🛒";
                cartTotal--;
                cart.innerText = cartTotal;
            }
        }

    });

});