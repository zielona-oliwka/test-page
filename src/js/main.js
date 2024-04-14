const yearFooter = document.querySelector(".footer__year")
const changeyear = () => {
	const year = new Date().getFullYear()
	yearFooter.textContent = year;
}
changeyear()
// navigation start
const nav = document.querySelector('.navigation .nav');
const OpenBtn = document.querySelector('.openBtn');
const Closebtn = document.querySelector('.closeBtn');
const btnBox = document.querySelector('.btnBox');

const openCloseMenu = (e) => {
	OpenBtn.classList.toggle('removeBtn');
	Closebtn.classList.toggle('showBtn');
	nav.classList.toggle('showBtn');
	// nav.classList.toggle('openMenu');
};

btnBox.addEventListener('click', openCloseMenu);

// =============accordion section ===========
const accordion = document.querySelector('.accordion');
const accordionBtns = document.querySelectorAll('.accordionBtn');

function openAccordionItmes() {
	if (this.nextElementSibling.classList.contains('openBtn')) {
		this.nextElementSibling.classList.remove('openBtn');
	} else {
		closeAccordionItems();
		this.nextElementSibling.classList.toggle('openBtn');
	}
}

const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll('.accordion__box--answear');
	allActiveItems.forEach((item) => item.classList.remove('openBtn'));
};





accordionBtns.forEach((btn) =>
	btn.addEventListener('click', openAccordionItmes)
);


const imageItem = document.querySelectorAll(".image img")
const popupGallery = document.querySelector(".galleryBox__popup")
const popuImage = document.querySelector(".imagePopUp")
const closeBtnImage = document.querySelector(".btnPopup__close")
const previousBtnImage = document.querySelector(".btnPopup__left")
const nextBtnImage = document.querySelector(".btnPopup__right")

let currentImgIndex 

imageItem.forEach((image, index) => {
	image.addEventListener("click", e =>{
		popupGallery.classList.remove("hide")
        document.body.classList.add("sticky-body")
        popuImage.src = e.target.src
        currentImgIndex = index; 
	})

} )
const nextImage = () => {
    if(currentImgIndex >= imageItem.length - 1) {
        currentImgIndex = 0
    }else{
        currentImgIndex++
    }
    
popuImage.src = imageItem[currentImgIndex].src
}
const previousImage = () => {
    if(currentImgIndex < 0){
        currentImgIndex = imageItem.length - 1}
        else{
            currentImgIndex--
        }
        popuImage.src = imageItem[currentImgIndex].src
}

nextBtnImage.addEventListener("click", nextImage )
previousBtnImage.addEventListener("click", previousImage )
closeBtnImage.addEventListener("click", () =>{
    popupGallery.classList.add("hide")
    document.body.classList.remove("sticky-body")
} )

// ======= contact section ====================

const username = document.querySelector('#username');
const email = document.querySelector('#emailPost');
const message = document.querySelector('#message');
const sendBtn = document.querySelector('.sendBtn');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');

	formBox.classList.add('error');
	errorMsg.textContent = msg;
};
const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};

const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder)
        } else {
            clearError(el)
        };
    });
};

const checkEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)) {
        clearError(email)
    } else {
        showError(email, 'E-mail jest niepoprawny')
    }
}

const checkErrors = () => {

    const allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0;

    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++
        }
    })

    if (errorCount === 0) {
        popup.classList.add('show-popup')
    }
}

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    checkForm([username, message, email])
    checkEmail(email);
    checkErrors()

})

// =========================== gallery=================

// ================= footer=========================


