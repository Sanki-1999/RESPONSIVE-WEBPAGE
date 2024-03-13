navbar=document.querySelector('.navbar')
rightnav=document.querySelector('.rightnav')
burger=document.querySelector('.burger')
navlist=document.querySelector('.nav-list')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp')
    navlist.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')


})