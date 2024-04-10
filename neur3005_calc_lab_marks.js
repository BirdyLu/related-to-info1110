submissions = [504983, 504969, 504980, 504974, 504975, 504971]
console.log("Use \"calcGrade()\" to calculate the grade of the all completed weekly quiz marks.")

function getGrade(submission_id){
    var trElement = document.getElementById('submission_' + submission_id.toString());
    if (trElement) {
        var grade = Number(trElement.getElementsByClassName("grade")[0].innerText.split("\n")[1].trim());
        return grade;
    }
}

function getFullmark(submission_id){
    var trElement = document.getElementById('submission_' + submission_id.toString());
    if (trElement) {
        var fullmark = Number(trElement.getElementsByClassName("tooltip")[0].outerText.split("/")[1].trim());
        return fullmark;
    }
}

function each(submission_id, i){ //pass i for display purpose only
    var grade = getGrade(submission_id);
    var fullmark = getFullmark(submission_id);
    console.log("Your week "+i+" quiz mark: " + grade + "/" + fullmark);
    return {grade: grade, fullmark: fullmark};
}

function calcGrade(){ //
    var sum = 0;
    var fullmarks = 0;
    var ratios = []
    if (2 >= 1) { //nvm wtf is this 
        for (var i = 0; i < submissions.length; i++){
            try {
                var calc = each(submissions[i], i+1);
                sum += calc.grade;
                fullmarks += calc.fullmark;
                ratios.push(parseInt((calc.grade/calc.fullmark)*10));
            }
            catch (TypeError) {
                console.log("Cannot find the rest quiz marks from week "+(i+1)+" :( Possibly not released yet!");
                break;
            }
        } 
        console.log("Horizontal bar graph of all found weekly quiz marks:");
        for (var i = 0; i < ratios.length; i++){
            console.log('⬛'.repeat(ratios[i])+' '.repeat(i));
        }
        return ("Final grade for all found marks in percentage: "+((sum/fullmarks)*100) + "%");
    }
    else {
        console.log("Minimum input is 1!");
    }
}

