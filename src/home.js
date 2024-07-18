import sushiImage from './img/sushi1.jpg';

const homeButton = document.getElementById('home');

const button = document.addEventListener('click', (e) => {
    if (e.target === homeButton) {
        loadHome(content);
    }
});

function createHome() {
    const home = document.createElement('div');
    const heading = document.createElement('h1');
    const content = document.createElement('p');

    heading.innerHTML = 'Welcome to our restaurant!';
    content.innerHTML = 'We serve the best sushi in town.';

    home.appendChild(heading);
    home.appendChild(content);

    return home;
}

function loadHome(div) {
    div.innerHTML = '';
    div.style.backgroundImage = `url(${sushiImage})`;
    if (div) {
        div.appendChild(createHome());
    } else {
        console.error('Content element not found!');
    }
}

export {button, loadHome};
