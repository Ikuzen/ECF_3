function navigateSlide(number){
    elements = document.getElementsByClassName('slide');
    for(let i=1; i<=3; i++){
        if(i === number){
            elements[i-1].style.display = 'flex';
        }else{
            elements[i-1].style.display = 'none'
        }
    }
}

function displayMenu(event){
    element = document.getElementById('hamburger-menu-links')
    !element.style.display || element.style.display === 'none' ? element.style.display = 'flex' : element.style.display = 'none' 
}

function displayFormDialog(event){
    dialogElement = document.getElementById('dialog');
    element = document.getElementById('contact-form');
    dialogElement.style.display = 'block'
    element.style.display = 'block';
    
}

window.onclick = (event)=>{
    if(event.target.id === 'dialog' || event.target.id ==='form-close-button') {
        dialogElement = document.getElementById('dialog');
        dialogElement.style.display = 'none';
    }
}