const btn=document.querySelector('.menu-btn');const nav=document.querySelector('.nav-links');if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
