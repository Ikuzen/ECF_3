function navigateSlide(number){
    elements = document.getElementsByClassName('slide');
    console.log(elements)
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
    element = document.getElementById('contact-form')
    element.style.display = 'block'
}