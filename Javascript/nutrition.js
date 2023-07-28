
function openNav() {
    console.log("open")
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    console.log("open")
    document.getElementById("myNav").style.width = "0%";
}

const myNav = document.getElementById('mynav');
window.onscroll = function () { 
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop >= 400 ) {
        myNav.classList.add("text-black");
        myNav.classList.remove("text-white");
        myNav.classList.add("bg-slate-300");
        myNav.classList.remove("bg-transparent");
        
    } 
    else {
        myNav.classList.add("text-white");
        myNav.classList.remove("text-black");
        myNav.classList.add("bg-transparent");
        myNav.classList.remove("bg-slate-300");
        
    }
};
const textArray = [
    "Meal Plan Subscriptions",
    "Get a Customised Diet Plan",
    "Who says Eating Healthy is Boring?"
];
const paraArray = [
    "We have got different meal plans to cater your specific requirements be it weight loss,staying healthy or building muscles",
    "Consult our nutritionist and get a specified Diet plan for yourself."
]
const container = document.querySelector('.container h1');
const para = document.querySelector('.container p');
function updateText(index) {
    container.textContent = textArray[index];
    para.textContent = paraArray[index];
}
let currIndex = 0;
function changeText() {
    updateText(currIndex);
    currIndex = (currIndex + 1) % 3;
}
setInterval(changeText,4000);



