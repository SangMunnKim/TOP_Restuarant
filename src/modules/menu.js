import sushiImage from '../img/sushi2.jpg';

const menuButton = document.getElementById('menu');

const Menubutton = document.addEventListener('click', (e) => {
    if (e.target === menuButton) {
        loadMenu(content);
    }
});

function createMenu() {
    const menu = document.createElement('div');
    const heading = document.createElement('h1');
    const content = document.createElement('p');

    heading.innerHTML = 'This is our menu!';
    content.innerHTML = 'We serve sushi!';

    menu.appendChild(heading);
    menu.appendChild(content);

    return menu;
}

function loadMenu(div) {
    div.innerHTML = '';
    div.style.backgroundImage = `url(${sushiImage})`;
    if (div) {
        div.appendChild(createMenu());
        div.style.color = 'black';
    } else {
        console.error('Content element not found!');
    }
}

export {Menubutton};
