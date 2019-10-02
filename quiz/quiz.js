var pos = 0
var test , test_status , question , choice , choices , chA , chB , chC , chD , correctanswer = 0

var questions = [
    [" Capital of INDIA ","Mumbai","Rajastan","Delhi","Kolkata","B"],
    ["Capital of MAHARASHTRA","Mumbai","Nagpur","Pune","Lonavala","A"],
    ["How many bananas are there in DOZEN?","6","10","7","12","D"],
    ["SQUARE of 5 ?","20","15","25","10","C"],
    ["What is our national BIRD ?","Ostrich","Penguin","parrot","Peacock","D"]
]

function quiz(x){
    return document.getElementById(x)
}

function renderquestion(){
    test = quiz("test")
    if(pos>=questions.length){
        quiz("test").innerHTML = `<h2>'CONGRATULATIONS' You got ${correctanswer} correct answers out of ${questions.length} questions</h2>`
        quiz("test_status").innerHTML = "<h1>Test Completed.</h1>"
        pos = 0
        correctanswer = 0
        return false
    }
    quiz("test_status").innerHTML = `Question ${pos+1} of ${questions.length}`
    question = questions [pos] [0]
    chA = questions [pos] [1]
    chB = questions [pos] [2]
    chC = questions [pos] [3]
    chD = questions [pos] [4]
    test.innerHTML = "<h3>"+question+ "</h3><br><br>"
    test.innerHTML += "<input type='radio' name='choices' value='A'>"+chA+"<br>"
    test.innerHTML += "<input type='radio' name='choices' value='B'>"+chB+"<br>"
    test.innerHTML += "<input type='radio' name='choices' value='C'>"+chC+"<br>"
    test.innerHTML += "<input type='radio' name='choices' value='D'>"+chD+"<br><br>"
    test.innerHTML += "<button onclick='check_answer()'>Submit</button>"
}

function check_answer(){
    choices = document.getElementsByName("choices")
    for(i=0;i<choices.length;i++){
        if(choices[i].checked){
            choice = choices[i].value
        }
    }
        if(choice == questions [pos][5]){
            correctanswer++
        }
        pos++
        renderquestion()
}
window.addEventListener('load',renderquestion,false)