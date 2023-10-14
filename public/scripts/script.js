const openModalbtn = document.querySelectorAll('[data-modal-target]');
const closeModalbtn = document.querySelectorAll('[data-close-btn]');
const overlay = document.getElementById('overlay');
const output_div = document.querySelector(".output_div");


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
    const isDropdown = e.target.matches('[data-dropdown_btn]')
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


function addtopage(data){
   
    const dataarray =data.data.allQuestions;
    const currUser = data.data.currUser;
    //console.log(dataarray);
    console.log(currUser);

    output_div.innerHTML = '';

                 
        

        for(let i=0; i<dataarray.length; i++){
        
          //console.log(dataarray.allQuestions);
           const questions_display = document.createElement("div");
           questions_display.classList.add("questions_display");
        
           const question = document.createElement("div");
           question.classList.add("question")
           // question_div.dataset.uniqueid=questions[i].Q_id;
        
           const ques_info = document.createElement("div");
           ques_info.classList.add("ques_info");
        
           const ques_user = document.createElement("div");
           ques_user.classList.add("ques_user");
           ques_user.innerHTML= `asked by: ${dataarray[i].currentUser}`; 
        
           const ques_date = document.createElement("div");
           ques_date.classList.add("ques_date");
        
           const drop = document.createElement("div");
           drop.classList.add("drop");
           drop.dataset.dropdown="div";
        
           const settings= document.createElement("button");
           settings.classList.add("settings");
           settings.dataset.dropdown_btn='button';
           settings.innerText='...';
        
           const menu = document.createElement("div");
           menu.classList.add("menu");

           const copy_link = document.createElement("button");
           copy_link.classList.add("copy_link");
           copy_link.innerText='Copy Link';
        
           if(currUser==dataarray[i].currentUser){
           const delete_btn = document.createElement("button");
           delete_btn.classList.add("delete_btn");
           delete_btn.innerText="Delete";
           delete_btn.id= dataarray[i]._id;
           const edit_btn = document.createElement("button");
           edit_btn.classList.add("edit_btn");
           edit_btn.innerText="Edit";
           menu.appendChild(delete_btn);
           menu.appendChild(edit_btn);
           }

           const ques_text = document.createElement("div");
           ques_text.classList.add("ques_text");
           ques_text.innerHTML= dataarray[i].question;
        
           const add_answer = document.createElement("div");
           add_answer.classList.add("add_answer");
        
           const add_answer_btn = document.createElement("button");
           add_answer_btn.classList.add("add_answer_btn");
           add_answer_btn.innerText='add answer';
        
           const answer_num = document.createElement("div");
           answer_num.classList.add("answer_num");
        
           menu.appendChild(copy_link);
           drop.appendChild(settings);
           drop.appendChild(menu);
           ques_info.appendChild(ques_user);
           ques_info.appendChild(ques_date);
           ques_info.appendChild(drop);
           add_answer.appendChild(add_answer_btn);
           add_answer.appendChild(answer_num);
           question.appendChild(ques_info);
           question.appendChild(ques_text);
           question.appendChild(add_answer);
           questions_display.appendChild(question);
           output_div.appendChild(questions_display);

            } 

}                




getquestions();

async function getquestions(){
    //console.log("attachrd")

                        try{
                        let data = await axios.get('/authentication/getquestions',)
                       // console.log('get questions aa gaya',data);
                        addtopage(data);
                        }
                        catch (e) {};
}


