let heading=document.getElementById("heading");
window.addEventListener('scroll', () => {
        let value = window.scrollY;
        
        // Check if the scroll position is greater than a certain threshold
        if (value >= 400) {
            // Add the hidden-heading class to hide the heading
            heading.classList.add("hidden-heading");
        } else {
            // Remove the hidden-heading class to show the heading
            heading.classList.remove("hidden-heading");
        }
    });
window.addEventListener('scroll',() => {
    let value = window.scrollY;
    
    heading.style.marginTop = value * 2 + 'px';
})
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
function contactSubmit(){
    document.getElementById("name").value=" "
    document.getElementById("email").value=" "
    document.getElementById("comments").value=" "
    document.querySelector("form").reset();
}
