
const mobile_contaier=document.querySelector(".Mobile-menu-bar-mobiles")
const mobile_list_el=document.getElementById('mobile-list-click');
const menu_container=document.getElementById("menu-container")
const menu_lines=document.getElementById('menu-line')
const x_mark=document.querySelector('.x-mark').addEventListener('click',()=>{
    menu_container.style.transition='left 0.5s ease-in-out'
menu_container.style.display='none'
})
menu_lines.addEventListener('click',()=>{
    menu_container.style.display='block'
    menu_container.style.left='0'
    menu_container.style.transition='left 0.5s ease-in-out'
})

let isdisplayed=true
mobile_list_el.addEventListener('click',()=>{

    if (mobile_contaier.style.display==='none'){
        mobile_contaier.style.display='block'
    }
    else{
        mobile_contaier.style.display='none'
    }
})