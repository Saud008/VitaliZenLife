
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
