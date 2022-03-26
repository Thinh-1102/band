
const BuyBtns = document.querySelectorAll('.js-button-tickets')
let modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContaner = document.querySelector('.js-contaner')
function showBuyTicket() {
    modal.classList.add('open')
}
function hideBuyTicket() {
    modal.classList.remove('open')
}
for (const BuyBtn of BuyBtns) {
    BuyBtn.addEventListener('click', showBuyTicket)
}
modalClose.addEventListener('click', hideBuyTicket)
modal.addEventListener('click', hideBuyTicket)
modalContaner.addEventListener('click', function (event) {
    event.stopPropagation()
})
const modalClosebut = document.querySelector('.js-modal-close-button')
modalClosebut.addEventListener('click', function () {
    modal.classList.remove('open')
})

var tiMenu = document.querySelector('.menu-button');
var header = document.getElementById('header');
var headerHight = header.clientHeight;
tiMenu.addEventListener('click', function () {
    if (header.clientHeight === headerHight) {
        header.style.height = 'auto'
    } else {
        header.style.height = '47px'
    }
})

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i]
        var fatherElement = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav')
        console.log(fatherElement)
        menuItem.onclick = function(event){
            if(fatherElement){
                event.preventDefault()
            }else{
            header.style.height = '47px'
            }
        }
    }

