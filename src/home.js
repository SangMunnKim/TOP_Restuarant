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

export default createHome;
