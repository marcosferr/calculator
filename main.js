//Variable declaration
let number1 ="";
let number2 = "";
let operator ="";
let display = document.querySelector("#screen");
let clearBtn = document.querySelector("#clearBtn");
let operateBtn = document.querySelector("#operateBtn");
let operatorBtn = document.querySelectorAll(".operator");
let numberBtn = document.querySelectorAll(".number");
//Buttons event listeners
clearBtn.addEventListener('click', function(e){
    clearAll();
});
operateBtn.addEventListener('click',function(e){
    operate(operator,number1,number2);
})
numberBtn.forEach(btn => btn.addEventListener("click",(e)=> {
    updateNumber(e.target.innerHTML);
}));
operatorBtn.forEach(btn => btn.addEventListener("click",(e)=> {
    updateOperator(e.target.innerHTML);
}));


//functions
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function substract(a,b){
    return a-b;
}
function divide(a,b){
    return parseFloat(a/b).toFixed(2);
}
function operate(operator, a , b){
    a=parseInt(a);
    b=parseInt(b);
    if(number1==="" || number2 ==="") return null;
    switch(operator){
        case "+":
            updateScreen(add(a,b));
            break;
        case "-":
            updateScreen(substract(a,b));
            break;
        case "/":
            if(b===0){
                updateScreen("Math error x.x");
                return null;
            }
            updateScreen(divide(a,b));
            break;
        case "*":
            updateScreen(multiply(a,b));
            break;
    }
    number1 = display.innerHTML;
    number2 ="";
    operator="";
}
function updateScreen(value){
    display.innerHTML="";
    let text = document.createTextNode(value);
    display.appendChild(text);
}
function clearAll(){
    updateScreen("0");
    number1="";
    number2="";
    operator="";
}
function updateOperator(value){
    operator=value;
}
function updateNumber(number){
    if(operator===""){
        number1 +=number;
        updateScreen(number1);
    }
    else{
        number2 +=number;
        updateScreen(number2);
    }
}

