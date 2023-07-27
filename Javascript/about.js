document.addEventListener('scroll',()=>{
    const header = document.querySelector('nav');
    if(window.scrollY > 0){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showEle');
        }
        else{
            entry.target.classList.remove('showEle');
        }
        
    })
})

const hiddenElementsL= document.querySelectorAll('.hiddenEleLeft');
hiddenElementsL.forEach((el) => observer.observe(el));
const hiddenElementsR= document.querySelectorAll('.hiddenEleRight');
hiddenElementsR.forEach((el) => observer.observe(el));
