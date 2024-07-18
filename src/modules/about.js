import sushiImage from '../img/sushi3.jpg';

const aboutButton = document.getElementById('about');

const Aboutbutton = document.addEventListener('click', (e) => {
    if (e.target === aboutButton) {
        loadAbout(content);
    }
});

function createAbout() {
    const about = document.createElement('div');
    const heading = document.createElement('h1');
    const content = document.createElement('p');

    heading.innerHTML = 'This is who we are!';
    content.innerHTML = 'We are a sushi restaurant.';

    about.appendChild(heading);
    about.appendChild(content);

    return about;
}

function loadAbout(div) {
    div.innerHTML = '';
    div.style.backgroundImage = `url(${sushiImage})`;
    if (div) {
        div.appendChild(createAbout());
        div.style.color = 'white';
    } else {
        console.error('Content element not found!');
    }
}

export { Aboutbutton };
