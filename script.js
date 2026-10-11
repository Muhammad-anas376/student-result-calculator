// Calculate Result

document.querySelector(".btn-primary").addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let father = document.getElementById("father").value;
    let roll = document.getElementById("roll").value;

    let eng = Number(document.getElementById("eng").value);
    let math = Number(document.getElementById("math").value);
    let comp = Number(document.getElementById("comp").value);

    if (name == "" || father == "" || roll == "") {
        alert("Please fill all fields!");
        return;
    }

    let total = eng + math + comp;
    let percentage = (total / 300) * 100;

    let grade = "";
    let status = "";

    if (percentage >= 80) {
        grade = "A+";
        status = "Pass";
    }
    else if (percentage >= 70) {
        grade = "A";
        status = "Pass";
    }
    else if (percentage >= 60) {
        grade = "B";
        status = "Pass";
    }
    else if (percentage >= 50) {
        grade = "C";
        status = "Pass";
    }
    else if (percentage >= 40) {
        grade = "D";
        status = "Pass";
    }
    else {
        grade = "F";
        status = "Fail";
    }

    document.getElementById("result").style.display = "block";

    document.getElementById("rName").innerHTML = name;
    document.getElementById("rFather").innerHTML = father;
    document.getElementById("rRoll").innerHTML = roll;
    document.getElementById("rTotal").innerHTML = total + " / 300";
    document.getElementById("rPercentage").innerHTML = percentage.toFixed(2) + "%";
    document.getElementById("rGrade").innerHTML = grade;
    document.getElementById("rStatus").innerHTML = status;
    displayResult(percentage, grade, status);

});