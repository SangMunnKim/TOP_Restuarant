import './styles.css';
import { Homebutton, loadHome } from './home.js';
import { Menubutton } from './menu.js';
import { Aboutbutton } from './about.js';

const contentDiv = document.querySelector('#content');

init();

function init() {
  loadHome(contentDiv);
  Homebutton;
  Menubutton;
  Aboutbutton;
}