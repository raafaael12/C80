nameOfTheStudentArray = []

function submit(){
var displayStudentArray = [];

for (var i= 0; i<= 4; i++){
    var NomeDoEstudante1 = document.getElementById("NomeDoEstudante").value;
    console.log(NomeDoEstudante1)
    nameOfTheStudentArray.push(NomeDoEstudante1)
    console.log(nameOfTheStudentArray)

}
var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length; 
console.log(lenghtOfNameOfStudentsArray);
 for (var k = 0; k < lenghtOfNameOfStudentsArray; k++) { 
    displayStudentArray.push("<h4>NOME- "+ nameOfTheStudentArray[k] + "</h4>"); 
console.log(displayStudentArray); }

document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

var removeCommas = displayStudentArray.join(" ")
console.log(removeCommas)
document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
 }

 function sorting(){
    nameOfTheStudentArray.sort()
    var displayStudentArray = [];

for (var i= 0; i<= 4; i++){
    var NomeDoEstudante1 = document.getElementById("NomeDoEstudante").value;
    console.log(NomeDoEstudante1)
    nameOfTheStudentArray.push(NomeDoEstudante1)
    console.log(nameOfTheStudentArray)

}
var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length; 
console.log(lenghtOfNameOfStudentsArray);
 for (var k = 0; k < lenghtOfNameOfStudentsArray; k++) { 
    displayStudentArray.push("<h4>NOME- "+ nameOfTheStudentArray[k] + "</h4>"); 
console.log(displayStudentArray); }

document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

var removeCommas = displayStudentArray.join(" ")
console.log(removeCommas)
document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
 }