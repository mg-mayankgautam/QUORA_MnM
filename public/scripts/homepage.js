console.log("attached");
const add_question_btn = document.querySelector(".add_question_btn");
const question_input = document.querySelector(".question_input");

console.log(add_question_btn);


add_question_btn.addEventListener("click", async (e) => {
    
    e.preventDefault();

    try{
        let data = await axios.post('/homepage/addquestion',{
            newquestion: question_input.value,
            
            
        })
        
        question_input.value = '';
        console.log('js wala data',data);
        
        }
        catch (e) {}
        
        

    
});



// async function getquestions(){
    
// }