let questions = [   
    {
        question: 'Which HTML tag is used to define an inline style?',
        choice1: '&lt;script>',
        choice2: '&lt;css>',
        choice3: '&lt;style>',
        choice4: '&lt;span>',
        answer: 3,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choice1: 'text-color',
        choice2: 'font-color',
        choice3: 'text-style',
        choice4: 'color',
        answer: 4,
    },
    {
        question: 'Which of the following is the correct way to comment in HTML?',
        choice1: '// Comment',
        choice2: '&lt;!-- Comment>',
        choice3: '/* Comment */',
        choice4: '&lt;! Comment>',
        answer: 2,
    },
];
function loadQuestion(index){
    var newDiv=document.createElement("div");
    newDiv.id="question";
    newDiv.innerHTML=`<h1>${questions[index].question}</h1>
    <div id="option">
        <div id="alpha">A</div>
        <div id="choice">${questions[index].choice1}</div>
    </div>
    <div id="option">
        <div id="alpha">B</div>
        <div id="choice">${questions[index].choice2}</div>
    </div>
    <div id="option">
        <div id="alpha">C</div>
        <div id="choice">${questions[index].choice3}</div>
    </div>
    <div id="option">
        <div id="alpha">D</div>
        <div id="choice">${questions[index].choice4}</div>
    </div>`
    document.body.appendChild(newDiv);
}
var index=0;
document.addEventListener("DOMContentLoaded",function(){
    loadQuestion(index);
    document.body.addEventListener("click",function(e){
        if(e.target.id=="choice"){
            if(index!=questions.length-1){
                e.target.parentNode.parentNode.remove();
                loadQuestion(++index);
            }
            else{
                window.location.href="endPage.html";
            }
        }
    })
})
 