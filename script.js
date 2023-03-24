function grade() {
    const questions = [document.getElementById("qOne"),
                    document.getElementById("qTwo"),
                    document.getElementById("qThree"),
                    document.getElementById("qFour"),
                    document.getElementById("qFive"),]
    const answers = ["body", "img", "alt", "input", "text"];
    let score = 0;
    for(let i in answers) {
        if(questions[i].value.toLowerCase() == answers[i]) {
            score ++;
        }
    }
    if(score == 5) {
        alert("You scored "+score+"/5 \nCongratulations!")
    }else{
        alert("You scored "+score+"/5")
    }
}