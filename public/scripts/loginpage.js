const openModalbtn = document.querySelectorAll('[data-modal-target]');
const closeModalbtn = document.querySelectorAll('[data-close-btn]');
const overlay = document.getElementById('overlay');


openModalbtn.forEach(button=>{
    button.addEventListener('click', ()=>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

overlay.addEventListener('click', ()=>{
    const modals= document.querySelectorAll('.login.active');
    modals.forEach(modal=> {
        closeModal(modal);
    })
})

closeModalbtn.forEach(button=>{
    button.addEventListener('click', ()=>{
        const modal = button.closest('.login');
        closeModal(modal);
    })
})

function openModal(modal){
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');

    signup_title.classList.add('hide');
    login_title.classList.remove('hide');
    signup_body.style.display='none';
    login_body.style.display='block';

}

function closeModal(modal){
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

const login_title = document.querySelector('.login_title');
const signup_title = document.querySelector('.signup_title');
const login_body = document.querySelector('.login_body');
const signup_body = document.querySelector('.signup_body');

login_title.addEventListener('click', ()=>{
    signup_title.classList.add('hide');
    login_title.classList.remove('hide');
    signup_body.style.display='none';
    login_body.style.display='block';
});

signup_title.addEventListener('click', ()=>{
    login_title.classList.add('hide');
    signup_title.classList.remove('hide');
    signup_body.style.display='block';
    login_body.style.display='none';
});

signup_body.style.display='none';
login_body.style.display='block';