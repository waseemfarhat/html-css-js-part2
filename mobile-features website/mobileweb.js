const circleEl=document.getElementById('circle');
const upEl=document.getElementById('up');
const downEl=document.getElementById('down');
var rotatesum;
var rotatevalue=circleEl.style.transform;
upEl.addEventListener('click',()=>{

rotatesum=rotatevalue+'rotate(-90deg)';
circleEl.style.transform=rotatesum;
rotatevalue=rotatesum;
})
downEl.addEventListener('click',()=>{

    rotatesum=rotatevalue+'rotate(90deg)';
    circleEl.style.transform=rotatesum;
    rotatevalue=rotatesum;
    })







