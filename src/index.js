import './styles.css';
import image from './img/sushi2.jpg';

const content = document.querySelector('#content');
const myImage = new Image();
myImage.src = image;  
content.appendChild(myImage);