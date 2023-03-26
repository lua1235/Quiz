function grade() {
    const questions = [document.getElementById("qOne"),
                    document.getElementById("qTwo"),
                    document.getElementById("qThree"),
                    document.getElementById("qFour"),
                    document.getElementById("qFive"),
                    document.getElementById("qSix")]
    const answers = ["body", "img", "alt", "input", "text", "script"];
    let score = 0;
    for(let i in answers) {
        if(questions[i].value.toLowerCase() == answers[i]) {
            score ++;
        }
    }
    if(score == 6) {
        alert("You scored "+score+"/6 \nCongratulations!")
    }else{
        alert("You scored "+score+"/6")
    }
}