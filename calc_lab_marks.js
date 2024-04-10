console.log("Use calcGrade(number of lab marks released) to calculate the current grade of the all lab marks.\nExample: calcGrade(2) will calculate the grade of the first 2 lab marks.")

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
    console.log("Your lab "+i+" mark: " + grade + "/" + fullmark);
    return {grade: grade, fullmark: fullmark};
}

function calcGrade(labnum){ //labnum: numbers of labs marks released
    var sum = 0;
    var fullmarks = 0;
    var ratios = []
    if (labnum >= 1) {
        var calc = each(493133, 1);
        sum += calc.grade;
        fullmarks += calc.fullmark;
        ratios.push(parseInt((calc.grade/calc.fullmark)*10));
        for (var i = 0; i < (labnum-1); i++){
            try {
                calc = each(493138+i, i+2);
                sum += calc.grade;
                fullmarks += calc.fullmark;
                ratios.push(parseInt((calc.grade/calc.fullmark)*10));
            }
            catch (TypeError) {
                console.log("Cannot find the rest lab marks from "+(i+2)+" :( Possibly not released yet!");
                break;
            }
        } 
        console.log("Horizontal bar graph of the lab marks:");
        for (var i = 0; i < ratios.length; i++){
            console.log('⬛'.repeat(ratios[i])+' '.repeat(i));
        }
        return ("Final grade for all found marks in percentage: "+((sum/fullmarks)*100) + "%");
    }
    else {
        console.log("Minimum input is 1!");
    }
}

