console.log("attached");
const add_question_btn = document.querySelector(".add_question_btn");
const question_input = document.querySelector(".question_input");
const output_div = document.querySelector(".output_div");
// console.log(add_question_btn);


function addtopage(data){
   
    const dataarray =data.data.allQuestions;
    const currUser = data.data.currUser;
    //console.log(dataarray);
    console.log(currUser);

    output_div.innerHTML = '';

                    // <div class="question">
                    //     <div class="ques_info">
                    //         <div class="ques_user">posted by: m</div>
                    //         <div class="ques_date">posted on: date</div>
                    //         <div class="drop" data-dropdown=''>
                    //             <button class="settings" data-dropdown_btn=''>...</button>
                    //             <div class="menu">
                    //                 button delete
                                        // button edit 
                    //             </div>
                    //         </div>
                    //     </div>

                    //     <div class="ques_text">
                    //         what is AI? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos voluptatem eius quidem enim magni at porro iusto minima earum, quas ducimus deleniti quis, voluptatibus nesciunt explicabo consequatur delectus recusandae fugiat animi soluta placeat mollitia?     
                    //     </div>
                    
                    //     <div class="add_answer">
                    //             <button class="add_answer_btn"> + add answer</button>
                            
                    //             <div class="answer_num">2 previous answers</div>
                    //     </div>
                    // </div> 
        

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


add_question_btn.addEventListener("click", async (e) => {
    
    e.preventDefault();

    try{
        let data = await axios.post('/homepage/addquestion',{
            newquestion: question_input.value,
            
            
        })
        
        question_input.value = '';
       // console.log('js wala data',data);
        addtopage(data);
        
        }
        catch (e) {}
        
        

    
});

getquestions();
async function getquestions(){
    try{
    let data = await axios.get('/homepage/getquestions')
    //console.log('get questions aa gaya',data);
    addtopage(data);
    }
    catch (e) {};
}

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