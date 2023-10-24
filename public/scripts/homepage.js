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

                   
         
        

        for(let i=0; i<dataarray.length; i++){
        
          //console.log(dataarray.allQuestions);
        //    const questions_display = document.createElement("div");
        //    questions_display.classList.add("questions_display");
        
           const question = document.createElement("div");
           question.classList.add("question")
           question.id= dataarray[i]._id;

           
           // question_div.dataset.uniqueid=questions[i].Q_id;
        
           const ques_info = document.createElement("div");
           ques_info.classList.add("ques_info");
           ques_info.id= dataarray[i]._id;
           
        
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
           ques_text.id= dataarray[i]._id;


        
           const add_answer = document.createElement("div");
           add_answer.classList.add("add_answer");
           add_answer.id= dataarray[i]._id;
           const add_answer_btn = document.createElement("button");
           add_answer_btn.classList.add("add_answer_btn");
          // add_answer_btn.id= dataarray[i]._id;
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
           output_div.appendChild(question);
        //    output_div.appendChild(questions_display);
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

const dropp = document.querySelector('.dropp');
dropp.dataset.dropdown='div';
const profile = document.querySelector('.profile');
const user_img = profile.querySelector('.user_img');
user_img.dataset.dropdown_btn='button';

document.addEventListener('click', e =>{
    const isDropdown = e.target.matches('[data-dropdown_btn]')
    // console.log(isDropdown)
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

//const delete_btn = document.querySelectorAll('.delete_btn');

///delete button
output_div.addEventListener('click', async (e) => {
if(e.target.className=='delete_btn'){

console.log(e.target.id);

try{
  let data = await axios.post('/homepage/deletequestion',{
            quesID:e.target.id

  }) 
  //console.log(data); 
  addtopage(data);
}
catch(e) {};

}

});
//delete button


//get questions/ home button
output_div.addEventListener('click',  (e) => {       

    if(e.target.className=='homebtn'){
    getquestions();
    }        
});    
//get questions /home button


//post answers
output_div.addEventListener('click', async (e) => {



    if (e.target.className=='add_answer_btn'){
        e.preventDefault();
        const answerinput =  document.querySelector('.answerinput');
        const currquestion =  document.querySelector('.questiontext');
       // console.log('currquestion',currquestion);

        try{
        let data = await axios.post('/homepage/addanswer',{
            answer: answerinput.value,
            currquestionID: currquestion.id
        })
        answerinput.value = '';
        console.log(data);}

        

    
    catch(err){console.log(err);}


    }
});
//post answers

//open a question
output_div.addEventListener('click', async (e) => {
    //if(e.target.className=='delete_btn'){
        // console.log(e.target.id);

    //console.log(e.target.className);
    if(e.target.className=='question'   || 
     e.target.className=='ques_info'    ||
     e.target.className=='ques_text'    ||
     e.target.className=='add_answer')
    { 
        output_div.innerHTML = '';
        const homebtn = document.createElement('button');
        homebtn.innerText = 'home';
        homebtn.classList.add('homebtn');
        output_div.appendChild(homebtn);
        

        // const answerinput = document.createElement('input');
        // output_div.appendChild(answerinput);
        // output_div.appendChild(answersubmit);


        let currentquestion = await axios.get(`/homepage/getcurrentquestion`,{
            params: {
              id: String(e.target.id)
            }
          });


        //console.log(currentquestion.data.question,currentquestion.data._id);


        const question = document.createElement("div");
        question.classList.add("question_disp")
        // question_div.dataset.uniqueid=questions[i].Q_id;
     
        const ques_info = document.createElement("div");
        ques_info.classList.add("questioninfo");
     
        const ques_user = document.createElement("div");
        ques_user.classList.add("questionuser");
        
     
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
     
        const delete_btn = document.createElement("button");
        delete_btn.classList.add("delete_btn");
        delete_btn.innerText="Delete";
        
        const edit_btn = document.createElement("button");
        edit_btn.classList.add("edit_btn");
        edit_btn.innerText="Edit";
        menu.appendChild(delete_btn);
        menu.appendChild(edit_btn);
        

        const questiontext = document.createElement("div");
        questiontext.classList.add("questiontext");
        questiontext.innerHTML = currentquestion.data.question;
        questiontext.id=currentquestion.data._id;
     
        const add_answer = document.createElement("div");
        add_answer.classList.add("add_answers");
     
        const form = document.createElement("form");

        const answerinput = document.createElement("input");
        answerinput.classList.add('answerinput');
        answerinput.placeholder='Add Answer:';

        const answersubmit = document.createElement('button');
        answersubmit.classList.add('add_answer_btn');
        answersubmit.innerText='+';
             
        const answer_num = document.createElement("div");
        answer_num.classList.add("answer_num");

        const answers_display = document.createElement("div");
        answers_display.classList.add("answers_display");
        const h3 = document.createElement("h3");
        h3.innerText='answers:';    
     
        menu.appendChild(copy_link);
        drop.appendChild(settings);
        drop.appendChild(menu);
        ques_info.appendChild(ques_user);
        ques_info.appendChild(ques_date);
        ques_info.appendChild(drop);
        form.appendChild(answerinput);
        form.appendChild(answersubmit);
        add_answer.appendChild(form);
        add_answer.appendChild(answer_num);
        answers_display.appendChild(h3);
        question.appendChild(ques_info);
        question.appendChild(questiontext);
        question.appendChild(add_answer);
        question.appendChild(answers_display);
        output_div.appendChild(question);

        // const questiontext = document.createElement('div');
        // questiontext.classList.add('questiontext');    
        
        let allanswers = await axios.get('/homepage/getanswers',{
            params: {
              id: String(e.target.id)
            }
          });
      //  console.log(allanswers);
       addtopageanswers(allanswers);

    }



    
    });
//open a question

function addtopageanswers(data){

        console.log(data.data);
        const dataarray =data.data
        const answers_display = document.querySelector('.answers_display')
        // console.log(answers_display);
        for(let i=0; i<dataarray.length; i++){

            const answer_div = document.createElement('div');
            answer_div.classList.add('answer');

            const ans_info = document.createElement('div');
            ans_info.classList.add('ans_info');
            const ans_user = document.createElement('div');
            ans_user.classList.add('ans_user');
            const ans_date = document.createElement('div');
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
            const delete_btn = document.createElement("button");
            delete_btn.classList.add("delete_btn");
            delete_btn.innerText="Delete";
            // delete_btn.id= dataarray[i]._id;
            const edit_btn = document.createElement("button");
            edit_btn.classList.add("edit_btn");
            edit_btn.innerText="Edit";

            const ans_text = document.createElement("div");
            ans_text.classList.add("ans_text");
            ans_text.innerHTML = dataarray[i].answer

            menu.appendChild(copy_link);
            menu.appendChild(delete_btn);
            menu.appendChild(edit_btn);
            drop.appendChild(settings);
            drop.appendChild(menu);
            ans_info.appendChild(ans_user);
            ans_info.appendChild(ans_date);
            ans_info.appendChild(drop);
            answer_div.appendChild(ans_info);
            answer_div.appendChild(ans_text);
            answers_display.appendChild(answer_div);
        }
    }