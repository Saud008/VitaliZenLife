
const lists=document.querySelector('.lists')
function myFunction(x) {
    lists.classList.toggle("hidden");
    x.classList.toggle("change");
}



function searchfunc() {
var input, filter,block,name, a, i, txtValue, hid;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
block = document.getElementsByClassName("cureBlocks")
name = document.getElementsByClassName("collapsible")

for (i = 0; i < block.length; i++) {
    a = name[i].innerHTML;
    console.log(a.toUpperCase())
    
    if (a.toUpperCase().indexOf(filter) > -1) {
        block[i].style.display = "";
        
        

    } else {
        block[i].style.display = "none";
    }
}
}



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
    content.style.display = "none";
    content.style.height = "0";
    
    } else {
    content.style.display = "block";
    content.style.height = "fit-content";
    }
});
}



const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
    entry.target.classList.add('show')
    }
    else{
    entry.target.classList.remove('show')
    }
})
})

const hiddenElements = document.querySelectorAll('.slide');
hiddenElements.forEach((el) => observer.observe(el));
