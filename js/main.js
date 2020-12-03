const about = document.getElementById('about');
const menu = document.getElementById('menu');
const locations = document.getElementById('location');
const contact = document.getElementById('contact');

const arr = ['about', 'menu', 'location', 'contact'];

let path = window.location.pathname;
let page = path.split('/').pop();

arr.forEach((elem) => {
    if (elem+'.html' === page) {
        document.getElementById(elem).parentElement.classList.add('currentLink');
    } else {
        document.getElementById(elem).parentElement.classList.remove('currentLink');
    }
})

