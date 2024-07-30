// Hide all tab contents
function press(Biography){
    // get all elements in content class and hid them
    var message = document.querySelectorAll('.content');
    // looping throught each content
    message.forEach(function(get_content){
        get_content.classList.remove('show');
    });


    // Remove 'active' class from all subtitles"
    var option = document.querySelectorAll('.sub-title')

    // looping through each tabs
    option.forEach(function(checkbox){
        checkbox.classList.remove('active')
    });


    // Show the selected tab content and set the corresponding subtitle as 'active'
    document.getElementById(Biography).classList.add('show');


    // Ensure there is an active element before trying to remove the 'active' class
    var activeElement = document.querySelector('.sub-title.active')

    if (activeElement){
        activeElement.classList.remove('active');
    }

     // Set the corresponding subtitle as 'active'
    document.querySelector('.sub-title[onclick="press(\'' + Biography + '\')"]').classList.add('active');
}

// Initial display setup: Show the first tab content and set the first tab as active
document.addEventListener('DOMContentLoaded', function(){
    press('skills');
});

// light dark mode theme icon
// constant variable for selecting the dark mode button

const toggleButton = document.getElementById('darkMode')
const body = document.body;

// adding an event listener method for clicking
toggleButton.addEventListener('click', function(event){
    // prevent browser behaviour
    event.preventDefault();
    
    // switching the dark mode class when toggle
    body.classList.toggle('dark-mode-button')

    // changing background color based on click
    if(body.classList.contains('dark-mode-button')){
        // dark mode background color
        body.style.backgroundColor = '#121212';
        body.style.color = '#fff'
    }else{
        // light mode background color
        body.style.backgroundColor = 'rgb(255, 255, 255)';
        body.style.color = '#333'
    }
    // condition for changing the icon into light or dark
    const icon = toggleButton.querySelector('i');
    if (document.body.classList.contains('dark-mode-button')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    else{
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
})

// variable for side menu on mobile devices
var menu = document.getElementById("side_menu")

// function for the open and close menu to be clicked
function openMenu(){
    menu.style.right = "0";
}
function closeMenu(){
    menu.style.right = "-240px";
}
