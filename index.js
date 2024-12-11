const body = document.querySelector("body")
const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")
const about = document.querySelector(".about-section")
const pledgeModal = document.querySelector(".pledge-modal")
const closeModal = document.querySelector(".close-modal")
const modalOverlay = document.querySelector(".modal-overlay")
const bookmark = document.querySelector(".bookmark")
const bookmarkLogo = document.querySelector(".bookmark-logo")
const successModal = document.querySelector(".modal-success")
const successModalBtn = document.querySelector(".success-modal-btn")

let reward = ""

const closePledgeModal = function(){
    pledgeModal.classList.remove("active")
    body.classList.remove("dark")
    modalOverlay.classList.remove("active")
    document.querySelector(`#card-${reward}`).classList.remove("active")
    document.querySelector(`#pledge-${reward}`).classList.remove("active")
    var ele = document.getElementsByName('pledge-radio');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            document.querySelector(`#card-${ele[i].value}`).classList.remove("active")
            document.querySelector(`#pledge-${ele[i].value}`).classList.remove("active")
        }
    }
}

const openPledgeModal = function(e){
    console.log(e.target.dataset.pledge)
    if(e.target.classList.contains("btn")){
        pledgeModal.classList.add("active")
        modalOverlay.classList.add("active")
        window.scrollTo(0,0)
        reward = e.target.dataset.pledge
        document.querySelector(`#card-${reward}`).classList.add("active")
        document.querySelector(`#pledge-${reward}`).classList.add("active")
        document.querySelector(`#radio-id-${reward}`).checked = true
    }
}

const menuOpenClose = function(){
    mobileMenu.classList.toggle("active")
    if(mobileMenu.classList.contains("active")){
        hamburger.src = "./images/icon-close-menu.svg"
    }
    else{

        hamburger.src = "./images/icon-hamburger.svg"
    }
}

function displayRadioValue() {
    var ele = document.getElementsByName('pledge-radio');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            document.querySelector(`#card-${ele[i].value}`).classList.add("active")
            document.querySelector(`#pledge-${ele[i].value}`).classList.add("active")
        }else{
            document.querySelector(`#card-${ele[i].value}`).classList.remove("active")
            document.querySelector(`#pledge-${ele[i].value}`).classList.remove("active")
        }
    }
}

function openSuccesModal(){
    modalOverlay.classList.add("active")
    successModal.classList.add("active")
}

function closeSuccessModal(){
    modalOverlay.classList.remove("active")
    successModal.classList.remove("active")
}

function submitPledge(e){
    if(e.target.classList.contains("btn")){
        console.log(e.target.classList.contains("btn"))
        closePledgeModal()
        openSuccesModal()
        window.scrollTo(0,0)
    }
}



//Event Listeners

bookmark.addEventListener("click", function(){
    bookmark.classList.toggle("active")
})


hamburger.addEventListener("click", menuOpenClose)

about.addEventListener("click", openPledgeModal)

closeModal.addEventListener("click", closePledgeModal)

modalOverlay.addEventListener("click", closePledgeModal)

modalOverlay.addEventListener("click", closeSuccessModal)

successModalBtn.addEventListener("click", closeSuccessModal)

document.body.addEventListener('change', displayRadioValue)

pledgeModal.addEventListener("click", submitPledge)