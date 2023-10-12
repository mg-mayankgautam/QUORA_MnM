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




document.addEventListener('click', e =>{
    const isDropdown = e.target.matches('[data-dropdown-btn]')
    if (!isDropdown && e.target.closest('[data-dropdown]') !=null) return

    let currentDropdown
    if (isDropdown) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if(dropdown=== currentDropdown) return
        dropdown.classList.remove('active')
    })
})


                    // // <div class="question">
                    //     // <div class="ques_info">
                    //         <div class="ques_user">posted by: m</div>
                    //         <div class="ques_date">posted on: date</div>
                    //         <div class="drop" data-dropdown>
                    //             <button class="settings" data-dropdown-btn>...</button>
                    //             <div class="menu">
                    //                 <button class="delete_btn">delete</button>
                    //                 <button>edit</button>
                    //             </div>
                    //         </div>
                    //     // </div>

                    //     <div class="ques_text">
                    //         what is AI? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos voluptatem eius quidem enim magni at porro iusto minima earum, quas ducimus deleniti quis, voluptatibus nesciunt explicabo consequatur delectus recusandae fugiat animi soluta placeat mollitia?     
                    //     </div>
                    
                    //     <div class="add_answer">
                    //             <button class="add_answer_btn"> + add answer</button>
                            
                    //             <div class="answer_num">2 previous answers</div>
                    //     </div>
                    // // </div>
                    


