const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0;
const cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIsOpen = false
let buzzy = 0;
let c3po = 0;
let ironman = 0;


for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].onclick = function () {
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch (addToCartButtons[i].dataset.product) {
            case "buzzy":
                buzzy += 1;
                break;
            case "c3po":
                c3po += 1;
                break;
            case "ironman":
                ironman += 1;
                break;
        }
        if (modalIsOpen === false) {
            shoppingModal.style.display = "flex";
            modalIsOpen = true
            setTimeout(function () {
                shoppingModal.style.display = "none";
                modalIsOpen = false;
            }, 2000);
        }
    }
}


const checkoutButton = document.getElementById("js--checkoutButton");
const checkoutWindow = document.getElementById("js--checkoutWindow");
let checkoutIsOpen = false;

checkoutButton.onclick = function () {
    if (checkoutIsOpen === false) {
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block";
        checkoutIsOpen = true;
        document.getElementById("js--amount-buzzy").innerHTML = buzzy + "x";
        document.getElementById("js--amount-c3po").innerHTML = c3po + "x";
        document.getElementById("js--amount-ironman").innerHTML = ironman + "x";
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none"
    checkoutIsOpen = false;
}