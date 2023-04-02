let input = document.getElementById("input");
let button1 = document.getElementById("grid-items0");
let button2 = document.getElementById("grid-items1");
let button3 = document.getElementById("grid-items2");
let button4 = document.getElementById("grid-items3");
let button5 = document.getElementById("grid-items4");
let button6 = document.getElementById("grid-items5");
let button7 = document.getElementById("grid-items6");
let button8 = document.getElementById("grid-items7");
let button9 = document.getElementById("grid-items8");
let button0 = document.getElementById("grid-items9");
let buttona = document.getElementById("grid-items10");
let buttonb = document.getElementById("grid-itemsa");
let buttonc = document.getElementById("grid-itemsb");
let buttond = document.getElementById("grid-itemsc");
let buttone = document.getElementById("grid-itemsd");
let buttonf = document.getElementById("grid-itemse");
let string = "";
button1.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + button1.innerText;
    string = string + button1.innerText;
})
button2.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + button2.innerText;
    string = string + button2.innerText;
})
button3.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + button3.innerText;
    string = string + button3.innerText;
})
button4.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + button4.innerText;
    string = string + button4.innerText;
})
button5.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + button5.innerText;
    string = string + button5.innerText;
})
button6.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + button6.innerText;
    string = string + button6.innerText;
})
button7.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + button7.innerText;
    string = string + button7.innerText;
})
button8.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + button8.innerText;
    string = string + button8.innerText;
})
button9.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + button9.innerText;
    string = string + button9.innerText;
})
button0.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + button0.innerText;
    string = string + button0.innerText;
})
buttona.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + buttona.innerText;
    string = string + buttona.innerText;
})
buttonb.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + buttonb.innerText;
    string = string + buttonb.innerText;
})
buttonc.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + buttonc.innerText;
    string = string + buttonc.innerText;
})
buttond.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + buttond.innerText;
    string = string + buttond.innerText;
})
buttone.addEventListener("click", ()=>{ 
    input.innerText = input.innerText + buttone.innerText;
    string = string + buttone.innerText;
})
let buttonm = document.querySelector(".modulus");
buttonm.addEventListener("click", ()=>{
    input.innerText = input.innerText + buttonm.innerText;
    string = string + buttonm.innerText;
})

buttonf.addEventListener("click", ()=>{ 
    for(let i=0; i<string.length; i++){
        if(string[i] == "+"){
            input.innerText = eval(string);
        }
        if(string[i] == "-"){
            input.innerText = eval(string);
        }
        if(string[i] == "*"){
            input.innerText = eval(string);
        }
        if(string[i] == "/"){
            input.innerText = eval(string);
        }
        if(string[i] == "%"){
            input.innerText = eval(string);
        }
    }
})
let reset = document.querySelector(".reset");
reset.addEventListener("click", ()=>{
    string = "";
    input.innerText = "";
})
let logo = document.querySelector(".logo");
logo.addEventListener("click", ()=>{
    if(document.body.style.backgroundColor == "red"){
        document.body.style.backgroundColor = "white";
    }
    else{
        document.body.style.backgroundColor = "red";
        document.querySelector(".container").style.border = "5px solid white"; 
    }
})

let back = document.querySelector(".back");
back.addEventListener("click", ()=>{
    string = string.substring(0, string.length-1);
    input.innerText = string;
})