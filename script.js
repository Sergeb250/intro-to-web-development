function changeColor(color){
    let section=document.getElementById('coding-journey');
    section.style.backgroundColor= color;

}

document.getElementById('intro').addEventListener('click',() => changeColor("#2CA02C"));
document.getElementById('react').addEventListener('click', () => changeColor("#FF7F0E"));

document.getElementById('backend').addEventListener('click', () => changeColor("#9467BD"));
