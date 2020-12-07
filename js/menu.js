const menuContainer = document.querySelector('.menuContainer');
const menuIconContainer = document.querySelector('.menuIconContainer');

const active = (target) => {
    target.classList.remove('filterBlack');
}

const disable = (target) => {
    target.classList.add('filterBlack');
}

const showMenu = (target) => {
    const arr = ['coffee', 'drink', 'pastry', 'brunch'];

    menuIconContainer.style.display = 'none';
    menuContainer.style.display = 'block';
    
    arr.forEach((elem) => {
        if(target.id === elem) {
            const targetMenu = document.querySelector(`#${elem}Menu`);
            
            targetMenu.style.display = 'block';
        }
    })

}

const hideMenu = () => {
    const menu = document.querySelectorAll('.menu');
    menuContainer.style.display = 'none';
    menu.forEach( (elem) => {
        elem.style.display = 'none';
    })
    menuIconContainer.style.display = 'flex';
}