let submitButton = document.getElementById("submit-button");
let theFirstValue = document.getElementById("the_first_number");
let theSecondValue = document.getElementById("the_second_number");
let subScreen1 = document.getElementById("screen-sub-1");
let subScreen3 = document.getElementById("screen-sub-3");

submitButton.addEventListener("click", function values() {
    event.preventDefault();
    var FirstValue = theFirstValue.value ;
    var SecondValue = theSecondValue.value;
    subScreen1.innerText=5;
    subScreen3.innerText=10;
});
 
