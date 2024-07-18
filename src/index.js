import './styles.css';
import createHome from './home';
import sushiImage from './img/sushi1.jpg';

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('#content');
    if (content) {
      content.appendChild(createHome());
      content.style.backgroundImage = `url(${sushiImage})`;
    } else {
      console.error('Content element not found!');
    }
  });