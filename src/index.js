import "./style.css"
import home from './home.js'
import menu from './menu.js'
import location from './location.js'
import contact from './contact.js'

function navBar() {
    const header = document.querySelector('header');
    const nav = document.createElement('nav');
    const logo = document.createElement('h3');
    const list = document.createElement('ul');
    nav.appendChild(logo);
    logo.textContent = 'Gourmet.'
    nav.appendChild(list);  
    list.innerHTML = 
    `
    <li>MENU</li>
    <li>LOCATIONS</li>
    <li>CONTACT</li>
    `
    header.appendChild(nav);
}
function footer() {
    const footer = document.querySelector('footer');
    footer.textContent = 'Made by Lizzy®'
}

navBar()
footer()
home()

const tab = document.querySelector('nav');
tab.addEventListener('click', function(e) {
    if(e.target.textContent === 'Gourmet.') {
        home()
    } else if(e.target.textContent === 'MENU') {
        menu()
    } else if(e.target.textContent === 'LOCATIONS') {
        location()
    } else if(e.target.textContent === 'CONTACT') {
        contact()
    }
})