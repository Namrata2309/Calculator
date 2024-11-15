let displayBox = document.getElementById("inputBox")
const ACbtn = document.getElementById("ACbtn");
const DEbtn = document.getElementById("DEbtn");
const dot = document.getElementById("dotbtn");
const slash = document.getElementById("slashbtn");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multiply = document.getElementById("multiply");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const minus = document.getElementById("minus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const plus = document.getElementById("plus");
const doubleZero = document.getElementById("doubleZero");
const zero = document.getElementById("zero");
const equalTo = document.getElementById("equalTo");

ACbtn.addEventListener("click", ()=>{
    displayBox.value=" "
})
DEbtn.addEventListener("click", ()=>{
    displayBox.value=displayBox.value.slice(0,-1);
})
dot.addEventListener("click", ()=>{
    displayBox.value+="."
})
slash.addEventListener("click", ()=>{
    displayBox.value+="/"
})
seven.addEventListener("click", ()=>{
    displayBox.value+="7"
})
eight.addEventListener("click", ()=>{
    displayBox.value+="8"
})
nine.addEventListener("click", ()=>{
    displayBox.value+="9"
})
multiply.addEventListener("click", ()=>{
    displayBox.value+="*"
})
four.addEventListener("click", ()=>{
    displayBox.value+="4"
})
five.addEventListener("click", ()=>{
    displayBox.value+="5"
})
six.addEventListener("click", ()=>{
    displayBox.value+="6"
})
minus.addEventListener("click", ()=>{
    displayBox.value+="-"
})
one.addEventListener("click", ()=>{
    displayBox.value+="1"
})
two.addEventListener("click", ()=>{
    displayBox.value+="2"
})
three.addEventListener("click", ()=>{
    displayBox.value+="3"
})
plus.addEventListener("click", ()=>{
    displayBox.value+="+"
})
doubleZero.addEventListener("click", ()=>{
    displayBox.value+="00"
})
zero.addEventListener("click", ()=>{
    displayBox.value+="0"
})
equalTo.addEventListener("click", ()=>{
    try {
        displayBox.value = eval(displayBox.value)
    } catch (error) {
        displayBox.value = ' '
    }
    console.log(displayBox.value)
})