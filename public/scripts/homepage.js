console.log("attached");
const add_question_btn = document.querySelector(".add_question_btn");
const question_input = document.querySelector(".question_input");
const output_div = document.querySelector(".output_div");
// console.log(add_question_btn);

function addtopage(data){
   // console.log('js wala data',data);
    const dataarray =data.data;
    //console.log('data.data',dataarray);
    output_div.innerHTML = '';
    // const output_div= document.createElement("div");
    
    const questions_display = document.createElement("div");
    questions_display.classList.add("questions_display");

    const dataquestion = document.createElement("div");
    //dataquestion.dataset.dataquestion = data-question;

    question_div.dataset.uniqueid=questions[i].Q_id;


    questions_display.appendChild( dataquestion);

    output_div.appendChild( questions_display);
    


for(let i=0; i<dataarray.length; i++){
  
   console.log(dataarray[i].question);
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



// async function getquestions(){
    
// }